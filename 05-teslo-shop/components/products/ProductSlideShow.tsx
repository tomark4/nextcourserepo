import React from "react";
import { Slide } from "react-slideshow-image";
import styles from "./ProductSlideShow.module.css";

interface Props {
  images: string[];
}

const ProductSlideShow = ({ images }: Props) => {
  return (
    <Slide easing="ease" duration={7000} indicators>
      {images.map((image, index) => {
        const url = `/products/${image}`;
        return (
          <div className={styles["each-slide"]} key={index}>
            <div
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        );
      })}
    </Slide>
  );
};

export default ProductSlideShow;
