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
    </>
  );
}

export default About_us;
