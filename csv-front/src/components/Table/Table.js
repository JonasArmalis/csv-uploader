import React, { useEffect, useState } from "react";
import "./Table.css";

const Table = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async (url) => {
    try {
      const res = await fetch(url, {
        method: "GET",
      });

      const data = await res.json().catch((error) => {
        console.log("Error:", error);
      });

      if (data.length > 0) {
        setEmployees(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchEmployees("http://localhost:8080/employees");
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>phone number</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            const { id, name, email, phoneNumber } = emp;

            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
