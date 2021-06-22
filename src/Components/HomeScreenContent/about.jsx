import "./HomeScreenContent.css";
import Elon from "../../Resources/elon.jpeg";

const About = ({ openProperty }) => {
  return (
    <div
      style={{ color: "black", fontSize: 16, display: "flex" }}
      className="app-content"
    >
      <img src={Elon} width="40%" height={400} style={{ padding: 20 }}></img>
      {/* https://www.usnews.com/dims4/USNEWS/410224b/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg */}
      <div style={{ width: "60%", height: 400, padding: 20 }}>
        Musk was born to a Canadian mother and South African father and raised
        in Pretoria, South Africa. He briefly attended the University of
        Pretoria before moving to Canada when he was 17 to attend Queen's
        University. He transferred to the University of Pennsylvania two years
        later, where he received dual bachelor's degrees in economics and
        physics. He moved to California in 1995 to begin a Ph.D. in applied
        physics and material sciences at Stanford University, but dropped out
        after two days to pursue a business career. He co-founded Zip2, a web
        software company, which was acquired by Compaq for $307 million in 1999.
        Musk then founded X.com, an online bank. It merged with Confinity in
        2000, which had launched PayPal the previous year and was subsequently
        bought by eBay for $1.5 billion in October 2002. <br></br>
        Musk was born to a Canadian mother and South African father and raised
        in Pretoria, South Africa. He briefly attended the University of
        Pretoria before moving to Canada when he was 17 to attend Queen's
        University. He transferred to the University of Pennsylvania two years
        later, where he received dual bachelor's degrees in economics and
        physics. He moved to California in 1995 to begin a Ph.D. in applied
        physics and material sciences at Stanford University, but dropped out
        after two days to pursue a business career. He co-founded Zip2, a web
        software company, which was acquired by Compaq for $307 million in 1999.
        Musk then founded X.com, an online bank. It merged with Confinity in
        2000, which had launched PayPal the previous year and was subsequently
        bought by eBay for $1.5 billion in October 2002.
      </div>
    </div>
  );
};

export default About;
