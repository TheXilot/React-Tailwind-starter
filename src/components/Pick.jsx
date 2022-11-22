import { useState } from "react";
import Logo from "./Logo";
import SVG from "react-inlinesvg";
import { useSelector, useDispatch } from "react-redux";
import {
  setFirstPlayerMark,
  firstPlayerMark,
  setVsCpu,
} from "../store/features/globalSlice";
export default function Pick() {
  const dispatch = useDispatch();
  const FirstPlayerMark = useSelector(firstPlayerMark);
  // const [firstPlayerMark, setFirstPlayerMark] = useState(1);
  return (
    <div className="w-full h-full bg-orange-100 flex flex-col items-center justify-center gap-8 p-2 sm:p-8">
      <Logo />
      <div className="toggle flex flex-col items-center rounded-lg p-4 sm:p-8">
        <h2 className=" text-gray-300 text-xl">PICK PLAYER 1’S MARK</h2>
        <div
          className={`flex w-full mt-4 btn-group ${
            FirstPlayerMark ? "o" : "x"
          }`}
        >
          <button
            className="btn-x w-1/2 flex justify-center"
            onClick={() => dispatch(setFirstPlayerMark(0))}
          >
            <svg viewBox="0 0 64 64">
              <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"></path>
            </svg>
          </button>
          <button
            className="btn-o w-1/2 flex justify-center"
            onClick={() => dispatch(setFirstPlayerMark(1))}
          >
            <svg viewBox="0 0 64 64">
              <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"></path>
            </svg>
          </button>
        </div>
        <h3 className="text-gray-500 text-md pt-4">REMEMBER : X GOES FIRST</h3>
      </div>
      <button
        className="new-game w-full p-6 bg-orange hover:bg-orange_light font-bold rounded-[16px] shadow-[0_8px_0_0_#cc8b13]"
        onClick={() => dispatch(setVsCpu(1))}
      >
        <i>NEW GAME (VS CPU)</i>
      </button>
      <button
        className="new-game w-full p-6 bg-secondary hover:bg-secondary_light font-bold rounded-[16px] shadow-[0_8px_0_0_#118c87]"
        onClick={() => dispatch(setVsCpu(0))}
      >
        <i>NEW GAME (VS PLAYER)</i>
      </button>
    </div>
  );
}
