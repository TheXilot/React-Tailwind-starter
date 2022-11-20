import { useState } from "react";
import Logo from "./Logo";
import SVG from "react-inlinesvg";
import { useSelector, useDispatch } from "react-redux";
import {
  setFirstPlayerMark,
  selectMark,
  setVsCpu,
} from "../store/features/globalSlice";
export default function Player() {
  const firstPlayerMark = useSelector(selectMark);
  const dispatch = useDispatch();
  // const [firstPlayerMark, setFirstPlayerMark] = useState(1);
  return (
    <div className=" flex flex-col h-full w-full">
      <div className="flex justify-between mb-8 items-center">
        <Logo />
        <Logo />
        <Logo />
      </div>
      <div className=" grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-8 mb-4 h-[80%]">
        <h2 className="box text-gray-300 text-xl">Player Mode</h2>
        <h2 className="box text-gray-300 text-xl">Player Mode</h2>
        <h2 className="box text-gray-300 text-xl">Player Mode</h2>
        <h2 className="box text-gray-300 text-xl">Player Mode</h2>
        <h2 className="box text-gray-300 text-xl">Player Mode</h2>
        <h2 className="box text-gray-300 text-xl">Player Mode</h2>
        <h2 className="box text-gray-300 text-xl">Player Mode</h2>
        <h2 className="box text-gray-300 text-xl">Player Mode</h2>
        <h2 className="box text-gray-300 text-xl">Player Mode</h2>
      </div>
      <div className=" grid grid-cols-3 grid-rows-1 auto-cols-auto gap-x-4 gap-y-8">
        <h2 className="box text-gray-300 text-xl">total</h2>
        <h2 className="box text-gray-300 text-xl">total</h2>
        <h2 className="box text-gray-300 text-xl">total</h2>
      </div>
    </div>
  );
}
