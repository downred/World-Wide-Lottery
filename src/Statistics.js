import React from "react";
import { useSelector } from "react-redux/"; //used for accessing values of the state
import { Container, Table } from "react-bootstrap";

function Statistics() {
  const user = useSelector((state) => state.user.value);
  const playerNats = user.players.map((player) => player.nat);
  const { nationalitiesSet } = user;
  let numOfPlayersForNat = nationalitiesSet.map((nat) => [
    nat,
    playerNats.filter((n) => n === nat).length,
  ]);

  return (
    <Container>
      <h1 className="mt-3">Nationalities</h1>
      <hr></hr>
      <Table hover>
        <thead>
          <tr>
            <th>Nationality</th>
            <th>Number of players</th>
          </tr>
        </thead>
        <tbody>
          {numOfPlayersForNat.map((arr) => {
            return (
              <tr>
                <td>{arr[0]}</td>
                <td>{arr[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Statistics;
