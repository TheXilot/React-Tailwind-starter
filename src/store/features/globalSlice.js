import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstPlayerMark: 1,
  vsCpu: 0,
  gameStart: 0,
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
  },
});
export const selectMark = (state) => state.global.firstPlayerMark;
export const gameStart = (state) => state.global.gameStart;
export const cpuMode = (state) => state.global.vsCpu;
export const { setFirstPlayerMark, setVsCpu } = globalSlice.actions;

export default globalSlice.reducer;
