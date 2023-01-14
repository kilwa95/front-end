import React from "react";
import "./App.css";
import CityTable from "./components/CityTable";
import { Container, Row, Col } from "react-bootstrap";

const App: React.FC = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <CityTable />
          </Col>
          <Col>
            <CityTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
