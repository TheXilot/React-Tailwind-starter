import { useState } from "react";
import "./App.css";
import Pick from "./components/Pick";
import { useSelector, useDispatch } from "react-redux";
import { gameStart, cpuMode } from "./store/features/globalSlice";
import Player from "./components/Player";
import Modal from "./components/Modal";
import { isShowModal } from "./store/features/globalSlice";
function App() {
  const startGame = useSelector(gameStart);
  const isCpuMode = useSelector(cpuMode);
  const IsShowModal = useSelector(isShowModal);
  return (
    <>
      <div className="flex items-center justify-center ">
        {IsShowModal && <Modal />}
        {/* <Modal /> */}
        <div className=" w-[600px] h-screen sm:p-4 p-2 border-200 bg-primary">
          <div className="w-full h-full bg-orange-100 flex flex-col items-center justify-center xs:p-2 gap-8 sm:p-8">
            {startGame === 0 && <Pick />}
            {isCpuMode === 0 && startGame === 1 && <Player />}
            {isCpuMode === 1 && startGame === 1 && <div>CPU</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
