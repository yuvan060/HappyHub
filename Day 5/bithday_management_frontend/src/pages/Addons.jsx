import { useEffect, useState } from "react";
import PrimarySearchAppBar from "../components/Nav_bar";
import { Puff } from "react-loader-spinner";
import MediaControlCard from "../components/Card";
import Footer from "../components/Footer";
import { Button, TextField } from "@mui/material";

function Addons() {
  const [addOn, setAddOn] = useState(false);
  const [addOns, setAddOns] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setCardContent((prevCardContent) => [...prevCardContent, addOns]);
    console.log(cardContent);
  };
  const [cardContent, setCardContent] = useState([
    {
      eventName: "Dj Party",
      description: "lorem ipsum dolor sit amet, consectetur ",
      imageSrc:
        "https://img.freepik.com/free-photo/man-being-dj-party-medium-shot_23-2149646087.jpg?w=1060&t=st=1706631694~exp=1706632294~hmac=2f16a251e4a0971dd8265c77e01d7763577da1a0e8bb2079b12dc8264cd17765",
      cost: "$100",
    },
    {
      eventName: "Magic Show",
      imageSrc:
        "https://img.freepik.com/free-photo/front-view-woman-holding-tombola-tickets_23-2149704899.jpg?w=1060&t=st=1706631008~exp=1706631608~hmac=db20ba210b044e539659a3562f3e79a43ea429dda0c44f239e1bceb9a431423f",
      description: "lorem ipsum dolor sit amet, consectetur ",
      cost: "$200",
    },
    {
      eventName: "Music Show",
      imageSrc:
        "https://img.freepik.com/free-photo/glowing-stage-light-illuminates-cheering-rock-fans-generated-by-ai_188544-37983.jpg?w=1380&t=st=1706631740~exp=1706632340~hmac=4e8b5d5353b1cb64e5df5ef351d4154095b2f5b627edb740494051c171aaca82",
      description: "lorem ipsum dolor sit amet, consectetur ",
      cost: "$300",
    },
    {
      eventName: "Game Show",
      imageSrc:
        "https://img.freepik.com/free-photo/young-adults-playing-beer-pong_23-2149402815.jpg?w=1060&t=st=1706631386~exp=1706631986~hmac=833deaeece646a8b4904c2b22ab1a165458c354e415f69a98945ad9e1cf0df6a",
      description: "lorem ipsum dolor sit amet, consectetur ",
      cost: "$500",
    },
  ]);
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
          wrapperClass="flex-center-full loader"
        />
      ) : (
        <>
          <PrimarySearchAppBar />
          <div className="flex-box-card">
            {cardContent &&
              cardContent.map((card, index) => (
                <>
                  <MediaControlCard
                    key={index}
                    cardContent={card}
                    index={index}
                  />
                </>
              ))}
          </div>
          <div className="button-center">
            <Button
              onClick={() => {
                setAddOn(!addOn);
              }}
              className="button-bg"
              style={{ color: "white" }}
            >
              {" "}
              + Add-ons
            </Button>
          </div>
          {addOn && (
            <>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <h1>Addons</h1>

                <div className="flex-themes">
                  <div className="fields">
                    <TextField
                      value={addOns.eventName}
                      onChange={(e) => {
                        setAddOns({
                          ...addOns,
                          eventName: e.target.value,
                        });
                      }}
                      required
                      type="text"
                      id="themeName"
                      label="Theme Name"
                      variant="outlined"
                    ></TextField>
                  </div>
                  <div className="fields">
                    <TextField
                      value={addOns.imageSrc}
                      onChange={(e) => {
                        setAddOns({
                          ...addOns,
                          imageSrc: e.target.value,
                        });
                      }}
                      required
                      type="text"
                      id="imageSrc"
                      label="Image Source"
                      variant="outlined"
                    ></TextField>
                  </div>
                  <div className="fields">
                    <TextField
                      value={addOns.description}
                      onChange={(e) => {
                        setAddOns({
                          ...addOns,
                          description: e.target.value,
                        });
                      }}
                      required
                      multiline
                      maxRows={4}
                      id="description"
                      label="Theme description"
                      variant="outlined"
                      //   fullWidth
                    ></TextField>
                  </div>
                  <div className="fields">
                    <TextField
                      value={addOns.cost}
                      onChange={(e) => {
                        addOns({
                          ...addOns,
                          cost: e.target.value,
                        });
                      }}
                      required
                      type="text"
                      id="description"
                      label="Theme Cost"
                      variant="outlined"
                      //   fullWidth
                    ></TextField>
                  </div>
                  <div>
                    <center>
                      <Button
                        className="button-bg"
                        style={{ color: "white" }}
                        type="submit"
                      >
                        + New Addons
                      </Button>
                    </center>
                  </div>
                </div>
              </form>
            </>
          )}
          <Footer />
        </>
      )}
    </>
  );
}

export default Addons;
