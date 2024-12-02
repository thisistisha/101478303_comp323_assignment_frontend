import React, { useState } from 'react';
import { addEmployee } from '../services/api';
import { TextField, Button } from '@mui/material';
import './EmployeeForm.css';  // Import the CSS for styling

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    position: '',
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee).then(() => alert('Employee added!'));
  };

  return (
    <div className="employee-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add Employee</h2>
        <TextField
          name="firstName"
          label="First Name"
          value={employee.firstName}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="lastName"
          label="Last Name"
          value={employee.lastName}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="email"
          label="Email"
          value={employee.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="department"
          label="Department"
          value={employee.department}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="position"
          label="Position"
          value={employee.position}
          onChange={handleChange}
          fullWidth
        />
        <Button type="submit" color="primary" variant="contained">
          Add Employee
        </Button>
      </form>
    </div>
  );
};

export default EmployeeForm;
