import React from "react";
import { useSelector } from "react-redux/"; //used for accessing values of the state
import { Container, Table } from "react-bootstrap";

function Winners() {
  const user = useSelector((state) => state.user.value.players);
  const allowedHeaders = [
    "fullName",
    "gender",
    "location",
    "nat",
    "email",
    "phone",
    "cell",
  ];
  return (
    <div>
      <Container>
        <h1 className="mt-3">Winners</h1>
        <hr></hr>
        <Table hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Location</th>
              <th>Nationality</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Cell</th>
              <th>Time played</th>
            </tr>
          </thead>
          <tbody>
            {user.map((player) => {
              if (player.isWinner) {
                return (
                  <tr>
                    <td>{player.fullName}</td>
                    <td>{player.gender}</td>
                    <td>{player.location}</td>
                    <td>{player.nat}</td>
                    <td>{player.email}</td>
                    <td>{player.phone}</td>
                    <td>{player.cell}</td>
                    <td>{player.time}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      </Container>
      {/* <ul>
        {user.map((element) => {
          return <li>{element.fullName}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default Winners;
