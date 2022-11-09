import { useEffect, useState } from "react";
import PreviousIcon from "../assets/icon-previous.svg";
import NextIcon from "../assets/icon-next.svg";
import "./sliderCard.css";

export default function SliderCard({ product }) {
  const [current, setCurrent] = useState(0);
  const [image, setImage] = useState(product.images[current]);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  useEffect(() => {
    setImage(product.images[current]);
  }, [current]);
  return (
    <div className="slider relative overflow-hidden">
      <div className="images relative h-[80vw] max-h-[380px]">
        {product.images.map((item, index) => (
          <img
            src={item}
            alt=""
            key={item}
            className={classNames(
              index !== current ? "opacity-0" : "z-30",
              "w-full"
            )}
          />
        ))}
      </div>
      <div className="thumbnails mt-24 grid grid-cols-4 gap-2">
        {product.thumbnails.map((item, index) => (
          <img
            src={item}
            alt=""
            key={item}
            onClick={() => {
              setCurrent(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
