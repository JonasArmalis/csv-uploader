package com.uploader.csv.Controller;

import com.opencsv.bean.*;
import com.uploader.csv.Models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.uploader.csv.Repo.EmployeeRepo;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.List;
@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeController {
    @Autowired
    private EmployeeRepo repository;

    @GetMapping("/employees")
    public List<Employee> getEmployees () {
        return repository.findAll();
    }

    @PostMapping("/upload")
    public String importCSV(@RequestParam("file") MultipartFile csvFile) {
        System.out.println("File name: " + csvFile.getOriginalFilename());
        System.out.println("File size: " + csvFile.getSize());
        List<Employee> importedEmployees;
        importedEmployees = convertToModel(csvFile);
        repository.saveAll(importedEmployees);
        return "Employees imported...";
    }

    //Parse csv to model list
    public static List<Employee> convertToModel(MultipartFile file) {
        List<Employee> models;
        try (Reader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
            CsvToBean<?> csvToBean = new CsvToBeanBuilder(reader)
                    .withType(Employee.class)
                    .withIgnoreLeadingWhiteSpace(true)
                    .withIgnoreEmptyLine(true)
                    .build();
            models = (List<Employee>) csvToBean.parse();
        } catch (Exception ex) {
            //Log.error("error parsing csv file {} ", ex);d
            throw new IllegalArgumentException(ex.getCause().getMessage());
        }
        return models;
    }
}
