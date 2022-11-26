import { useEffect, useState } from "react";
import { useEffectOnce } from "./../../hooks/useEffectOnce";
import Logo from "../Logo";
import { useSelector, useDispatch } from "react-redux";
import {
  firstPlayerMark,
  showModal,
  round,
  showModalPlayer,
  isShowModalPlayer,
  setLastRoundWinner,
  setRound,
} from "../../store/features/globalSlice";
import CpuModal from "../Cpu/CpuModal";
export default function Cpu() {
  const FirstPlayerMark = useSelector(firstPlayerMark);
  let [NewGame, setNewGame] = useState(true);
  // equality function
  const customEqual = (oldValue, newValue) =>
    oldValue.every((value, index) => value === newValue[index]);
  const Round = useSelector(round, customEqual);
  const dispatch = useDispatch();
  const [turn, setTurn] = useState(0);
  const [gameMap, setGameMap] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
  const [verify, setVerify] = useState(false);
  const IsShowModalPlayer = useSelector(isShowModalPlayer);
  function addClass(table) {
    let cl = "";
    table.map((el) => {
      cl = `${cl} ${el}`;
    });
    return cl;
  }
  const setCel = (index, value) => {
    if (gameMap[index] === -1) {
      let t = gameMap;
      t[index] = value;
      setVerify(true);
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
  const resetGameMap = () => {
    setGameMap([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
    // setTurn(0);
  };
  useEffect(() => {
    // console.log("useeffect");
    // console.log("NewGame", NewGame);
    if (NewGame) {
      dispatch(setRound([0, 0, 0]));
      setNewGame(false);
    }
    //detect if some one win
    //detect axe /
    let win = 0;
    let draw = 0;
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
        //round values
        let newRound = [...Round];
        turn === 0 ? (newRound[2] += 1) : (newRound[0] += 1);
        dispatch(setRound(newRound));
      }, 1000);
      return;
    }
    draw = !gameMap.includes(-1);
    if (draw) {
      console.log("draw ", draw);
      setTimeout(() => {
        dispatch(setLastRoundWinner(-1));
        dispatch(showModalPlayer(true));
        let newRound = [...Round];
        newRound[1] += 1;
        dispatch(setRound(newRound));
      }, 1000);
    }
    setVerify(false);
    if (!gameMap.every((e) => e === -1)) {
      setTurn(turn ? 0 : 1);
    }
  }, [gameMap]);

  useEffect(() => {
    if (turn !== FirstPlayerMark) {
      console.log("CPI");
      let t = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      let numbers = [];
      t.map((v, i) => {
        if (gameMap[i] === -1) numbers.push(t[i]);
      });
      let index = Math.floor(Math.random() * numbers.length);
      console.log(numbers);
      console.log("next cel is :", numbers[index]);
      setCel(numbers[index], turn);
    }
  }, [turn]);
  // const [firstPlayerMark, setFirstPlayerMark] = useState(1);
  return (
    <div className=" flex flex-col h-full w-full">
      {IsShowModalPlayer && <CpuModal resetGameMap={resetGameMap} />}
      <div className="flex justify-between mb-8 items-center">
        <Logo />
        <div className="box flex items-center justify-center gap-1 sm:gap-4 sm:px-4 px-2 py-2">
          <img
            src={`/icon-${turn ? "o" : "x"}-grey.svg`}
            alt=""
            className=" w-8 h-8"
          />
          <i className=" text-gray-bg">TURN</i>
        </div>
        <button
          className="box px-4 py-2 bg-gray-bg"
          onClick={() => dispatch(showModal(true))}
        >
          <img src="/icon-restart.svg" alt="" className=" w-6 h-6" />
        </button>
      </div>
      {/* <div
        className={` grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-8 mb-4 game turn${
          turn ? "O" : "X"
        }`}
      > */}
      <div
        className={addClass([
          "grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-8 mb-4 game",
          `turn${turn ? "O" : "X"}`,
          `${verify ? "disabled" : ""}`,
        ])}
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
          <h3 className=" text-black text-sm sm:text-md font-light">
            O {FirstPlayerMark === 1 ? "(1PL)" : "(2PL)"}
          </h3>
          <b className=" text-black text-2xl">{Round[0]}</b>
        </div>

        <div className="box text-gray-300 text-xl flex flex-col items-center justify-center px-4 py-2 bg-gray-bg">
          <h3 className=" text-black text-sm sm:text-md font-light">TIES</h3>
          <b className=" text-black text-2xl">{Round[1]}</b>
        </div>
        <div className="box text-gray-300 text-xl flex flex-col items-center justify-center sm:px-4 px-1 py-2 bg-secondary">
          <h3 className=" text-black text-sm sm:text-md font-light">
            X {FirstPlayerMark === 0 ? "(1PL)" : "(2PL)"}
          </h3>
          <b className=" text-black text-2xl">{Round[2]}</b>
        </div>
      </div>
    </div>
  );
}
