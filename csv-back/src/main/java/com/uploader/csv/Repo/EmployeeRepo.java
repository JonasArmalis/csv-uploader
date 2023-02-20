package com.uploader.csv.Repo;

import com.uploader.csv.Models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {
}
