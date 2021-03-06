import "./HomeScreenContent.css";
import Elon from "../../Resources/elon.jpeg";
import Typography from "@material-ui/core/Typography";

const About = ({ openProperty }) => {
  return (
    <div style={{ color: "black", fontSize: 16 }} className="app-content">
      <Typography>
        <div className="aboutHeader">About Us</div>
      </Typography>
      <Typography>
        <div className="about">
          Musk was born to a Canadian mother and South African father and raised
          in Pretoria, South Africa. He briefly attended the University of
          Pretoria before moving to Canada when he was 17 to attend Queen's
          University. He transferred to the University of Pennsylvania two years
          later, where he received dual bachelor's degrees in economics and
          physics. He moved to California in 1995 to begin a Ph.D. in applied
          physics and material sciences at Stanford University, but dropped out
          after two days to pursue a business career. He co-founded Zip2, a web
          software company, which was acquired by Compaq for $307 million in
          1999. Musk then founded X.com, an online bank. It merged with
          Confinity in 2000, which had launched PayPal the previous year and was
          subsequently bought by eBay for $1.5 billion in October 2002. Musk was
          born to a Canadian mother and South African father and raised in
          Pretoria, South Africa. He briefly attended the University of Pretoria
          before moving to Canada when he was 17 to attend Queen's University.
          He transferred to the University of Pennsylvania two years later,
          where he received dual bachelor's degrees in economics and physics. He
          moved to California in 1995 to begin a Ph.D. in applied physics and
          material sciences at Stanford University, but dropped out after two
          days to pursue a business career. He co-founded Zip2, a web software
          company, which was acquired by Compaq for $307 million in 1999. Musk
          then founded X.com, an online bank. It merged with Confinity in 2000,
          which had launched PayPal the previous year and was subsequently
          bought by eBay for $1.5 billion in October 2002.
        </div>
      </Typography>
    </div>
  );
};

export default About;
