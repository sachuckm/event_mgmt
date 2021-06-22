import "./HomeScreenContent.css";
import HomeScreenVideo from "./HomeScreeVideo";
import Listing from "../Listing/Listing";
import SigleLineGridList from "../HorizontalList/SigleLineGridList";
import HorizontalList from "../HorizontalList/HorizontalList";
import About from "./about";

const HomeScreenContent = ({ openProperty }) => {
  return (
    <div className="app-content">
      {/* Logo should come here with link to home screen */}
      <HomeScreenVideo />
      <About />
      <Listing openProperty={openProperty} />
      <SigleLineGridList openProperty={openProperty} />
      <HorizontalList openProperty={openProperty} />
    </div>
  );
};

export default HomeScreenContent;
