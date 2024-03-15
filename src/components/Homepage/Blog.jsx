import React from "react";
import BlogItem from "../BlogProps/BlogItem";
import blog1 from "../../media/blog1.png";
import blog2 from "../../media/blog2.png";

const Blog = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-2 my-5 flex flex-col gap-2">
      <BlogItem
        title={" Blossom Glow Kit"}
        desc={`Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing
          body and face creams with lotus extract provide deep hydration and
          rejuvenation. Suitable for all skin types. Vegan, cruelty-free,
          eco-friendly.`}
        img={blog1}
      />
      <BlogItem
        title={"Floral Essence Masks Sets"}
        desc={`Indulge in the beauty of nature with our Floral Essence Masks set. Each mask features a unique blend of flower extracts to hydrate and nourish your skin. Experience the essence of flowers in your skincare routine.`}
        img={blog2}
      />
    </div>
  );
};

export default Blog;
