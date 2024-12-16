import React, { useState, useEffect } from "react";
import {
  fetchEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "./components/services/api"; // Import API functions
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";
import "./App.css";
import Dialog from "./components/Dialog"; 

// const App = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     email: "",
//     phoneNumber: "",
//   });

//   useEffect(() => {
//     loadEmployees();
//   }, []);

//   const loadEmployees = async () => {
//     try {
//       const response = await fetchEmployees();
//       setEmployees(response.data);
//     } catch (error) {
//       console.error("Error fetching employees", error);
//     }
//   };

//   const handleAdd = () => {
//     setSelectedEmployee(null);
//     setFormData({
//       id: "",
//       name: "",
//       email: "",
//       phoneNumber: "",
//     }); // Clear the form data before showing the form
//     setIsFormVisible(true);
//   };

//   const handleEdit = (employee) => {
//     setSelectedEmployee(employee);
//     setFormData(employee); // Set selected employee to form
//     setIsFormVisible(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteEmployee(id);
//       loadEmployees();
//     } catch (error) {
//       console.error("Error deleting employee", error);
//     }
//   };

//   const handleFormSubmit = async (employee) => {
//     try {
//       if (employee.id) {
//         await updateEmployee(employee.id, employee);
//       } else {
//         await addEmployee(employee);
//       }
//       setIsFormVisible(false);
//       loadEmployees();
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
//           formData={formData}
//           setFormData={setFormData}
//           onSubmit={handleFormSubmit} 
//           onCancel={() => setIsFormVisible(false)} 
//         />
//       )}
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isEditDialogVisible, setIsEditDialogVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await fetchEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees", error);
    }
  };

  const handleAdd = () => {
    setSelectedEmployee(null);
    setFormData({
      id: "",
      name: "",
      email: "",
      phoneNumber: "",
    });
    setIsFormVisible(true);
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setFormData(employee);
    setIsEditDialogVisible(true); // Show the dialog for editing
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      loadEmployees();
    } catch (error) {
      console.error("Error deleting employee", error);
    }
  };

  const handleFormSubmit = async (employee) => {
    try {
      if (employee.id) {
        await updateEmployee(employee.id, employee);
      } else {
        await addEmployee(employee);
      }
      setIsEditDialogVisible(false); // Hide the dialog if it was open
      setIsFormVisible(false);
      loadEmployees();
    } catch (error) {
      console.error("Error saving employee", error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Employee Management</h1>
      {/* Inline Add Employee Form */}
      <button className="add-button" onClick={handleAdd}>Add Employee</button>
      <EmployeeTable
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isFormVisible && (
        <EmployeeForm 
          employee={selectedEmployee} 
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleFormSubmit} 
          onCancel={() => setIsFormVisible(false)} 
        />
      )}
      {/* Dialog for Edit Employee */}
      <Dialog
        isVisible={isEditDialogVisible}
        onClose={() => setIsEditDialogVisible(false)}
      >
        <EmployeeForm
          employee={selectedEmployee}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleFormSubmit}
          onCancel={() => setIsEditDialogVisible(false) }
        />
      </Dialog>
    </div>
  );
};

export default App;

