import { useEffect, useState } from "react";
import PrimarySearchAppBar from "../components/Nav_bar";
import { Puff } from "react-loader-spinner";
import MediaControlCard from "../components/Card";
import Footer from "../components/Footer";
import { Button, TextField } from "@mui/material";

function Add_themes() {
  const [addTheme, setAddTheme] = useState(false);
  const [theme, setThemes] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setCardContent((prevCardContent) => [...prevCardContent, theme]);
    console.log(cardContent);
  };
  const [cardContent, setCardContent] = useState([
    {
      eventName: "Event Party",
      imageSrc:
        "https://img.freepik.com/free-photo/friends-clinking-drink-glasses-modern-bar_1150-18971.jpg?w=1060&t=st=1706633538~exp=1706634138~hmac=83d70b77f7f34018d773b33d2b24ab352b8ca98c7e1a9dc0af933e83f0de8bce",
      description: "lorem ipsum dolor sit amet, consectetur ",
      cost: "$100",
    },
    {
      eventName: "Pool Party",
      imageSrc:
        "https://img.freepik.com/free-photo/lively-pool-party-scene-with-vibrant-inflatables-upbeat-music-guests-enjoying-sun_1268-31145.jpg?t=st=1706632243~exp=1706632843~hmac=e535b5a86af204e860fa344a48bd82a2d98901dccdf2061ae3d0d3733585c27b",
      description: "lorem ipsum dolor sit amet, consectetur ",
      cost: "$200",
    },
    {
      eventName: "Art Party",
      imageSrc:
        "https://img.freepik.com/free-photo/friends-giving-wrapped-gift-boxes-excited-birthday-girl_23-2148029782.jpg?w=1060&t=st=1706632359~exp=1706632959~hmac=eb01527d61605b1ba7b416ad1a7c1d9c707641f5b3f228136bc5f7e822d5bccd",
      description: "lorem ipsum dolor sit amet, consectetur ",
      cost: "$300",
    },
    {
      eventName: "Crafting",
      imageSrc:
        "https://img.freepik.com/free-photo/young-children-making-diy-project-from-upcycled-materials_23-2149391106.jpg?w=1060&t=st=1706633049~exp=1706633649~hmac=60c0c486212da43852bb058e244732192cc4540cdc1c3245fcb500346ea220a3",
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
                setAddTheme(!addTheme);
              }}
              className="button-bg"
              style={{ color: "white" }}
            >
              {" "}
              + Add Themes
            </Button>
          </div>
          {addTheme && (
            <>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <h1>Add Theme</h1>

                <div className="flex-themes">
                  <div className="fields">
                    <TextField
                      value={theme.eventName}
                      onChange={(e) => {
                        setThemes({
                          ...theme,
                          eventName: e.target.value,
                        });
                      }}
                      required
                      type="text"
                      id="eventName"
                      label="Theme Name"
                      variant="outlined"
                    ></TextField>
                  </div>
                  <div className="fields">
                    <TextField
                      value={theme.imageSrc}
                      onChange={(e) => {
                        setThemes({
                          ...theme,
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
                      value={theme.description}
                      onChange={(e) => {
                        setThemes({
                          ...theme,
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
                      value={theme.cost}
                      onChange={(e) => {
                        setThemes({
                          ...theme,
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
                        Add your theme
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

export default Add_themes;
