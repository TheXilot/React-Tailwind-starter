import { useEffect, useState } from "react";
import PreviousIcon from "../assets/icon-previous.svg";
import NextIcon from "../assets/icon-next.svg";

export default function LightBox({ product, isShowBox }) {
  const [current, setCurrent] = useState(0);
  const [image, setImage] = useState(product.images[current]);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  useEffect(() => {
    setImage(product.images[current]);
  }, [current]);
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] z-[60] overflow-hidden lightbox">
      <div className="flex justify-center items-center mt-[5vh] flex-col">
        <div className="relative w-[min(80vh_,80vw)] h-[min(80vh_,80vw)] max-h-[1000px] max-w-[1000px]">
          <svg
            width="24"
            height="24"
            viewBox="14 15"
            xmlns="http://www.w3.org/2000/svg"
            className="group ml-auto"
            onClick={() => isShowBox(false)}
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#fff"
              fill-rule="evenodd"
              className="group-hover:fill-orange-500 group-hover:scale-105 cursor-pointer"
            />
          </svg>
          {product.images.map((item, index) => (
            <img
              src={item}
              alt=""
              key={item}
              className={classNames(
                index !== current ? "opacity-0" : "z-30",
                "absolute w-full h-full transition-opacity duration-1000 ease-[ease-in-out]"
              )}
            />
          ))}
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
        <div className="thumbnails grid grid-cols-4 gap-2 w-[min(40vh_,40vw)] pt-8">
          {product.thumbnails.map((item, index) => (
            <img
              src={item}
              alt=""
              key={item}
              className=""
              onClick={() => {
                setCurrent(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
