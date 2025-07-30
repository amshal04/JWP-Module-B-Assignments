import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ViewDetails = () => {
  const { id } = useParams(); 
  const [employeesData, setEmployeesData] = useState(null); 

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found");
        }
        return res.json();
      })
      .then((data) => setEmployeesData(data))
      .catch((err) => console.log(err.message));
  }, [id]);

  return (
    <div className="container">
      <h2>Employee Details</h2>

      {employeesData ? (
        <div className="details">
          <p><strong>ID:</strong> {employeesData.id}</p>
          <p><strong>First Name:</strong> {employeesData.firstName}</p>
          <p><strong>Last Name:</strong> {employeesData.lastName}</p>
          <p><strong>Email:</strong> {employeesData.email}</p>
          <p><strong>Username:</strong> {employeesData.username}</p>
        </div>
      ) : (
        <p>Loading employee details...</p>
      )}

      <Link to="/" className="btn btn-primary">Back</Link>
    </div>
  );
};

export default ViewDetails;
