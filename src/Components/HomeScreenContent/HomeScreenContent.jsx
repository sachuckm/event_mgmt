import "./HomeScreenContent.css";
import HomeScreenVideo from "./HomeScreeVideo";
import Listing from "../Listing/Listing";
import SigleLineGridList from "../HorizontalList/SigleLineGridList";
import HorizontalList from "../HorizontalList/HorizontalList";
import About from "./about";
import Header from "./Header";
import EventsList from "../EventsList/EventsList";
import { recentEvents } from "../EventsList/eventList";

const HomeScreenContent = ({ openProperty }) => {
  return (
    <div className="app-content">
      {/* Logo should come here with link to home screen */}
      <Header />
      <HomeScreenVideo />
      <div id="#about">
        <About />
      </div>
      {/* <Listing openProperty={openProperty} />
      <SigleLineGridList openProperty={openProperty} /> */}
      <EventsList list={recentEvents} />
      <div className="GalleryTitle">Gallery</div>
      <HorizontalList openProperty={openProperty} />
    </div>
  );
};

export default HomeScreenContent;
