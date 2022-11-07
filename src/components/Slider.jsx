import { useState } from "react";
export default function Slider({ product }) {
  const [current, setCurrent] = useState(0);
  const [image, setImage] = useState(product.images[current]);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  function nextImage() {
    setCurrent(current + 1);
    image = product.images[current];
  }
  return (
    <div className="relative bg-orange-500 h-[50vh] overflow-hidden">
      <div className="images">
        <img src={image} alt="" className="w-full" />
      </div>
      <button
        className=" absolute top-1/2 left-0 cursor-pointer"
        onClick={() => {
          next();
        }}
      >
        next
      </button>
    </div>
  );
}
