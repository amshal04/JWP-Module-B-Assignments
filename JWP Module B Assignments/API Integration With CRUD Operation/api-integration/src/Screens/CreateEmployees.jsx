import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateEmployees = () => {
  const [id, setId] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id,
      firstName: firstname,
      lastName: lastname,
      email,
      username
    };

    // Get existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem("employees")) || [];

    // Add new employee to existing data
    const updatedData = [...existingData, newEmployee];

    // Save to localStorage
    localStorage.setItem("employees", JSON.stringify(updatedData));

    alert("Employee added successfully!");
    navigate("/");
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Add New Employee</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            value={id}
            required
            onChange={(e) => setId(e.target.value)}
            onMouseDown={() => setValidation(true)}
          />
          {id.length === 0 && validation && (
            <Alert variant="danger">Please enter your ID</Alert>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={firstname}
            required
            onChange={(e) => setFirstName(e.target.value)}
            onMouseDown={() => setValidation(true)}
          />
          {firstname.length === 0 && validation && (
            <Alert variant="danger">Please enter your First Name</Alert>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastname}
            required
            onChange={(e) => setLastName(e.target.value)}
            onMouseDown={() => setValidation(true)}
          />
          {lastname.length === 0 && validation && (
            <Alert variant="danger">Please enter your Last Name</Alert>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            onMouseDown={() => setValidation(true)}
          />
          {email.length === 0 && validation && (
            <Alert variant="danger">Please enter your Email</Alert>
          )}
        </Form.Group>

        <Form.Group className="mb-4" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
            onMouseDown={() => setValidation(true)}
          />
          {username.length === 0 && validation && (
            <Alert variant="danger">Please enter your Username</Alert>
          )}
        </Form.Group>

        <div className="d-flex gap-3">
          <Button variant="success" type="submit">Save</Button>
          <Link to="/" className="btn btn-secondary">Back</Link>
        </div>
      </Form>
    </Container>
  );
};

export default CreateEmployees;
