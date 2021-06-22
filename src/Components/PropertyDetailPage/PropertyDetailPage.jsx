import React, { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import ReactWebMediaPlayer from "react-web-media-player";
import Button from "@material-ui/core/Button";
import ArrowBackIosTwoToneIcon from "@material-ui/icons/ArrowBackIosTwoTone";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

const PropertyDetailPage = ({ openProperty }) => {
  return (
    <div style={{ display: "flex" }}>
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
        <ReactWebMediaPlayer
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
        >
          First Time Ever On The Market! Set on a deep lot with 212 feet of
          spectacular ocean frontage and expansive views, this dramatic
          contemporary residence combines up-to-the-minute technology with a
          classical appreciation for materials, structure, and sight lines.
          Designed by Guy Dreier, an architect of international renown, this
          Western Malibu home is a livable sculpture. Surrounded by manicured,
          tropical landscaping visible from every room, the open-plan space has
          beautiful, exceptionally high, re-sawn cedar ceilings, polished
          granite interior walls, Beaumanière French limestone floors, sculpted
          carpeting, and enormous floor-to-ceiling windows and automated glass
          doors facing onto wraparound views. From the gated entry, a long,
          tree- and flower-lined drive leads past a tennis court to the covered
          garden courtyard entry. On the main level is an ocean-view great room
          with a raised fireplace, a large wet bar with counter seating, an
          intimate sitting area, a spacious living/family room, a dining area,
          and a lavish chef’s kitchen with a large island, high-end appliances,
          a generous pantry, and a sparkling saltwater aquarium. Ideal for
          elegant entertaining, these rooms open onto ocean-view decks with
          ample room for seating and dining. Completing the main level is a long
          gallery and two en-suite bedrooms, each with a walk-in closet and a
          private garden courtyard. A wide stairway descends to the master
          retreat, which comprises the entire lower level. This sensational
          suite, with office, sitting area, luxurious bath, and huge walk-in
          closet, enjoys majestic ocean views through a wall of glass. Just
          outside is a flagstone patio with a waterfall that flows into a large
          pond. This leads to a grotto-style Jacuzzi and a raised deck. From
          this level, continue up to a flagstone patio with a barbecue island
          and pizza oven, or follow a verdant path down through gardens and
          vista points, first to a flagstone landing, then to a large, flat,
          grassy area, and finally all the way to the sandy beach. The sale
          includes main lot of over and acre plus the adjoining, beautifully
          landscaped and buildable lot, APN# 4437-019-020, of approximately 1.57
          acres, ideal for a pool, guesthouse, or artist’s studio. An
          architectural triumph, this is an estate of uncommon comfort and rare
          beauty. Co-Listed with Ginger Glass, Compass
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
