import About_us_banner from "../components/About_us_banner";
import PrimarySearchAppBar from "../components/Nav_bar";
import service from "../assets/images/services.png";
import people from "../assets/images/people.png";
import ideas from "../assets/images/ideas.png";
function About_us() {
  return (
    <>
      <PrimarySearchAppBar />
      <div className="about_us_banner">
        <div className="flex-center">
          <About_us_banner />
        </div>
      </div>
      <div className="flex-center-full">
        <div className="flex-container">
          <h1>
            Welcome to <span className="text-color">HappyHub</span>
          </h1>
          <p style={{ padding: 10, textAlign: "center" }}>
            It’s all in the details . Precise coordination, extraordinary
            results . Our passion is your perfect event . Your occasion deserves
            our careful planning.
          </p>
        </div>
      </div>
      <div className="flex-container-para">
        <div className="content">
          <img src={service} alt="service"></img>
          <h2 style={{ paddingTop: 10 }}> About us</h2>
          <p className="content-para">
            HappyHub is a full-service event management company in Delhi
            dedicated to quality and excellence. We manage events across cities
            in India.
          </p>
        </div>
        <div className="content">
          <img src={people} alt="people"></img>
          <h2 style={{ paddingTop: 10 }}>Our story and work</h2>
          <p className="content-para">
            No matter what your requirement may be, our priority lies in gaining
            an understanding of how your business works, what you hope to
            achieve.
          </p>
        </div>
        <div className="content">
          <img src={ideas} alt="idea"></img>
          <h2 style={{ paddingTop: 10 }}>Meet Our Team</h2>
          <p className="content-para">
            World of event management has changed tremendously in the last few
            years. We are a team of creative and innovative great interpersonal
            skills.
          </p>
        </div>
      </div>
    </>
  );
}

export default About_us;
