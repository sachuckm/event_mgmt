import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import "./styles.scss";
import image1 from "../../Resources/image1.jpeg";
import image2 from "../../Resources/image2.jpg";
import image3 from "../../Resources/image3.png";
import image4 from "../../Resources/image3.png";
import image5 from "../../Resources/image3.png";

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

const movies = [image1, image2, image3, image4, image5];

const HorizontalList = ({ openProperty }) => {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });

  return (
    <>
      <div className="container" {...bind()}>
        {movies.map((src) => (
          <animated.div
            key={src}
            onClick={openProperty}
            className="card"
            style={{
              ...style,
              backgroundImage: `url(${src})`,
            }}
          />
        ))}
      </div>
    </>
  );
};

// const HorizontalList = () => {
//   const [style, set] = useSpring(() => ({
//     transform: "perspective(500px) rotateY(0deg)"
//   }));

//   const clamp = (value, clampAt= 30) => {
//     if (value > 0) {
//       return value > clampAt ? clampAt : value;
//     } else {
//       return value < -clampAt ? -clampAt : value;
//     }
//   };
//   const bind = useScroll(event => {
//     set({
//       transform: `perspective(500px) rotateY(${
//         event.scrolling ? clamp(event.delta[0]) : 0
//       }deg)`
//     });
//   });

//   return (
//     <>
//     <div className="container" {...bind()}>
//         {movies.map(src => (
//           <animated.div
//             key={src}
//             className="card"
//             style={{
//               ...style,
//               backgroundImage: `url(${src})`
//             }}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

export default HorizontalList;
