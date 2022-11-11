import { useEffect, useState } from "react";
import PreviousIcon from "../assets/icon-previous.svg";
import NextIcon from "../assets/icon-next.svg";

export default function LightBox({ product }) {
  const [current, setCurrent] = useState(0);
  const [image, setImage] = useState(product.images[current]);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  useEffect(() => {
    setImage(product.images[current]);
  }, [current]);
  return (
    <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] z-[60] overflow-hidden ">
      <div className="flex justify-center items-center mt-[5vh] flex-col">
        <div className="relative w-[min(80vh_,80vw)] h-[min(80vh_,80vw)] max-h-[1000px] max-w-[1000px]">
          {product.images.map((item, index) => (
            <img
              src={item}
              alt=""
              key={item}
              className={classNames(
                index !== current ? "opacity-0" : "z-30",
                "absolute w-full h-full"
              )}
            />
          ))}
          <button className="block ml-auto">
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="thumbnails grid grid-cols-4 gap-2 w-[min(40vh_,40vw)] mt-2">
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
