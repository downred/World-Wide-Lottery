import { createSlice } from "@reduxjs/toolkit/";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    value: {
      nats: [],
      nationalitiesSet: [],
      players: [],
      currentPick: {},
    },
  },
  reducers: {
    fetchPlayer: (state, action) => {
      state.value.players = [...state.value.players, action.payload];
      state.value.currentPick = action.payload;

      state.value.players.map((player) => {
        if (player === state.value.currentPick) {
          state.value.currentPick.timesPlayed++;
        }
      });

      state.value.players.map((player) => {
        state.value.nats.push(player.nat);
        state.value.nationalitiesSet = [...new Set(state.value.nats)];
      });
    },
    clearSession: (state) => {
      state.value.players = [];
      state.value.currentPick = {};
      state.value.nats = [];
      state.value.nationalitiesSet = [];
    },
    winCheck: (state, action) => {
      if (action.payload.isWinner) {
        console.log("congrats")
      }
    }
  },
});

export const { fetchPlayer, clearSession, winCheck } = playerSlice.actions;
export default playerSlice.reducer;
