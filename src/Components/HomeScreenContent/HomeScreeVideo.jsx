import CardMedia from "@material-ui/core/CardMedia";
import Videos from "../../Resources/videos.mp4";
import "./HomeScreenContent.css";
import Header from "./Header";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const HomeScreenVideo = ({}) => {
  return (
    <div className="video-container">
      <Header />
      <video autoPlay muted loop id="myVideo">
        <source src={Videos} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div>
        <ExpandMoreIcon
          style={{ marginRight: "auto", fontSize: 50, color: "#fff" }}
          fontSize="inherit"
          color="inherit"
        />
      </div>
    </div>
  );
};

export default HomeScreenVideo;
