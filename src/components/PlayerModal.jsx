import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showModalPlayer,
  setStartGame,
  lastRoundWinner,
} from "../store/features/globalSlice";
export default function PlayerModal() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const LastRoundWinner = useSelector(lastRoundWinner);
  const addClasses = (conditionalClass, fixedClass) => {
    return `${conditionalClass} ${fixedClass}`;
  };
  return (
    <div
      className="modal absolute inset-0 bg-[rgba(0,0,0,0.6)] z-[4] flex items-center justify-center transition-opacity duration-500 opacity-1 pointer-events-auto"
      onClick={(e) => {
        if (e.target !== ref.current) {
          console.log("diff");
          dispatch(showModalPlayer(false));
        }
      }}
    >
      <div
        className="modal-body flex flex-col items-center gap-4 bg-primary w-full p-4  "
        ref={ref}
      >
        {LastRoundWinner >=0 ? <h2 className=" text-xl text-gray-bg sm:mb-4 mb-2">YOU WON!</h2> : <></>}
        <div className=" flex items-center ">
          {LastRoundWinner===1 ? (
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
                fill="#f2b238"
              />
            </svg>
          ) : (LastRoundWinner === 0) ? (
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                fill="#A8BFC9"
              />
            </svg>
          ): (<></>)
        }
          <h3
            className={addClasses(
              (LastRoundWinner ===1 ? "text-orange" : (LastRoundWinner ===0 ? "text-gray-bg" : "text-white")),
              "sm:text-5xl text-2xl ml-4"
            )}
          >
            {LastRoundWinner >= 0 ? "TAKES THE ROUND" : "ROUND DRAW !!"}
          </h3>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <button className=" px-4 py-2 bg-gray-bg hover:bg-gray-300 font-bold rounded-[16px] shadow-[0_8px_0_0_#6B8997]"
          onClick={() => {
            dispatch(showModalPlayer(false))
            dispatch(setStartGame(0))
          }}
          >
            <i>QUIT</i>
          </button>
          <button
            className=" px-4 py-2 bg-orange hover:bg-orange_light font-bold rounded-[16px] shadow-[0_8px_0_0_#CC8B13]"
            
          >
            <i>NEXT ROUND</i>
          </button>
        </div>
      </div>
    </div>
  );
}
