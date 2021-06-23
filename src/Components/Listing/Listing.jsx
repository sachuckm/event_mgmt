import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ImgMediaCard from "../Common/CardItem";
import image1 from "../../Resources/image1.jpeg";
import image2 from "../../Resources/image2.jpg";
import image3 from "../../Resources/image3.png";

const stubData = [
  {
    cardTitle: "Title1",
    cardImg: image1,
    cardDescription:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    redirectLink: "link",
  },
  {
    cardTitle: "Title2",
    cardImg: image2,
    cardDescription:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    redirectLink: "link",
  },
  {
    cardTitle: "Title3",
    cardImg: image3,
    cardDescription:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    redirectLink: "link",
  },
  {
    cardTitle: "Title14",
    cardImg: image1,
    cardDescription:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    redirectLink: "link",
  },
];
const Listing = ({ openProperty }) => {
  const [index, setIndex] = useState(0);
  const intervalFunction = () => {
    const changedIndex = stubData.length - 1 > index ? index + 1 : 0;
    setIndex(changedIndex);
  };

  useEffect(() => {
    setTimeout(() => {
      intervalFunction();
    }, 4000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      intervalFunction();
    }, 4000);
  }, [index]);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {/* {/* {stubData.map((item) => { */}
      {/* // return ( */}
      <div style={{ margin: "20px 2%", minWidth: "96%" }}>
        {stubData && stubData[index] && (
          <ImgMediaCard
            cardTitle={stubData[index].cardTitle}
            openProperty={openProperty}
            cardImg={stubData[index].cardImg}
            cardDescription={stubData[index].cardDescription}
            redirectLink={stubData[index].redirectLink}
          />
        )}
      </div>
      <div>
        <Button size="small" color="primary">
          Show All Listing ...
        </Button>
      </div>
    </div>
  );
};

export default Listing;
