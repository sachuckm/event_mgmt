// import CardMedia from "@material-ui/core/CardMedia";
import Videos from "../../Resources/videos.mp4";
import "./HomeScreenContent.css";
import Header from "./Header";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const HomeScreenVideo = ({}) => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="video-container">
          <video autoPlay muted loop id="myVideo">
            <source src={Videos} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ExpandMoreIcon
              style={{ fontSize: 100, color: "#fff" }}
              fontSize="inherit"
              color="inherit"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomeScreenVideo;
