import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import SVG from "react-inlinesvg";
import { useSelector, useDispatch } from "react-redux";
import {
  setFirstPlayerMark,
  selectMark,
  setVsCpu,
  showModal,
  isShowModal,
  showModalPlayer,
  isShowModalPlayer,
  setLastRoundWinner,
} from "../store/features/globalSlice";
import PlayerModal from "./PlayerModal";
export default function Player() {
  const ref = useRef(null);
  const firstPlayerMark = useSelector(selectMark);
  const dispatch = useDispatch();
  const [turn, setTurn] = useState(1);
  const [gameMap, setGameMap] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
  const IsShowModalPlayer = useSelector(isShowModalPlayer);
  const IsShowModal = useSelector(isShowModal);
  const setCel = (index, value) => {
    if (gameMap[index] === -1) {
      let t = gameMap;
      t[index] = value;
      setGameMap([...t]);

      console.log(t);
    }
  };
  const verifyWin = (i0, i1, i2) => {
    let slice = [gameMap[i0], gameMap[i1], gameMap[i2]];
    if (slice.every((e) => e === turn)) {
      document
        .getElementsByClassName("game")[0]
        .childNodes[i0].classList.add("bg-green-700");
      document
        .getElementsByClassName("game")[0]
        .childNodes[i1].classList.add("bg-green-700");
      document
        .getElementsByClassName("game")[0]
        .childNodes[i2].classList.add("bg-green-700");
      return 1;
    }
    return 0;
  };
  useEffect(() => {
    console.log("useeffect");
    if (!gameMap.every((e) => e === -1)) setTurn(turn ? 0 : 1);
    //detect if some one win
    //detect axe /
    let win = 0;
    win =
      verifyWin(0, 4, 8) ||
      verifyWin(2, 4, 6) ||
      verifyWin(0, 1, 2) ||
      verifyWin(3, 4, 5) ||
      verifyWin(6, 7, 8) ||
      verifyWin(0, 3, 6) ||
      verifyWin(1, 4, 7) ||
      verifyWin(2, 5, 8);
    if (win) {
      console.log("win ", win);
      setTimeout(() => {
        dispatch(setLastRoundWinner(turn));
        dispatch(showModalPlayer(true));
      }, 1000);
    }
  }, [gameMap]);
  // const [firstPlayerMark, setFirstPlayerMark] = useState(1);
  return (
    <div className=" flex flex-col h-full w-full">
      {IsShowModalPlayer && <PlayerModal />}
      <div className="flex justify-between mb-8 items-center">
        <Logo />
        <div className="box flex items-center justify-center gap-4 px-4 py-2">
          <img
            src={`/public/icon-${turn ? "o" : "x"}-grey.svg`}
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
      <div
        className={` grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-8 mb-4 game turn${
          turn ? "O" : "X"
        }`}
      >
        <button
          className={`box box0 ${
            gameMap[0] === 0 ? "x" : gameMap[0] >= 1 ? "o" : ""
          }`}
          onClick={() => setCel(0, turn)}
        ></button>
        <button
          className={`box box1 ${
            gameMap[1] === 0 ? "x" : gameMap[1] >= 1 ? "o" : ""
          }`}
          onClick={() => setCel(1, turn)}
        ></button>
        <button
          className={`box box2 ${
            gameMap[2] === 0 ? "x" : gameMap[2] >= 1 ? "o" : ""
          }`}
          onClick={() => setCel(2, turn)}
        ></button>
        <button
          className={`box box3 ${
            gameMap[3] === 0 ? "x" : gameMap[3] >= 1 ? "o" : ""
          }`}
          onClick={() => setCel(3, turn)}
        ></button>
        <button
          className={`box box4 ${
            gameMap[4] === 0 ? "x" : gameMap[4] >= 1 ? "o" : ""
          }`}
          onClick={() => setCel(4, turn)}
        ></button>
        <button
          className={`box box5 ${
            gameMap[5] === 0 ? "x" : gameMap[5] >= 1 ? "o" : ""
          }`}
          onClick={() => setCel(5, turn)}
        ></button>
        <button
          className={`box box6 ${
            gameMap[6] === 0 ? "x" : gameMap[6] >= 1 ? "o" : ""
          }`}
          onClick={() => setCel(6, turn)}
        ></button>
        <button
          className={`box box7 ${
            gameMap[7] === 0 ? "x" : gameMap[7] >= 1 ? "o" : ""
          }`}
          onClick={() => setCel(7, turn)}
        ></button>
        <button
          className={`box box8 ${
            gameMap[8] === 0 ? "x" : gameMap[8] >= 1 ? "o" : ""
          }`}
          onClick={() => setCel(8, turn)}
        ></button>
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
