import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstPlayerMark: 1,
  vsCpu: 0,
  gameStart: 0,
  isShowModal: false,
  isShowModalPlayer: false,
  lastRoundWinner: -1,
  round: [0, 0, 0],
  // roundsO: 0,
  // roundsX: 0,
  // roundsT: 0,
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setFirstPlayerMark: (state, action) => {
      state.firstPlayerMark = action.payload;
    },
    setVsCpu: (state, action) => {
      state.vsCpu = action.payload;
      state.gameStart = 1;
    },
    showModal: (state, action) => {
      state.isShowModal = action.payload;
    },
    showModalPlayer: (state, action) => {
      state.isShowModalPlayer = action.payload;
    },
    setStartGame: (state, action) => {
      state.gameStart = action.payload;
      state = initialState;
      console.log(state);
    },
    setRound: (state, action) => {
      state.round = action.payload;
    },
    setLastRoundWinner: (state, action) => {
      state.lastRoundWinner = action.payload;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});
export const gameStart = (state) => state.global.gameStart;
export const cpuMode = (state) => state.global.vsCpu;
export const isShowModal = (state) => state.global.isShowModal;
export const isShowModalPlayer = (state) => state.global.isShowModalPlayer;
export const lastRoundWinner = (state) => state.global.lastRoundWinner;
export const firstPlayerMark = (state) => state.global.firstPlayerMark;
export const round = (state) => state.global.round;
export const {
  setFirstPlayerMark,
  setVsCpu,
  showModal,
  showModalPlayer,
  setStartGame,
  setRound,
  setLastRoundWinner,
  reset,
} = globalSlice.actions;

export default globalSlice.reducer;
