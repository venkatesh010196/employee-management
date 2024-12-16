import React from "react";
import "./EmployeeTable.css"; 

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phoneNumber}</td>
            <td>
              <button className="edit-button" onClick={() => onEdit(employee)}>Edit</button>
            </td>
            <td>
              <button  className="delete-button" onClick={() => onDelete(employee.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;