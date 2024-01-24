import PrimarySearchAppBar from "../components/Nav_bar";

function View_schedule() {
  return (
    <>
      <PrimarySearchAppBar />
      <div className=".flex-center-full">
        {" "}
        <h1 style={{ textAlign: "center", marginTop: "20%" }}>
          Your Schedules
        </h1>
      </div>
    </>
  );
}

export default View_schedule;
