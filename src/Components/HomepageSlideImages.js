import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import HomepageSliderImage1 from "../Assets/HomepageSliderImage1.jpg";
import HomepageSliderImage2 from "../Assets/HomepageSliderImage2.jpg";
import HomepageSliderImage3 from "../Assets/HomepageSliderImage3.jpg";
import "../Css-Code/HomepageSlideImagesCSS.css";

function HomepageSlideImages() {
  const [selectImages, setSelectImages] = useState(0);

  const Images = [
    HomepageSliderImage1,
    HomepageSliderImage2,
    HomepageSliderImage3
  ];

    function rightside() {
        let nextIndex = selectImages + 1;
        if (nextIndex >= Images.length) {
          nextIndex = 0;
        }
        setSelectImages(nextIndex);
    }


  const leftside = () => {
    setSelectImages((prev) =>
      prev === 0 ? Images.length - 1 : prev - 1
    );
  };

  return (
    <div className="custom-slider-container">
      <div className="AllImages">
        <img
          src={Images[selectImages]}
          alt="Slider"
          className="custom-slider-image"
        />
      </div>

      <button className="slider-btn left-btn" onClick={leftside}>
        <FaChevronLeft />
      </button>

      <button className="slider-btn right-btn" onClick={rightside}>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default HomepageSlideImages;
