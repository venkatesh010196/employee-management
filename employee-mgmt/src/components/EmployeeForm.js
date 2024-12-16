
import React, { useEffect } from "react";
import "./EmployeeForm.css";

const EmployeeForm = ({ employee, formData, setFormData, onSubmit, onCancel }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  useEffect(() => {
    if (employee) {
      setFormData(employee);
    }
  }, [employee, setFormData]);

  return (
    <div className="modal-overlay">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>{employee ? "Edit Employee" : "Add Employee"}</h2>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Phone No:
          <input 
            type="text" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            pattern="^[0-9]*$" 
            title="Please enter only numbers." 
          />
        </label>
        <div>
          <button type="submit" className="submit-button">{employee ? "Update" : "Add"}</button>
          <button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;




