import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { data } from '../Data';

const Home = () => {
  return (
    <Container className="mt-4">
      <h2>Home</h2>
      <Row>
        {data.map((product) => (
          <Col md={4} className="mb-4" key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} height="250px" style={{ objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;