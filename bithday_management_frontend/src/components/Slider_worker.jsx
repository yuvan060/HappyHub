import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import person1 from "../assets/images/person1.jpg";
import person2 from "../assets/images/person2.jpg";
import person3 from "../assets/images/person3.jpg";
import person4 from "../assets/images/person4.jpg";

const images = [person1, person2];
const images1 = [person4, person3];
const content = [
  {
    name: "John",
    role: "Event Manager",
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quaerat quibusdam ",
  },
  {
    name: "Lara",
    role: "Founder ",
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quaerat quibusdam ",
  },
];
const content1 = [
  {
    name: "Stokes",
    role: "Director",
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quaerat quibusdam ",
  },
  {
    name: "Enitha",
    role: "Co-Founder ",
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quaerat quibusdam ",
  },
];
function Slider_worker() {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      stopOnHover={false}
      className="hover-pointer"
    >
      {images.map((image, i) => (
        <div key={i} className="style-banner">
          <div className="banner-image">
            <div>
              <img
                src={images[i]}
                className="image-slider"
                alt="Slider"
                style={{ height: "40vh", width: "40vh" }}
              />
            </div>
            <div
              style={{
                color: "white",
                margin: "5%",
                textAlign: "justify",
                width: "40%",
              }}
            >
              <h2>{content[i].name}</h2>
              <hr />
              <p style={{ fontSize: "small", fontWeight: "lighter" }}>
                {content[i].role}
              </p>
              <p style={{ paddingTop: "4%" }}>{content[i].para}</p>
            </div>
          </div>
          <div className="banner-image">
            <div>
              <img
                src={images1[i]}
                className="image-slider"
                alt="Slider"
                style={{ height: "40vh", width: "40vh" }}
              />
            </div>
            <div
              style={{
                color: "white",
                margin: "5%",
                textAlign: "justify",
                width: "40%",
              }}
            >
              <h2>{content1[i].name}</h2>
              <hr />
              <p style={{ fontSize: "small", fontWeight: "lighter" }}>
                {content1[i].role}
              </p>
              <p style={{ paddingTop: "4%" }}>{content1[i].para}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Slider_worker;
