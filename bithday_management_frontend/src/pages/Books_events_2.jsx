import { useState } from "react";
import PrimarySearchAppBar from "../components/Nav_bar";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Booking_card from "../components/Booking_card";
import { Button } from "@mui/material";

function Book_events_2() {
  const cardThemeContent = [
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
  ];
  const cardAddonContent = [
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
  ];
  const food = [
    {
      eventName: "Cilantro Grilled Veg",
      imageSrc:
        "https://img.freepik.com/free-photo/grilled-violet-asparagus-wrapped-with-bacon_2829-11299.jpg?w=1060&t=st=1706636354~exp=1706636954~hmac=ae30d4bf629fa8115d80cfae7b00edcc7475f9a913ebb004a977c51b5574d4e1",
      description: "lorem ipsum dolor sit amet, consectetur ",
      cost: "$100",
    },
    {
      eventName: "Hot BBQ Wings",
      imageSrc:
        "https://img.freepik.com/free-photo/grilled-chicken-meat-appetizer-spicy-with-honey-generative-ai_188544-12164.jpg?t=st=1706636419~exp=1706637019~hmac=1dbf2dd8a36fb6d4820676cf279aafb73bc8749f5e0f64970a5b72d9ff5a1091",
      description: "lorem ipsum dolor sit amet, consectetur ",
      cost: "$200",
    },
    {
      eventName: "Mutton Masala Seekh",
      imageSrc:
        "https://img.freepik.com/free-photo/hearty-beef-okra-stew-casserole-wooden-table-top-view-traditional-african-food_123827-27545.jpg?w=1060&t=st=1706636576~exp=1706637176~hmac=6dc0f07da9ddad0d6a1cc9acae1d799956f2d2a044f1f1f198a8ad99bdf4d8ba",
      description: "lorem ipsum dolor sit amet, consectetur ",
      cost: "$300",
    },
  ];
  const location = useLocation();
  const bookingDetails = location.state;
  const [themeId, setThemeId] = useState(0);
  const [addonId, setAddonId] = useState(0);
  const [foodId, setFoodId] = useState(0);

  const handleSubmit = () => {
    console.log(themeId, addonId, foodId);
    console.log(bookingDetails);
    notify("Event Successfully Added");
  };
  const notify = (message) => toast.success(message);

  return (
    <>
      <PrimarySearchAppBar />
      <ToastContainer />
      <div className="flex-center-full-hw">
        <div>
          <center>
            <h1>Select Theme</h1>{" "}
          </center>
        </div>
        <div className="flex-box-card">
          {cardThemeContent.map((card, index) => (
            <div key={index}>
              <Booking_card
                key={index}
                cardContent={card}
                onClick={() => setThemeId(index)}
                isSelected={themeId === index}
              />
            </div>
          ))}
        </div>
        <div
          style={{ height: "10px", width: "100%", backgroundColor: "black" }}
        ></div>
        <div>
          <center>
            <h1>Select Add Ons</h1>{" "}
          </center>
        </div>
        <div className="flex-box-card">
          {cardAddonContent.map((card, index) => (
            <div key={index}>
              <Booking_card
                key={index}
                cardContent={card}
                onClick={() => setAddonId(index)}
                isSelected={addonId === index}
              />
            </div>
          ))}
        </div>
        <div
          style={{ height: "10px", width: "100%", backgroundColor: "black" }}
        ></div>
        <div className="flex-box-card">
          {food.map((card, index) => (
            <div key={index}>
              <Booking_card
                key={index}
                cardContent={card}
                onClick={() => setFoodId(index)}
                isSelected={foodId === index}
              />
            </div>
          ))}
        </div>
        <div>
          <Button
            className="button-bg"
            style={{ color: "white", width: "100%" }}
            onClick={handleSubmit}
          >
            Book Event
          </Button>
        </div>
      </div>
    </>
  );
}

export default Book_events_2;
