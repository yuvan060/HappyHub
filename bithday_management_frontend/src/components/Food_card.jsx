import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import { TextField } from "@mui/material";
import AdminService from "../services/AdminService";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Food_card(cardContent) {
  const [isEditable, setIsEditable] = useState(false);
  const [cardContents, setCardContents] = useState(cardContent.cardContent);
  //   console.log(cardContents);
  const notify = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);
  const user = useSelector(selectUser);

  const handleSubmit = async () => {
    try {
      if (isEditable) {
        await AdminService.UpdateFoods(user.token, cardContents);
        notify("Updated Successfully");
      } else {
        const updatedCardContent = {
          ...cardContents,
          published: !cardContents.published,
        };
        console.log(updatedCardContent);
        setCardContents(updatedCardContent);
        await AdminService.UpdateFoods(user.token, updatedCardContent);
        notify(
          `Food ${
            updatedCardContent.published ? "Published" : "Unpublished"
          } Successfully`
        );
      }
    } catch (err) {
      notifyError(err.message);
    }
  };

  return (
    <>
      {!isEditable ? (
        <Card sx={{ maxWidth: 345, margin: 5 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={cardContents.foodImageURL}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardContents.foodName}
            </Typography>
            <div className="fields">
              <Typography variant="body2" color="text.secondary">
                {cardContents.foodDescription}
              </Typography>
            </div>
            <div className="fields">
              <Typography variant="body2" color="text.secondary">
                <b>Cost : </b> $ {cardContents.foodPrice}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              style={{ color: cardContents.published ? "red" : "green" }}
              onClick={() => {
                handleSubmit();
              }}
            >
              {cardContents.published ? "UnPublish" : "Publish"}
            </Button>
            <Button
              onClick={() => {
                setIsEditable(true);
              }}
              size="small"
            >
              <Edit style={{ color: "#349eeb" }} />
            </Button>
          </CardActions>
        </Card>
      ) : (
        <>
          <>
            <Card sx={{ maxWidth: 345, margin: 5 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={cardContents.foodImageURL}
              />
              <CardContent>
                <div className="fields">
                  <TextField
                    value={cardContents.foodName}
                    onChange={(e) => {
                      setCardContents({
                        ...cardContents,
                        foodName: e.target.value,
                      });
                    }}
                    size="small"
                    required
                    label="Dish Name"
                    type="text"
                    id="name"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </div>
                <div className="fields">
                  <TextField
                    value={cardContents.foodDescription}
                    size="small"
                    required
                    label="Dish Description"
                    onChange={(e) => {
                      setCardContents({
                        ...cardContents,
                        foodDescription: e.target.value,
                      });
                    }}
                    type="text"
                    id="description"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </div>
                <div className="fields">
                  <TextField
                    value={cardContents.foodPrice}
                    size="small"
                    required
                    label="Dish Price"
                    onChange={(e) => {
                      setCardContents({
                        ...cardContents,
                        foodPrice: e.target.value,
                      });
                    }}
                    type="text"
                    id="cost"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </div>
              </CardContent>
              <CardActions>
                <div className="fields">
                  <Button
                    onClick={() => {
                      setIsEditable(false);
                      handleSubmit();
                    }}
                    size="small"
                  >
                    Confirm
                  </Button>
                </div>
              </CardActions>
            </Card>
          </>
        </>
      )}
    </>
  );
}
