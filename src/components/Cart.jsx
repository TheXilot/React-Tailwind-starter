import cardIcon from "../assets/icon-cart.svg";
import { useState } from "react";
export default function Cart(cart) {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <img src={cardIcon} alt="" className="relative cursor-pointer"></img>
      <div className="absolute w-80 bg-white rounded-lg shadow-[0px_0px_1rem_0.5px_rgba(0,0,0,0.3)] top-full right-0 z-40">
        <div className="cart-head p-3">
          <h3 className="text-black font-bold">Cart</h3>
        </div>
        <div className="bg-gray-300 w-full h-[1px]"></div>
        <div className="elements w-full p-3 grid grid-cols-1">
          <div className="element flex">
            <img src="/public/logo.svg" alt="" className=" w-12 h-12 mr-2" />
            <div className="cart-element-details flex-col">
              <p className="text-gray-500 text-md max-w-[13rem] whitespace-nowrap overflow-hidden text-ellipsis">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat molestiae vero mollitia consectetur voluptatibus
                nostrum, aliquid quaerat quas consequatur doloremque praesentium
                iusto incidunt labore animi laboriosam, excepturi deleniti qui
                quae.
              </p>
              <p className=" text-gray-500">
                $125.00 x 3 <b className="text-black">255.00</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
