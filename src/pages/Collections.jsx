import React from "react";
import collectionsImg from "../media/collectionsImg.png";
import { useApiContext } from "../context/DataContext/ContextApi";
import { Link } from "react-router-dom";
import ItemListing from "../components/ListingProps/ItemListing";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { LuLoader2 } from "react-icons/lu";

const Collections = () => {
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
    <div className="max-w-[1200px] mx-auto mt-[84px] px-2 min-h-[90vh]">
      <div className="relative flex flex-col md:flex-row justify-center items-center py-3 px-6">
        <div className="flex flex-col md:flex-row items-center justify-center relative z-20 gap-5">
          <div className="max-w-[250px] h-auto">
            <img className="w-full h-auto" src={collectionsImg} alt="display" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-950 text-xl font-bold">Collections</p>
            <p className="text-gray-500">Check out all our top items!</p>
          </div>
        </div>
        <div className="bg-primary-100 min-h-[200px] bottom-0 md:bottom-[unset] absolute h-[300px] md:max-h-[200px] w-full"></div>
      </div>

      <h1 className="text-xl text-slate-950 text-center my-5 font-bold">
        Colourpop
      </h1>
      {isLoading ? (
        <div className="w-full h-auto flex items-center justify-center">
          <LuLoader2 className="animate-spin" size={50} />
        </div>
      ) : (
        <Slider {...settings} className="gap-3">
          {items
            .filter((product) => {
              return product.brand === "colourpop";
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
                  />
                </Link>
              );
            })}
        </Slider>
      )}
      <h1 className="text-xl text-slate-950 text-center my-5 font-bold">Nyx</h1>
      {isLoading ? (
        <div className="w-full h-auto flex items-center justify-center">
          <LuLoader2 className="animate-spin" size={50} />
        </div>
      ) : (
        <Slider {...settings} className="gap-3">
          {items
            .filter((product) => {
              return product.brand === "nyx";
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
                  />
                </Link>
              );
            })}
        </Slider>
      )}
      <h1 className="text-xl text-slate-950 text-center my-5 font-bold">
        Dior
      </h1>
      {isLoading ? (
        <div className="w-full h-auto flex items-center justify-center">
          <LuLoader2 className="animate-spin" size={50} />
        </div>
      ) : (
        <Slider {...settings} className="gap-3">
          {items
            .filter((product) => {
              return product.brand === "dior";
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
                  />
                </Link>
              );
            })}
        </Slider>
      )}
    </div>
  );
};

export default Collections;
