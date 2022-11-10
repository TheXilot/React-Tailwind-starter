import imageAvatar from "../assets/image-avatar.png";
import cardIcon from "../assets/icon-cart.svg";
import { useState } from "react";
import Cart from "./Cart";
export default function NavBar({ cart, deleteProduct }) {
  const navigation = [
    { name: "Collections", href: "#", current: true },
    { name: "Men", href: "#", current: false },
    { name: "Women", href: "#", current: false },
    { name: "About", href: "#", current: false },
    { name: "Contact", href: "#", current: false },
  ];
  const [menuStat, setMenuStat] = useState(false);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="relative w-full flex flex-row gap-2 border-[rgba(0,0,0,0.5)] border-b-[1px] items-center py-4 px-4 sm:pt-8 sm:pb-0 sm:px-0">
      <button
        className="mr-4 sm:hidden"
        type="button"
        aria-expanded="false"
        aria-controls="menu-panel"
        id="nav-menu"
        onClick={() => {
          setMenuStat(true);
        }}
      >
        <span class="sr-only">Open main menu</span>
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fill="#69707D"
            fill-rule="evenodd"
          />
        </svg>
      </button>
      <img src="/logo.svg" alt="" className=" h-fit mr-8" />

      <div
        className={classNames(
          menuStat ? " " : "hidden",
          "absolute top-0 left-0 h-screen w-[60%] z-50 sm:z-0 bg-white sm:static sm:block sm:w-full sm:h-fit shadow-[40vw_0px_0px_0px_rgba(0,0,0,0.5)] sm:shadow-none"
        )}
      >
        <div className="flex sm:flex-row sm:gap-4 flex-col pl-8 pt-4 sm:p-0">
          <button
            className="mr-4 sm:hidden mb-6"
            type="button"
            aria-expanded="false"
            aria-controls="menu-panel"
            id="nav-close-menu"
            onClick={() => {
              setMenuStat(false);
            }}
          >
            <span class="sr-only">Close main menu</span>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "font-bold text-black border-orange-500 border-b-4"
                  : "font-normal text-gray-400",
                "bg-white hover:border-orange-500 hover:font-bold hover:text-black hover:border-b-4 cursor-pointer sm:py-8 mb-4 sm:mb-0"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="right-side flex items-center gap-4 ml-auto">
        <Cart cart={cart} deleteProduct={deleteProduct} />
        <img
          src={imageAvatar}
          alt=""
          className=" hover:border-double rounded-full hover:border-orange-500 hover:border-2 w-8 h-8 sm:w-16 sm:h-16 cursor-pointer"
        />
      </div>
    </div>
  );
}
