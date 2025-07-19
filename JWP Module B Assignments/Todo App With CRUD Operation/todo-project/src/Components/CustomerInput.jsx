import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaSave, FaArrowLeft, FaEdit,  FaUsers } from 'react-icons/fa';

const CustomerInput = ({ customer, setCustomer, onSubmit, isEditing, setShowForm }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {
      ...(customer.date.trim() === '' ? { date: 'Date is required.' } : {}),
      ...(customer.name.trim() === ''
        ? { name: 'Name is required.' }
        : !/^[A-Za-z\s]+$/.test(customer.name)
        ? { name: 'Only letters and spaces allowed.' }
        : {}),
      ...(customer.address.trim() === '' ? { address: 'Address is required.' } : {}),
      ...(customer.contact.trim() === ''
        ? { contact: 'Contact is required.' }
        : !/^\d{10,15}$/.test(customer.contact)
        ? { contact: 'Enter 10 to 15 digit number.' }
        : {}),
      ...(customer.tracking.trim() === ''
        ? { tracking: 'Tracking number is required.' }
        : !/^\d{10,15}$/.test(customer.tracking)
        ? { tracking: 'Enter 10 to 15 digit number.' }
        : {})
    };

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleValidationSubmit = () => {
    if (validate()) {
      onSubmit();
      setErrors({});
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #e0c3fc, #8ec5fc)',
        padding: '20px'
      }}
    >
      <div className="p-4 shadow rounded bg-white w-100" style={{ maxWidth: '500px' }}>
        <h4 className="text-center mb-4 fw-bold">
        <FaUsers className="me-2" />
        Customer Records
        </h4>

        <Form className="d-flex flex-column gap-3">
          {['date', 'name', 'address', 'contact', 'tracking'].map((field, index) => (
            <Form.Group key={index}>
              <Form.Control
                name={field}
                type={field === 'date' ? 'date' : 'text'}
                value={customer[field]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                isInvalid={!!errors[field]}
              />
              <Form.Control.Feedback type="invalid">
                {errors[field]}
              </Form.Control.Feedback>
            </Form.Group>
          ))}

          <Button variant={isEditing ? 'primary' : 'success'} onClick={handleValidationSubmit}>
            {isEditing
              ? <><FaEdit className="me-2" /> Update Record</>
              : <><FaSave className="me-2" /> Add Record</>
            }
          </Button>

          <Button variant="secondary" onClick={() => setShowForm(false)}>
            <FaArrowLeft className="me-2" /> Back to List
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CustomerInput;
