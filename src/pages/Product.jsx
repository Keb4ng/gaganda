import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useApiContext } from "../context/DataContext/ContextApi";
import { TiHeartFullOutline } from "react-icons/ti";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ItemListing from "../components/ListingProps/ItemListing";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Product = () => {
  let { id } = useParams();
  const {
    items,
    dataStatus,
    handleAddtoCart,
    productMsg,
    setProductMsg,
    loggedIn,
  } = useApiContext();
  const product = items.find((product) => String(product.id) === id);
  const [heart, setHeart] = useState(false);

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdOutlineKeyboardArrowRight
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black",
          width: "30px",
          height: "30px",
          right: "10px",
          zIndex: "20",
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdOutlineKeyboardArrowLeft
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black",
          width: "30px",
          height: "30px",
          left: "10px",
          zIndex: "20",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-[94px] relative">
      <div className="w-full mx-auto min-h-[80vh] h-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-2 my-5">
        <div className="w-full h-auto flex justify-center items-center">
          <img
            className="w-full max-w-[400px]  h-full object-contain max-h-[600px] rounded-md shadow-md"
            src={product?.api_featured_image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <div className="bg-white px-3 py-6 shadow-md rounded-md">
            <p className="text-[22px] font-bold text-slate-950">
              {product?.name}
            </p>
            <p className="text-[16px] text-gray-500">{product?.product_type}</p>
            <p className="text-[16px] text-slate-950 font-bold">
              {product?.price_sign}
              {product?.price}
            </p>
            <p className="text-[14px] text-gray-500 my-5">
              {product?.description}
            </p>
            {loggedIn ? (
              <div className="flex justify-center md:justify-normal w-auto gap-5">
                <button
                  onClick={() => handleAddtoCart(product.id)}
                  className="bg-primary-200 text-[14px] w-[290px] rounded-md text-white px-2 py-3 hover:bg-white hover:text-primary-200 duration-200 border-2 hover:border-primary-200">
                  Add To Cart
                </button>
                <button
                  onClick={() => setHeart(!heart)}
                  className="text-gray-500">
                  {heart ? (
                    <TiHeartFullOutline className="text-red-400" size={25} />
                  ) : (
                    <TiHeartFullOutline size={25} />
                  )}
                </button>
              </div>
            ) : (
              <div className="flex justify-center md:justify-normal w-auto gap-5">
                <button className="bg-primary-200 text-[14px] cursor-not-allowed w-[290px] rounded-md text-white px-2 py-3 hover:bg-white hover:text-primary-200 duration-200 border-2 hover:border-primary-200">
                  Add To Cart
                </button>
                <button className="text-gray-500">
                  <TiHeartFullOutline size={25} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-2">
        <h1 class="text-center text-xl my-5">Similar Items</h1>
        {dataStatus ? (
          <Slider {...settings}>
            {items &&
              items
                .filter((products) => {
                  return products.brand === product.brand;
                })
                .slice(0, 4)
                .map((product) => {
                  return (
                    <Link key={product.id} to={`/product/${product.id}`}>
                      <ItemListing
                        itemImg={product.api_featured_image}
                        itemName={product.name}
                        itemBrand={product.brand}
                        itemPrice={product.price}
                        itemPriceSign={product.price_sign}
                        productType={product.product_type}
                        itemId={product.id}
                      />
                    </Link>
                  );
                })}
          </Slider>
        ) : (
          "Loading..."
        )}
      </div>
      {productMsg ? (
        <div
          onClick={() => setProductMsg(!productMsg)}
          className="fixed top-0 left-0 w-full min-h-[100vh] bg-black/25 z-[100]">
          <div className="w-[200px] h-[150px] px-2 py-2 flex flex-col bg-white rounded-md shadow-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-t-8 border-primary-200">
            <div className="flex justify-end">
              <MdClose
                className="cursor-pointer"
                onClick={() => setProductMsg(!productMsg)}
                size={20}
              />
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-center uppercase font-bold text-slate-800">
                Item added to Cart!
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Product;
