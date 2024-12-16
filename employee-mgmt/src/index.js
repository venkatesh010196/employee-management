// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import EmployeeTable from "./EmployeeTable";
// import EmployeeForm from "./EmployeeForm";

// const App = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get("http://localhost:8090/employees");
//       setEmployees(response.data);
//     } catch (error) {
//       console.error("Error fetching employees", error);
//     }
//   };

//   const handleAdd = () => {
//     setSelectedEmployee(null);
//     setIsFormVisible(true);
//   };

//   const handleEdit = (employee) => {
//     setSelectedEmployee(employee);
//     setIsFormVisible(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8090/employees/${id}`);
//       fetchEmployees();
//     } catch (error) {
//       console.error("Error deleting employee", error);
//     }
//   };

//   const handleFormSubmit = async (employee) => {
//     try {
//       if (employee.id) {
//         await axios.put(`http://localhost:8090/employees/${employee.id}`, employee);
//       } else {
//         await axios.post("http://localhost:8090/employees", employee);
//       }
//       setIsFormVisible(false);
//       fetchEmployees();
//     } catch (error) {
//       console.error("Error saving employee", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Employee Management</h1>
//       <button onClick={handleAdd}>Add Employee</button>
//       <EmployeeTable 
//         employees={employees} 
//         onEdit={handleEdit} 
//         onDelete={handleDelete} 
//       />
//       {isFormVisible && (
//         <EmployeeForm 
//           employee={selectedEmployee} 
//           onSubmit={handleFormSubmit} 
//           onCancel={() => setIsFormVisible(false)} 
//         />
//       )}
//     </div>
//   );
// };

// export default App;


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

