import About_us_banner from "../components/About_us_banner";
import PrimarySearchAppBar from "../components/Nav_bar";
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
        <div className="content">
          <h2>Our company</h2>
          <p className="content-para">
            HappyHub is a full-service event management company in Delhi
            dedicated to quality and excellence. Since our establishment, we
            have continuously strived towards the flawless execution of events
            and planning. We manage events across all major cities in India.
          </p>
        </div>
        <div className="content">
          <h2>Mission</h2>
          <p className="content-para">
            No matter what your requirement may be, our priority lies in gaining
            an in-depth understanding of how your business works, what you hope
            to achieve, and what we can do to deliver results that exceed all
            expectations. We believe in flexibility with the clients.
          </p>
        </div>
        <div className="content">
          <h2>Passion</h2>
          <p className="content-para">
            World of event management has changed tremendously in the last few
            years. We are a team of creative and innovative, passionate and
            enthusiastic with great interpersonal skills. We always ready to
            serve clients, best in the industries with good time management
            skills.
          </p>
        </div>
      </div>
    </>
  );
}

export default About_us;
