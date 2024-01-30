import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import { TextField } from "@mui/material";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

export default function MediaControlCard(cardContent) {
  const [isEditable, setIsEditable] = useState(false);
  const user = useSelector(selectUser);
  const [cardContents, setCardContents] = useState(cardContent.cardContent);
  console.log(cardContents);
  return (
    <>
      {!isEditable ? (
        <Card sx={{ maxWidth: 345, margin: 5 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={cardContents.imageSrc}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardContents.eventName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardContents.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardContents.cost}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
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
      ) : user.role === "Customer" ? (
        <>
          <Card sx={{ maxWidth: 345, margin: 5 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={cardContents.imageSrc}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cardContents.eventName}
              </Typography>
              <TextField
                style={{ margin: "1%" }}
                value={cardContents.description}
                onChange={(e) => {
                  setCardContents({
                    ...cardContents,
                    description: e.target.value,
                  });
                }}
                type="text"
                id="description"
                variant="outlined"
                fullWidth
              ></TextField>
              <Typography variant="body2" color="text.secondary">
                {cardContents.cost}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
              <Button
                onClick={() => {
                  setIsEditable(false);
                }}
                size="small"
              >
                Confirm
              </Button>
            </CardActions>
          </Card>
        </>
      ) : (
        <>
          <>
            <Card sx={{ maxWidth: 345, margin: 5 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={cardContents.imageSrc}
              />
              <CardContent>
                <TextField
                  style={{ margin: "1%" }}
                  value={cardContents.eventName}
                  onChange={(e) => {
                    setCardContents({
                      ...cardContents,
                      eventName: e.target.value,
                    });
                  }}
                  type="text"
                  id="name"
                  variant="outlined"
                  fullWidth
                ></TextField>
                <TextField
                  style={{ margin: "1%" }}
                  value={cardContents.description}
                  onChange={(e) => {
                    setCardContents({
                      ...cardContents,
                      description: e.target.value,
                    });
                  }}
                  type="text"
                  id="description"
                  variant="outlined"
                  fullWidth
                ></TextField>
                <TextField
                  style={{ margin: "1%" }}
                  value={cardContents.cost}
                  onChange={(e) => {
                    setCardContents({
                      ...cardContents,
                      cost: e.target.value,
                    });
                  }}
                  type="text"
                  id="cost"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button
                  onClick={() => {
                    setIsEditable(false);
                  }}
                  size="small"
                >
                  Confirm
                </Button>
              </CardActions>
            </Card>
          </>
        </>
      )}
    </>
  );
}
