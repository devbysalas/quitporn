import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import app from './base';

class HeatMap extends React.Component {
  render() {
    return (
      <Container>
        <Row className="my-5">
          <h1>Coming soon...</h1>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => app.auth().signOut()}>Sign out</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HeatMap;
