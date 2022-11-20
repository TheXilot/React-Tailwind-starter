import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstPlayerMark: 1,
  vsCpu: 0,
  gameStart: 0,
  isShowModal: false,
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
  },
});
export const selectMark = (state) => state.global.firstPlayerMark;
export const gameStart = (state) => state.global.gameStart;
export const cpuMode = (state) => state.global.vsCpu;
export const isShowModal = (state) => state.global.isShowModal;
export const { setFirstPlayerMark, setVsCpu, showModal } = globalSlice.actions;

export default globalSlice.reducer;
