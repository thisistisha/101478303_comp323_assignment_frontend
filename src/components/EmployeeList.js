import React, { useState, useEffect } from 'react';
import { fetchEmployees, deleteEmployee } from '../services/api';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import './EmployeeList.css';  // Import the CSS for styling

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees().then((res) => setEmployees(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteEmployee(id).then(() => setEmployees(employees.filter((e) => e._id !== id)));
  };

  return (
    <div className="employee-list-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp) => (
            <TableRow key={emp._id}>
              <TableCell>{`${emp.firstName} ${emp.lastName}`}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.department}</TableCell>
              <TableCell>
                <Button color="primary" onClick={() => console.log('Edit:', emp._id)}>
                  Edit
                </Button>
                <Button color="secondary" onClick={() => handleDelete(emp._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EmployeeList;
