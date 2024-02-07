import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import { TextField } from "@mui/material";

export default function Theme_Card(cardContent) {
  const [isEditable, setIsEditable] = useState(false);
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
            image={cardContents.themeImageURL}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardContents.themeName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardContents.themeDescription}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardContents.themeCost}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Photographer : {cardContents.themePhotographer}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Videographer : {cardContents.themeVideographer}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              themeReturnGift : {cardContents.themeReturnGift}
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
                image={cardContents.imageSrc}
              />
              <CardContent>
                <TextField
                  style={{ margin: "1%" }}
                  value={cardContents.themeName}
                  onChange={(e) => {
                    setCardContents({
                      ...cardContents,
                      themeName: e.target.value,
                    });
                  }}
                  type="text"
                  id="name"
                  variant="outlined"
                  fullWidth
                ></TextField>
                <TextField
                  style={{ margin: "1%" }}
                  value={cardContents.themeDescription}
                  onChange={(e) => {
                    setCardContents({
                      ...cardContents,
                      themeDescription: e.target.value,
                    });
                  }}
                  type="text"
                  id="description"
                  variant="outlined"
                  fullWidth
                ></TextField>
                <TextField
                  style={{ margin: "1%" }}
                  value={cardContents.themeCost}
                  onChange={(e) => {
                    setCardContents({
                      ...cardContents,
                      themeCost: e.target.value,
                    });
                  }}
                  type="text"
                  id="cost"
                  variant="outlined"
                  fullWidth
                ></TextField>
                <TextField
                  style={{ margin: "1%" }}
                  value={cardContents.themePhotographer}
                  onChange={(e) => {
                    setCardContents({
                      ...cardContents,
                      themePhotographer: e.target.value,
                    });
                  }}
                  type="text"
                  id="photo"
                  variant="outlined"
                  fullWidth
                ></TextField>
                <TextField
                  style={{ margin: "1%" }}
                  value={cardContents.themeVideographer}
                  onChange={(e) => {
                    setCardContents({
                      ...cardContents,
                      themeVideographer: e.target.value,
                    });
                  }}
                  type="text"
                  id="video"
                  variant="outlined"
                  fullWidth
                ></TextField>
                <TextField
                  style={{ margin: "1%" }}
                  value={cardContents.themeReturnGift}
                  onChange={(e) => {
                    setCardContents({
                      ...cardContents,
                      themeReturnGift: e.target.value,
                    });
                  }}
                  type="text"
                  id="gift"
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