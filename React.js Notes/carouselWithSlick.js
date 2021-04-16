// React image scroller, or carousel, for scrolling images with left and write arrow keys. Or sliding for phones.

// npm i react-slick slick-carousel to install the two dependencies we'll be needing.

import "./App.css";
import { useState } from "react"; // useState is for fuctionality similair to this.state.
import Slider from "react-slick"; // We'll need this.
import astronaut from "./assets/astronaut.png";
import celebrating from "./assets/celebrating.png";
import education from "./assets/education.png";
import taken from "./assets/taken.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [astronaut, celebrating, education, taken]; // This is the collection of images we'll be scrolling through. It could just be link to a image if you want.

function App() {
  const NextArrow = ({ onClick }) => { // This variable creates button with an function. The button is called by slick in slicks settings. Slick passes the button the argument for each time it's clicked. 
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0); // useState works by setting the first peramiter as the value and the second as the function that changes the value. And the 0 in useState(0) is the default value of the first peramiter.

  const settings = { // Slick's settings
    infinite: true, // Makes the image scroller infinity scroll and reshow the images. But if set and there is less images than the scroller is suposed to scroll, it'll create errors.
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3, // The ammount of images the scroller is suposed to scroll or show.
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />, // The button functions at top are being called here. Slick auto matically adds them.
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next), // Before change is a peramiter by slick and next is the next image. We are then sending next to our useState function to change the value to the next image.
  };

  return (
    <div className="App">
      <Slider {...settings}> {/* This is the slider function and where we pass it's settings. Images is our collection of images and map is a javascript function that does the fallowing action to every image in the collection individually. */}
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;


// This is the css behind all this. So if you wan't to make this carousel your self real quick. Just copy and past
//  in a react app. 

// Make sure to add these @imports for the react slick styling to work.

// @import "~slick-carousel/slick/slick.css";
// @import "~slick-carousel/slick/slick-theme.css";

// .App {
//   width: 50%;
//   margin: 10rem auto;
//   height: 570px;
// }

// .slide img {
//   width: 20rem;
//   margin: 0 auto;
// }

// .slide {
//   transform: scale(0.2);
//   transition: transform 300ms;
//   opacity: 0.5;
// }

// .activeSlide {
//   transform: scale(1.1);
//   opacity: 1;
// }

// .arrow {
//   background-color: #fff;
//   position: absolute;
//   cursor: pointer;
//   z-index: 10;
// }

// .arrow svg {
//   transition: color 300ms;
// }

// .arrow svg:hover {
//   color: #68edff;
// }

// .next {
//   right: 0%;
//   top: 50%;
// }

// .prev {
//   left: 0%;
//   top: 50%;
// }
