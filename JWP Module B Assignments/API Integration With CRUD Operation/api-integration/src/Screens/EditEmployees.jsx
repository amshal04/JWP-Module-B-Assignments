import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditEmployees = () => {
  const { id: employeesid } = useParams();
  const [id, setId] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("employees");
    if (storedData) {
      const employeesList = JSON.parse(storedData);
      const employeeToEdit = employeesList.find(emp => emp.id === parseInt(employeesid));

      if (employeeToEdit) {
        setId(employeeToEdit.id);
        setFirstName(employeeToEdit.firstName);
        setLastName(employeeToEdit.lastName);
        setEmail(employeeToEdit.email);
        setUsername(employeeToEdit.username);
      }
    }
  }, [employeesid]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !username) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedEmployee = {
      id: parseInt(id),
      firstName: firstname,
      lastName: lastname,
      email,
      username,
    };

    const storedData = localStorage.getItem("employees");
    if (storedData) {
      let employeesList = JSON.parse(storedData);
      const index = employeesList.findIndex(emp => emp.id === parseInt(id));

      if (index !== -1) {
        employeesList[index] = updatedEmployee;
        localStorage.setItem("employees", JSON.stringify(employeesList));
        alert("Employee updated successfully!");
        navigate("/");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Edit Employee Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">ID</label>
          <input type="text" className="form-control" id="id" value={id} disabled />
        </div>

        <div className="mb-3">
          <label htmlFor="first-name" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            onMouseDown={() => setValidation(true)}
          />
          {!firstname && validation && <div className="text-danger">Please enter first name</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="last-name" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            onMouseDown={() => setValidation(true)}
          />
          {!lastname && validation && <div className="text-danger">Please enter last name</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onMouseDown={() => setValidation(true)}
          />
          {!email && validation && <div className="text-danger">Please enter email</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onMouseDown={() => setValidation(true)}
          />
          {!username && validation && <div className="text-danger">Please enter username</div>}
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Update</button>
          <Link to="/" className="btn btn-secondary">Back</Link>
        </div>
      </form>
    </div>
  );
};

export default EditEmployees;
