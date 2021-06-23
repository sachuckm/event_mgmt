import React, { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import ReactWebMediaPlayer from "react-web-media-player";
import Button from "@material-ui/core/Button";
import ArrowBackIosTwoToneIcon from "@material-ui/icons/ArrowBackIosTwoTone";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import Header from "../HomeScreenContent/Header";
import EventCard from "./EventCard";
import "./Events.scss";

const EventsList = ({ openProperty, list = [] }) => {
  return (
    <div className="EventPage">
      {/* <Header /> */}
      <div className="EventHeader">Upcoming Events</div>
      <div className="EventList">
        {list.map((event) => {
          return (
            <div className="EventItem">
              <EventCard event={event} />
            </div>
          );
        })}
      </div>

      {/* <div style={{ display: "flex", height: "200px" }}></div> */}
    </div>
  );
};

export default EventsList;
