import React from "react";
import { fetchPlayer } from "./features/player";
import { useDispatch } from "react-redux"; // used for modifying values of the state

import PlayerGenerator from "./components/playerGenerator";

function Home() {
  const dispatch = useDispatch();

  const makeRequest = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => {
        return response.json();
      })
      .then((playerData) => {
        handleData(playerData);
      });

    const handleData = (data) => {

      dispatch(
        fetchPlayer({
          picture: data.results[0].picture.large,
          fullName: `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`,
          email: data.results[0].email,
          gender: data.results[0].gender == "male" ? "M" : "F",
          cell: data.results[0].cell,
          phone: data.results[0].phone,
          location: `${data.results[0].location.city}, ${data.results[0].location.state}, ${data.results[0].location.country}`,
          nat: data.results[0].nat,
          isWinner:
            data.results[0].dob.age ===
            Math.floor(Math.random() * (100 - 1 + 1) + 1),
          // isWinner: true,
          age: data.results[0].dob.age,
          timesPlayed: 1,
          time: new Date().toISOString(),
          id: data.results[0].id.value,
        })
      );
    };
  };

  return (
    <PlayerGenerator handleReq={makeRequest} />
  );
}

export default Home;
