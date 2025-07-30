import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { FaTrash, FaEdit, FaEye, FaPlus, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeesTable = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const navigate = useNavigate();

  const DisplayDetails = (id) => {
    navigate(`/ViewDetails/${id}`);
  };

  const EditDetails = (id) => {
    
    navigate(`/EditEmployees/${id}`);
  };

  const RemoveDetails = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`https://dummyjson.com/users/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          alert("Removed Employee Successfully");
          setEmployees(employees.filter(emp => emp.id !== id));
        })
        .catch((err) => console.log(err.message));
    }
  };

  const removeSelected = () => {
    if (selectedIds.length === 0) {
      alert("Please select at least one employee.");
      return;
    }

    if (window.confirm("Are you sure you want to delete selected employees?")) {
      selectedIds.forEach(id => {
        fetch(`https://dummyjson.com/users/${id}`, {
          method: 'DELETE',
        }).catch(err => console.log("Delete failed:", err));
      });

      alert("Selected employees deleted!");
      setEmployees(employees.filter(emp => !selectedIds.includes(emp.id)));
      setSelectedIds([]);
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(employees.map(emp => emp.id));
    } else {
      setSelectedIds([]);
    }
  };


useEffect(() => {
  const localData = localStorage.getItem("employees");
  if (localData) {
    setEmployees(JSON.parse(localData));
  } else {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data.users);
        localStorage.setItem("employees", JSON.stringify(data.users)); 
      })
      .catch((err) => console.log(err.message));
  }
}, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>
          Manage <strong>Employees</strong>
        </h2>
        <div>
          <button className="btn btn-danger me-2" onClick={removeSelected}>
            <FaTimes className="me-2" /> Delete
          </button>
          <Link to="/CreateEmployees" className="btn btn-success">
            <FaPlus className="me-2" /> Add New Employee
          </Link>
        </div>
      </div>

      <Table bordered striped hover responsive>
        <thead className="table-dark">
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectedIds.length === employees.length && employees.length > 0}
                onChange={handleSelectAll}
              />
            </th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(emp.id)}
                  onChange={() => handleCheckboxChange(emp.id)}
                />
              </td>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>{emp.username}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => EditDetails(emp.id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-info btn-sm me-2"
                  onClick={() => DisplayDetails(emp.id)}
                >
                  <FaEye />
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => RemoveDetails(emp.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeesTable;
