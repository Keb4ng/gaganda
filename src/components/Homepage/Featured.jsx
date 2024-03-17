import React from "react";
import ItemListing from "../ListingProps/ItemListing";
import { useApiContext } from "../../context/DataContext/ContextApi";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LuLoader2 } from "react-icons/lu";

const Featured = () => {
  const { items, isLoading } = useApiContext();

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
    <div className="max-w-[1200px] mx-auto my-5 h-auto flex flex-col">
      <h1 className="text-center text-[24px] my-5">New Arrivals</h1>
      {isLoading ? (
        <div className="w-full h-auto flex items-center justify-center">
          <LuLoader2 className="animate-spin" size={50} />
        </div>
      ) : (
        <Slider {...settings}>
          {items
            .filter((product) => {
              return product.brand === "marienatie";
            })
            .slice(0, 12)
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
                  />
                </Link>
              );
            })}
        </Slider>
      )}
    </div>
  );
};

export default Featured;
