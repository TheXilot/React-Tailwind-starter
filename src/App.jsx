import { useState } from "react";
import NavBar from "./components/nav";
import Slider from "./components/Slider";
import SliderCard from "./components/SliderCard";
import "./App.css";
import Product from "./components/Product";

function App() {
  const product = {
    name: "Fall Limited Edition Sneakers",
    company: "sneaker company",
    details:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 125.0,
    oldPrice: 250.0,
    reduction: 50,
    images: [
      "/product/image-product-1.jpg",
      "/product/image-product-2.jpg",
      "/product/image-product-3.jpg",
      "/product/image-product-4.jpg",
    ],
    thumbnails: [
      "/product/image-product-1-thumbnail.jpg",
      "/product/image-product-2-thumbnail.jpg",
      "/product/image-product-3-thumbnail.jpg",
      "/product/image-product-4-thumbnail.jpg",
    ],
  };
  const [cart, setCart] = useState([]);
  function addProduct(nbItems, totalPrice, totalOldPrice) {
    setCart([
      ...cart,
      {
        product: product,
        nbItems: nbItems,
        totalPrice: totalPrice,
        totalOldPrice: totalOldPrice,
      },
    ]);
  }
  function deleteProduct() {
    console.log("delete ...");
    setCart(cart.filter((v) => v.product.name !== product.name));
  }
  return (
    <>
      <NavBar cart={cart} setCart={setCart} deleteProduct={deleteProduct} />
      <Slider product={product} />
      <div className="sm:flex mt-16 block gap-3 sm:items-center">
        <div className="w-1/2  px-8 hidden sm:block">
          <SliderCard product={product} />
        </div>
        <div className="w-full sm:w-1/2">
          <Product product={product} setCart={addProduct} />
        </div>
      </div>

      {/* <Product product={product} /> */}
    </>
  );
}

export default App;
