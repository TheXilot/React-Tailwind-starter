import cardIcon from "../assets/icon-cart.svg";
import closeIcon from "../assets/icon-close.svg";
import suppIcon from "../assets/icon-delete.svg";
import { useState } from "react";
import useComponentVisible from "../hooks/useComponentVisible";
export default function Cart({ cart, deleteProduct }) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  return (
    <div ref={ref}>
      <button
        className="group hover:scale-125 cursor-pointer"
        onClick={() => {
          isComponentVisible
            ? setIsComponentVisible(false)
            : setIsComponentVisible(true);
        }}
      >
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fill-rule="nonzero"
            className="relative cursor-pointer group-hover:fill-orange-500"
          />
        </svg>
      </button>
      {isComponentVisible && (
        <>
          <div className="absolute w-80 bg-white rounded-lg shadow-[0px_0px_1rem_0.5px_rgba(0,0,0,0.3)] top-full right-0 z-40">
            <div className="cart-head p-3">
              <h3 className="text-black font-bold">Cart</h3>
            </div>
            <div className="bg-gray-300 w-full h-[1px]"></div>
            {cart.map((item, index) => (
              <div
                className="elements w-full p-3 grid grid-cols-1 hover:bg-gray-200"
                key={index}
              >
                <div className="element flex items-center justify-between">
                  <img
                    src={item.product.thumbnails[0]}
                    alt=""
                    className=" w-12 h-12 mr-2"
                  />
                  <div className="cart-element-details flex-col">
                    <p className="text-gray-500 text-md max-w-[13rem] whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.product.name}
                    </p>
                    <p className=" text-gray-500">
                      $
                      {item.product.price.toPrecision(
                        item.product.price.toString().length + 2
                      )}{" "}
                      x {item.nbItems}{" "}
                      <b className="text-black font-bold">
                        $
                        {item.totalPrice.toPrecision(
                          item.totalPrice.toString().length + 2
                        )}
                      </b>
                    </p>
                  </div>
                  <svg
                    viewBox="14 16"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className=" hover:[&>*]:fill-red-600 z-10 cursor-pointer w-4 h-4"
                    onClick={() => deleteProduct()}
                  >
                    <defs>
                      <path
                        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                        id="a"
                      />
                    </defs>
                    <use fill="#C3CAD9" fill-rule="nonzero" xlinkHref="#a" />
                  </svg>
                </div>
              </div>
            ))}
            {cart.length !== 0 && (
              <div className="p-3">
                <button className="w-full bg-orange-500 rounded-lg flex justify-center items-center h-12 mb-3 hover:bg-orange-300 sm:mt-6">
                  <span className="text-white font-medium ml-3">CheckOut</span>
                </button>
              </div>
            )}
            {cart.length === 0 && (
              <div className="p-16 w-full flex justify-center items-center">
                <p className="text-gray-500 font-bold">Your Cart is empty.</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
