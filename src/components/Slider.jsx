import { useEffect, useState } from "react";
import PreviousIcon from "../assets/icon-previous.svg";
import NextIcon from "../assets/icon-next.svg";
import "./slider.css";
export default function Slider({ product }) {
  const [current, setCurrent] = useState(0);
  const [image, setImage] = useState(product.images[current]);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  useEffect(() => {
    setImage(product.images[current]);
  }, [current]);
  return (
    <div className="slider relative bg-orange-500  overflow-hidden">
      <div className="images relative h-[100vw]">
        {product.images.map((item, index) => (
          <img
            src={item}
            alt=""
            key={item}
            className={classNames(
              index !== current ? "opacity-0" : "z-40",
              "w-full"
            )}
          />
        ))}
      </div>
      <button
        className="btn left"
        onClick={() => {
          setCurrent(() =>
            current === 0 ? product.images.length - 1 : current - 1
          );
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 12 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
            className=""
          />
        </svg>
      </button>
      <button
        className="btn right"
        onClick={() => {
          setCurrent(() =>
            current === product.images.length - 1 ? 0 : current + 1
          );
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 12 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
