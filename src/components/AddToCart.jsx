import { useEffect, useState } from "react";
import MinusIcon from "../assets/icon-minus.svg";
import PlusIcon from "../assets/icon-plus.svg";
export default function AddToCart({ price, reduction, oldPrice }) {
  const [nbItems, setNbItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(price);
  const [totalOldPrice, setTotalOldPrice] = useState(oldPrice);
  useEffect(() => {
    nbItems !== 0 ? setTotalPrice(nbItems * price) : price;
    nbItems !== 0 ? setTotalOldPrice(nbItems * oldPrice) : oldPrice;
  }, [nbItems]);
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center w-full mb-3">
        <p className="text-black text-2xl font-bold mr-4">
          ${totalPrice.toPrecision(totalPrice.toString().length + 2)}
        </p>
        <p className="text-orange-500 bg-orange-100 px-2 rounded-md font-medium">
          {reduction}%
        </p>
        <p className="text-gray-400 font-bold ml-auto line-through">
          ${totalOldPrice.toPrecision(totalOldPrice.toString().length + 2)}
        </p>
      </div>
      <div className=" bg-gray-200 rounded-lg h-12 flex justify-between items-center mb-4">
        <button
          className=" rounded-lg h-full px-6 hover:bg-orange-300"
          onClick={() => (nbItems !== 0 ? setNbItems(nbItems - 1) : 0)}
        >
          <img src={MinusIcon} />
        </button>
        <p className=" text-lg font-bold text-black">{nbItems}</p>
        <button
          className="rounded-lg h-full px-6 hover:bg-orange-300"
          onClick={() => setNbItems(nbItems + 1)}
        >
          <img src={PlusIcon} />
        </button>
      </div>
      <button className="w-full bg-orange-500 rounded-lg flex justify-center items-center h-12 mb-6 hover:bg-orange-300 sm:mt-6">
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#fff"
            fill-rule="nonzero"
          />
        </svg>
        <span className="text-white font-medium ml-3">Add to cart</span>
      </button>
    </div>
  );
}
