import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import First from "../assets/1.avif";
import Second from "../assets/2.avif";
import Third from "../assets/3.avif";
import Fourth from "../assets/4.avif";
export default function Carousel() {
  return (
    <div>
      <CCarousel className="bg-light">
        <CCarouselItem>
          <CImage className="d-block w-100" src={First} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={Second} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={Third} alt="slide 3" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={Fourth} alt="slide 4" />
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}
