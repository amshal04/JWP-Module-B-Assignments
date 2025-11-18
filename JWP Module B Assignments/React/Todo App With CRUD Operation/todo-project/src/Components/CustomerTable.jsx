import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash, FaPlus, FaEraser, FaClipboardList } from 'react-icons/fa';


const CustomerTable = ({ records, handleEdit, handleDelete, handleClearAll, handleView, onAddNew }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
        padding: '20px'
      }}
    >
      <div className="p-4 shadow bg-white rounded w-100" style={{ maxWidth: '1000px' }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold text-center">
          <FaClipboardList className="me-2" />
           Customer List
         </h4>
          <Button variant="success" onClick={onAddNew}>
            <FaPlus className="me-2" /> Add New Customer
          </Button>
        </div>

        {records.length > 0 ? (
          <>
            <Table striped bordered hover responsive className="mb-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>Tracking No</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map((c, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{c.date}</td>
                    <td>{c.name}</td>
                    <td>{c.address}</td>
                    <td>{c.contact}</td>
                    <td>{c.tracking}</td>
                    <td className="text-center">
                      <Button variant="info" size="sm" className="me-1" onClick={() => handleView(i)}>
                        <FaEye />
                      </Button>
                      <Button variant="warning" size="sm" className="me-1" onClick={() => handleEdit(i)}>
                        <FaEdit />
                      </Button>
                      <Button variant="danger" size="sm" onClick={() => handleDelete(i)}>
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="text-end">
              <Button variant="danger" onClick={handleClearAll}>
                <FaEraser className="me-2" /> Clear All
              </Button>
            </div>
          </>
        ) : (
          <p className="text-muted text-center">No customer records available.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerTable;
