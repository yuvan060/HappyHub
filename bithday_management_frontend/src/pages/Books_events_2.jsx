import { useEffect, useState } from "react";
import PrimarySearchAppBar from "../components/Nav_bar";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import UserService from "../services/UserService";
import Booking_theme_card from "../components/Booking_theme";
import Booking_Addon_card from "../components/Booking_Addon";
import Booking_food_card from "../components/Booking_food";

function Book_events_2() {
  const user = useSelector(selectUser);
  useEffect(() => {
    UserService.GetThemes(user.token).then((res) => {
      const filteredThemes = res.data.filter((theme) => theme.published);
      setCardThemeContent(filteredThemes);
    });
    UserService.GetAddons(user.token).then((res) => {
      const filteredAddons = res.data.filter((addon) => addon.published);
      setCardAddonContent(filteredAddons);
    });
    UserService.GetFoods(user.token).then((res) => {
      const filteredFoods = res.data.filter((food) => food.published);
      setFood(filteredFoods);
    });
    // console.log(cardThemeContent, cardAddonContent, food);
  }, [user.token]);
  const [cardThemeContent, setCardThemeContent] = useState([
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
  ]);
  const [cardAddonContent, setCardAddonContent] = useState([
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
  ]);
  const [food, setFood] = useState([
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
  ]);
  const location = useLocation();
  const navigate = useNavigate();
  const [isBooked, setIsBooked] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(location.state);
  const [eventThemeId, setEventThemeId] = useState(-1);
  const [addonId, setAddonId] = useState(-1);
  const [eventFoodId, setEventFoodId] = useState([]);
  const notifyError = (msg) => toast.error(msg);
  const [viewSummary, setViewSummary] = useState(false);
  async function handleSubmit() {
    try {
      if (eventThemeId == -1) {
        notifyError("Please Select a theme");
        return;
      }
      if (eventFoodId.length === 0) {
        notifyError("Please Atleast a Food Menu");
        return;
      }
      if (addonId === -1) {
        notifyError("Booking without Add-ons 😐");
      }
      const selectedTheme = cardThemeContent.find(
        (theme) => theme.themeId === eventThemeId
      );
      const selectedAddon = cardAddonContent.find(
        (addon) => addon.addonId === addonId
      );
      const selectedFoods = eventFoodId.map((foodId) =>
        food.find((foodItem) => foodItem.foodId === foodId)
      );
      const themeCost = parseInt(selectedTheme.themeCost, 10);
      const addonCost = parseInt(selectedAddon.addonPrice.replace("$", ""), 10);
      const foodCost = selectedFoods.reduce((total, foodItem) => {
        return total + parseInt(foodItem.foodPrice.replace("$", ""), 10);
      }, 0);

      const totalCost =
        themeCost + addonCost + foodCost * bookingDetails.attendees;
      console.log(totalCost);
      const foodIdsString = eventFoodId.join("-");
      const updatedBookingDetails = {
        ...bookingDetails,
        eventFoodId: foodIdsString,
        eventTheme: eventThemeId,
        addon: addonId,
        eventCost: totalCost,
      };
      setBookingDetails(updatedBookingDetails);
      setViewSummary(true);
    } catch (err) {
      console.log(err);
      notifyError(err.msg);
    }
  }

  const handleBooking = async () => {
    try {
      const response = await UserService.BookEvent(
        user.email,
        user.token,
        bookingDetails
      );
      console.log(response);
      notify("Event Successfully Added 😊");
      setIsBooked(true);
      setViewSummary(false);
    } catch (err) {
      console.log("Error");
      notifyError(err.msg);
    }
  };

  const notify = (message) => toast.success(message);

  return (
    <>
      <ToastContainer />
      <PrimarySearchAppBar />
      <div className="flex-center-full-hw">
        {cardThemeContent.length !== 0 ? (
          <>
            <div>
              <center>
                <h1>Available Themes : </h1>{" "}
              </center>
            </div>
            <div className="flex-box-card">
              {cardThemeContent.map((card, index) => (
                <div key={index}>
                  <Booking_theme_card
                    key={index}
                    cardContent={card}
                    onClick={() => setEventThemeId(card.themeId)}
                    isSelected={eventThemeId === card.themeId}
                  />
                </div>
              ))}
            </div>{" "}
          </>
        ) : (
          <center style={{ margin: "5%" }}>
            <h2>Ops!! No Themes Available</h2>
          </center>
        )}

        <div
          style={{
            margin: "1%",
            height: "5px",
            width: "100%",
            backgroundColor: "#ac87c5",
          }}
        ></div>
        {cardAddonContent.length !== 0 ? (
          <>
            <div>
              <center>
                <h1>Available Add Ons : </h1>{" "}
              </center>
            </div>
            <div className="flex-box-card">
              {cardAddonContent.map((card, index) => (
                <div key={index}>
                  <Booking_Addon_card
                    key={index}
                    cardContent={card}
                    onClick={() => setAddonId(card.addonId)}
                    isSelected={addonId === card.addonId}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <center style={{ margin: "5%" }}>
            <h2>Ops!! No Addons Available</h2>
          </center>
        )}
        <div
          style={{ height: "5px", width: "100%", backgroundColor: "#ac87c5" }}
        ></div>
        {food.length !== 0 ? (
          <>
            <div className="flex-box-card">
              {food.map((card, index) => (
                <div key={index}>
                  <Booking_food_card
                    key={index}
                    cardContent={card}
                    onClick={() => {
                      if (eventFoodId.includes(card.foodId)) {
                        setEventFoodId(
                          eventFoodId.filter((item) => item !== card.foodId)
                        );
                      } else {
                        setEventFoodId([...eventFoodId, card.foodId]);
                      }
                    }}
                    isSelected={eventFoodId.includes(card.foodId)}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <center style={{ margin: "5%" }}>
            <h2>Ops!! No Dishes Available</h2>
          </center>
        )}

        {viewSummary && (
          <div className="overlay">
            <Card>
              <CardMedia
                component="img"
                alt="Event"
                height="140"
                image={
                  cardThemeContent.find(
                    (theme) => theme.themeId === eventThemeId
                  )?.themeImageURL
                }
              />
              <CardContent>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <b>Event Name : </b>
                  {bookingDetails.eventName}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <b>Booking Date : </b>
                  {bookingDetails.eventDate}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <b>Number Of Attendees : </b>
                  {bookingDetails.attendees}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <b>Selected Theme : </b>
                  {
                    cardThemeContent.find(
                      (theme) => theme.themeId === eventThemeId
                    )?.themeName
                  }
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <b>Selected AddOn : </b>
                  {
                    cardAddonContent.find(
                      (addon) => addon.addonId === bookingDetails.addon
                    )?.addonName
                  }
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <b>Food menu : </b>
                  <ul>
                    {eventFoodId.map((foodId) => (
                      <li key={foodId}>
                        {
                          food.find((foodItem) =>
                            eventFoodId.includes(foodItem.foodId)
                          ).foodName
                        }
                      </li>
                    ))}
                  </ul>
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <b>Total Cost : </b>$ {bookingDetails.eventCost}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="button-bg"
                  style={{ color: "white", width: "100%" }}
                  onClick={() => {
                    setViewSummary(false);
                  }}
                >
                  Close
                </Button>
                <Button
                  className="button-bg"
                  style={{ color: "white", width: "100%" }}
                  onClick={() => {
                    handleBooking();
                  }}
                >
                  Book Event
                </Button>
              </CardActions>
            </Card>
          </div>
        )}
        <div>
          {!isBooked ? (
            <Button
              className="button-bg"
              style={{ color: "white", width: "100%" }}
              onClick={() => {
                handleSubmit();
              }}
            >
              View Summary
            </Button>
          ) : (
            <Button
              className="button-bg"
              style={{ color: "white", width: "100%" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Go Back to Home Page
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default Book_events_2;
