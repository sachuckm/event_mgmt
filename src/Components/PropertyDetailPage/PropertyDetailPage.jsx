import React, { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import ReactWebMediaPlayer from "react-web-media-player";
import Button from "@material-ui/core/Button";
import ArrowBackIosTwoToneIcon from "@material-ui/icons/ArrowBackIosTwoTone";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import Header from "../HomeScreenContent/Header";

const PropertyDetailPage = ({ openProperty }) => {
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <div
        onClick={() => openProperty(false)}
        style={{
          zIndex: 100,
          position: "fixed",
          padding: 10,
          cursor: "pointer",
        }}
      >
        <ArrowBackIosTwoToneIcon />
        <span>BACK</span>
      </div>
      <Carousel />
      <div
        style={{
          margin: "auto",
          width: "50%",
          padding: 10,
          marginTop: 30,
        }}
      >
        <div
          style={{
            top: "51vw",
            color: "black",
            position: "absolute",
            fontFamily: "Source Sans Pro",
            fontSize: 35,
            fontWeight: 300,
            paddingTop: 30,
            textShadow: "rgba(255, 255, 255, 0.5) 0px 1px 2px",
          }}
        >
          33256 Pacific Coast Highway, Malibu, CA, 90265
        </div>
        {/* <ReactWebMediaPlayer
          style={{ top: "54vw" }}
          title="Big Buck Bunny - 2008"
          thumbnail="https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg"
          video="https://nusid.net/video.mp4"
          // logo={{
          //   img: "https://nusid.net/your-logo.png",
          //   href: "https://www.npmjs.com/package/react-web-media-player",
          // }}
          width={1080}
          height={600}
        />
        <div
          style={{
            position: "relative",
            color: "black",
            top: "104vh",
            fontFamily: "Source Sans Pro",
            fontSize: 16,
            width: 1080,
            paddingTop: 30,
            textShadow: "rgba(255, 255, 255, 0.5) 0px 1px 2px",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default PropertyDetailPage;
