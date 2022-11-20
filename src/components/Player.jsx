import { useState } from "react";
import Logo from "./Logo";
import SVG from "react-inlinesvg";
import { useSelector, useDispatch } from "react-redux";
import {
  setFirstPlayerMark,
  selectMark,
  setVsCpu,
  showModal,
} from "../store/features/globalSlice";
export default function Player() {
  const firstPlayerMark = useSelector(selectMark);
  const dispatch = useDispatch();
  const [turn, setTurn] = useState(1);
  // const [firstPlayerMark, setFirstPlayerMark] = useState(1);
  return (
    <div className=" flex flex-col h-full w-full">
      <div className="flex justify-between mb-8 items-center">
        <Logo />
        <div className="box flex items-center justify-center gap-4 px-4 py-2">
          <img
            src={`/public/icon-${turn ? "x" : "o"}-grey.svg`}
            alt=""
            className=" w-8 h-8"
          />
          <i className=" text-gray-bg">TURN</i>
        </div>
        <button
          className="box px-4 py-2 bg-gray-bg"
          onClick={() => dispatch(showModal(true))}
        >
          <img src="/public/icon-restart.svg" alt="" className=" w-6 h-6" />
        </button>
      </div>
      <div className=" grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-8 mb-4 game turnO">
        <button className="box"></button>
        <button className="box"></button>
        <button className="box x"></button>
        <button className="box"></button>
        <button className="box o"></button>
        <button className="box"></button>
        <button className="box"></button>
        <button className="box"></button>
        <button className="box"></button>
      </div>
      <div className=" grid grid-cols-3 grid-rows-1 auto-cols-auto gap-x-4 gap-y-8">
        <div className="box text-gray-300 text-xl flex flex-col items-center justify-center px-4 py-2 bg-orange">
          <h3 className=" text-black text-md font-light">O (YOU)</h3>
          <b className=" text-black text-2xl">0</b>
        </div>
        <div className="box text-gray-300 text-xl flex flex-col items-center justify-center px-4 py-2 bg-gray-bg">
          <h3 className=" text-black text-md font-light">TIES</h3>
          <b className=" text-black text-2xl">0</b>
        </div>
        <div className="box text-gray-300 text-xl flex flex-col items-center justify-center px-4 py-2 bg-secondary">
          <h3 className=" text-black text-md font-light">X (CPU)</h3>
          <b className=" text-black text-2xl">0</b>
        </div>
      </div>
    </div>
  );
}
