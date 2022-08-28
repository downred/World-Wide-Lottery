import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux/";
import { useDispatch } from "react-redux"; // used for modifying values of the state
import { clearSession } from "../features/player";
import WinAlert from "./winAlert";

function PlayerGenerator(props) {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  return (
    <Container>
      {user.currentPick.isWinner && <WinAlert />}
      <Row>
        <Col></Col>
        <Col>
          <Row>
            <Button
              variant="success"
              className="m-2 mt-4 mb-5"
              onClick={props.handleReq}
            >
              Generate player
            </Button>
          </Row>
        </Col>
        <Col></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col></Col>
        <Col xs={3} className="justify-content-md-center">
          <Row>
            <Image src={user.currentPick.picture} roundedCircle />
          </Row>
          <Row className="text-center m-2">
            <h3>{user.currentPick.fullName}</h3>
          </Row>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <span>E-mail: {user.currentPick.email}</span>
          </Row>
          <Row>
            <span>Phone: {user.currentPick.phone}</span>
          </Row>
          <Row>
            <span>Cell: {user.currentPick.cell}</span>
          </Row>
        </Col>
        <Col>
          <Row className="text-right">
            <span>Gender: {user.currentPick.gender}</span>
          </Row>
          <Row className="text-right">
            <span>Location: {user.currentPick.location}</span>
          </Row>
          <Row className="text-right">
            <span>Nationality: {user.currentPick.nat}</span>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Row>
            <Button
              className="m-2 mt-4 mb-5"
              onClick={() => dispatch(clearSession())}
            >
              Clear session
            </Button>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default PlayerGenerator;
