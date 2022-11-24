import { useRef } from "react";
import { useDispatch } from "react-redux";
import { showModal, setStartGame } from "../store/features/globalSlice";
export default function Modal() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  return (
    <div
      className="modal absolute inset-0 bg-[rgba(0,0,0,0.6)] z-[4] flex items-center justify-center transition-opacity duration-500 opacity-1 pointer-events-auto"
      onClick={(e) => {
        if (e.target !== ref.current) {
          console.log("diff");
          dispatch(showModal(false));
        }
      }}
    >
      <div
        className="modal-body flex flex-col items-center gap-4 bg-primary w-full p-16 "
        ref={ref}
      >
        <h2 className=" text-4xl text-gray-bg">RESTART GAME</h2>
        <div className="flex justify-center gap-4">
          <button className="w-full px-4 py-2 bg-gray-bg hover:bg-gray-300 font-bold rounded-[16px] shadow-[0_8px_0_0_#6B8997]">
            <i>NO, CANCEL</i>
          </button>
          <button
            className="w-full px-4 py-2 bg-orange hover:bg-orange_light font-bold rounded-[16px] shadow-[0_8px_0_0_#CC8B13]"
            onClick={() => {
              dispatch(setStartGame(0));
            }}
          >
            <i>YES, RESTART</i>
          </button>
        </div>
      </div>
    </div>
  );
}
