import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerInput from './Components/CustomerInput';
import CustomerTable from './Components/CustomerTable';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [customer, setCustomer] = useState({
    date: '',
    name: '',
    address: '',
    contact: '',
    tracking: ''
  });

  const [records, setRecords] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const [viewCustomer, setViewCustomer] = useState(null);

  const handleSubmit = () => {
    const isEmpty = Object.values(customer).some(field => field.trim() === '');
    if (isEmpty) return;

    editIndex !== null
      ? setRecords(prev => prev.map((rec, i) => (i === editIndex ? customer : rec)))
      : setRecords(prev => [...prev, customer]);

    setCustomer({ date: '', name: '', address: '', contact: '', tracking: '' });
    setEditIndex(null);
    setShowForm(false);
  };

  const handleEdit = index => {
    setCustomer(records[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = index =>
    window.confirm("Delete this record?") &&
    setRecords(records.filter((_, i) => i !== index));

  const handleClearAll = () =>
    window.confirm("Delete all records?") && setRecords([]);

  const handleView = index => setViewCustomer(records[index]);
  const closeModal = () => setViewCustomer(null);
  const handleAddNew = () => {
    setCustomer({ date: '', name: '', address: '', contact: '', tracking: '' });
    setEditIndex(null);
    setShowForm(true);
  };

  return (
    <Container fluid className="p-2">
      <Row className="justify-content-center">
        <Col lg={12} className="p-0">
          {showForm ? (
            <CustomerInput
              customer={customer}
              setCustomer={setCustomer}
              onSubmit={handleSubmit}
              isEditing={editIndex !== null}
              setShowForm={setShowForm}
            />
          ) : (
            <CustomerTable
              records={records}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleClearAll={handleClearAll}
              handleView={handleView}
              onAddNew={handleAddNew}
            />
          )}
        </Col>
      </Row>

      <Modal show={!!viewCustomer} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {viewCustomer && (
            <ul className="list-unstyled">
              <li><strong>Date:</strong> {viewCustomer.date}</li>
              <li><strong>Name:</strong> {viewCustomer.name}</li>
              <li><strong>Address:</strong> {viewCustomer.address}</li>
              <li><strong>Contact:</strong> {viewCustomer.contact}</li>
              <li><strong>Tracking:</strong> {viewCustomer.tracking}</li>
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default App;
