import React from "react";
import { useSelector } from "react-redux/"; //used for accessing values of the state
import { Container, Table, Stack } from "react-bootstrap";
import { CSVLink } from "react-csv";
import SortButton from "./components/sortButton";
import { uuid } from 'uuidv4';

function Players() {
  const user = useSelector((state) => state.user.value.players);
  const exportHeaders = [
    { label: "ID", key: "id" },
    { label: "Name", key: "fullName" },
    { label: "Email", key: "email" },
    { label: "Gender", key: "gender" },
    { label: "Phone number", key: "phone" },
    { label: "Cell", key: "cell" },
    { label: "Location", key: "location" },
    { label: "Nationality", key: "nat" },
    { label: "Gender", key: "gender" },
    { label: "Age", key: "age" },
    { label: "Times played", key: "timesPlayed" },
    { label: "Time", key: "time" },
  ];

  return (
    <Container>
      <h1 className="mt-3">Players</h1>
      <SortButton />
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {user.map((player) => {
            if (player.isWinner) {
              return (
                <tr className="table-success">
                  <td>{player.fullName}</td>
                  <td>{player.gender}</td>
                  <td>{player.location}</td>
                  <td>{player.nat}</td>
                  <td>{player.email}</td>
                  <td>{player.phone}</td>
                  <td>{player.cell}</td>
                  <td>{ player.time }</td>
                  <td>{player.isWinner && "Winner"}</td>
                </tr>
              );
            } else {
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
                  <td></td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
      <CSVLink
        data={user}
        headers={exportHeaders}
        className="btn btn-primary m-3 mt-1"
      >
        Export to CSV
      </CSVLink>
    </Container>
  );
}

export default Players;
