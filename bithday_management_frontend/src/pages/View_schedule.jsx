import { useEffect, useState } from "react";
import PrimarySearchAppBar from "../components/Nav_bar";
import { Puff } from "react-loader-spinner";
import Footer from "../components/Footer";
import MediaControlCard from "../components/Card";

function View_schedule() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#ac87c5"
          ariaLabel="puff-loading"
          wrapperStyle={{ padding: "25%", backgroundColor: "black" }}
          wrapperClass="flex-center-full"
        />
      ) : (
        <>
          <PrimarySearchAppBar />
          <div className=".flex-center-full"></div>
          <MediaControlCard />
          <Footer />
        </>
      )}
    </>
  );
}

export default View_schedule;
