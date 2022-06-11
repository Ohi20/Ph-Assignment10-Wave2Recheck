import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Homebanner = () => {
    return (
        <div>
                     <Card className="text-center">
  <Card.Header>John Leader</Card.Header>
  <Card.Body>
    <Card.Title>THE RIGHT LAWYER</Card.Title>
    <Card.Text>
    MAKES ALL THE DIFFERENCE
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
        </div>
    );
};

export default Homebanner;