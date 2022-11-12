import { useEffect, useState } from "react";
import AddToCart from "./AddToCart";

export default function Product({ product, setCart }) {
  const [current, setCurrent] = useState(0);
  const [image, setImage] = useState(product.images[current]);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  useEffect(() => {
    setImage(product.images[current]);
  }, [current]);

  return (
    <>
      <div className="product m-4">
        <p className=" text-orange-500 uppercase font-bold text-md mb-2 sm:mb-4">
          {product.company}
        </p>
        <p className="text-black text-3xl font-bold mb-3 sm:mb-8">
          {product.name}
        </p>
        <p className=" text-gray-500 capitalize text-md mb-3 sm:mb-12">
          {product.details}
        </p>
        <AddToCart
          price={product.price}
          reduction={product.reduction}
          oldPrice={product.oldPrice}
          setCart={setCart}
        />
      </div>
    </>
  );
}
