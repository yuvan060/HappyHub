import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import { TextField } from "@mui/material";

export default function Add_on_card(cardContent) {
  const [isEditable, setIsEditable] = useState(false);
  const [cardContents, setCardContents] = useState(cardContent.cardContent);
  //   console.log(cardContents);
  return (
    <>
      {!isEditable ? (
        <Card sx={{ maxWidth: 345, margin: 5 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={cardContents.addonImageURL}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardContents.addonName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardContents.addonDescription}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardContents.addonPrice}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              style={{ color: cardContents.isPublished ? "red" : "green" }}
            >
              {cardContents.isPublished ? "Unpublished" : "Publish"}
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
                image={cardContents.addonImageURL}
              />
              <CardContent>
                <TextField
                  style={{ margin: "1%" }}
                  value={cardContents.addonName}
                  onChange={(e) => {
                    setCardContents({
                      ...cardContents,
                      addonName: e.target.value,
                    });
                  }}
                  type="text"
                  id="name"
                  variant="outlined"
                  fullWidth
                ></TextField>
                <TextField
                  style={{ margin: "1%" }}
                  value={cardContents.addonDescription}
                  onChange={(e) => {
                    setCardContents({
                      ...cardContents,
                      addonDescription: e.target.value,
                    });
                  }}
                  type="text"
                  id="description"
                  variant="outlined"
                  fullWidth
                ></TextField>
                <TextField
                  style={{ margin: "1%" }}
                  value={cardContents.addonPrice}
                  onChange={(e) => {
                    setCardContents({
                      ...cardContents,
                      addonPrice: e.target.value,
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
