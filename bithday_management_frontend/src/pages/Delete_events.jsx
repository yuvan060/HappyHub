import { Puff } from "react-loader-spinner";
import PrimarySearchAppBar from "../components/Nav_bar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function Delete_events() {
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
          wrapperStyle={{ padding: "30%", backgroundColor: "black" }}
          wrapperClass="flex-center-full"
        />
      ) : (
        <>
          <PrimarySearchAppBar />
          <div className=".flex-center-full">
            {" "}
            <h1 style={{ textAlign: "center", marginTop: "20%" }}>
              Add Events
            </h1>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Delete_events;
