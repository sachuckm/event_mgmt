import React from "react";
import Carousel from "react-material-ui-carousel";
import Slideshow from "react-slidez";
import { Paper, Button, Divider } from "@material-ui/core";
import image1 from "../../Resources/image2.jpg";
import image2 from "../../Resources/image3.png";
import "./Carousel.css";

function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: image1,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: image2,
    },
  ];

  return (
    // <Carousel className="carousel_class">
    //   {items.map((item, i) => (
    //     <Item key={i} item={item} />
    //   ))}
    // </Carousel>
    <Slideshow
      showIndex
      showArrows
      autoplay
      enableKeyboard
      useDotIndex
      slideInterval={4000}
      defaultIndex={1}
      // slides={["1.jpg", "2.jpg"]}
      effect={"bounce-left"}
      height={"100%"}
      width={"100%"}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Slideshow>
  );
}

function Item(props) {
  return (
    <Paper className="carousel-container">
      <img
        className="carousel-img"
        src={props.item.img}
        width="100%"
        height="600"
      ></img>
      <div style={{}} className="carousel-property-detail">
        <div>
          FOR SALE <br></br>$65,000,000
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
          33256 Pacific Coast Highway <br></br> Malibu, CA
        </div>
      </div>
    </Paper>
  );
}

export default Example;
