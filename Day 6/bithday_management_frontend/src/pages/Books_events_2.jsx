import { useState } from "react";
import PrimarySearchAppBar from "../components/Nav_bar";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import logo from "/Happy-Hub.svg";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Book_events_2() {
  const themes = [
    { content: "Pool Party" },
    { content: "Crafting" },
    { content: "Brunch" },
    { content: "Art party" },
  ];
  const addOns = [
    { addOn: "Magic Show" },
    { addOn: "Dj Party" },
    { addOn: "Music Show" },
    { addOn: "Game Show" },
  ];

  const location = useLocation();
  const [bookingDetails, setBookingDetails] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(bookingDetails, location.state);
    notify("Event Successfully Added");
  };
  const notify = (message) => toast.success(message);
  return (
    <>
      <PrimarySearchAppBar />
      <ToastContainer />
      <div className="flex-center-full-hw">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h1>Confirm your event Now</h1>
          <div className="flex-center-full">
            <div>
              <img
                src={logo}
                height={200}
                style={{ marginTop: 15 }}
                alt="gift"
              ></img>
            </div>
          </div>
          <div className="flex-box-contact-us">
            <div className="flex-center-full-form">
              <div className="fields">
                <TextField
                  value={bookingDetails.date}
                  onChange={(e) => {
                    setBookingDetails({
                      ...bookingDetails,
                      date: e.target.value,
                    });
                  }}
                  required
                  type="date"
                  id="date"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </div>
              <div className="fields">
                <TextField
                  value={bookingDetails.time}
                  onChange={(e) => {
                    setBookingDetails({
                      ...bookingDetails,
                      time: e.target.value,
                    });
                  }}
                  required
                  type="text"
                  id="time"
                  label="Event Time"
                  variant="outlined"
                  //   fullWidth
                ></TextField>
              </div>
              <div className="fields">
                <TextField
                  required
                  value={bookingDetails.attendees}
                  onChange={(e) => {
                    setBookingDetails({
                      ...bookingDetails,
                      attendees: e.target.value,
                    });
                  }}
                  type="text"
                  id="attendees"
                  label="Attendees"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </div>
            </div>
            <div>
              <div className="fields">
                <TextField
                  value={bookingDetails.food}
                  required
                  onChange={(e) => {
                    setBookingDetails({
                      ...bookingDetails,
                      food: e.target.value,
                    });
                  }}
                  id="filled-multiline-flexible"
                  label="Food Details"
                  multiline
                  maxRows={4}
                  variant="outlined"
                  fullWidth
                />
              </div>
            </div>
            <div className="flex-center-full-form">
              <div className="fields">
                <TextField
                  required
                  value={bookingDetails.vegCount}
                  onChange={(e) => {
                    setBookingDetails({
                      ...bookingDetails,
                      vegCount: e.target.value,
                    });
                  }}
                  type="text"
                  id="vegCount"
                  label="Vegetarian Count"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </div>
              <div className="fields">
                <TextField
                  value={bookingDetails.nonVegCount}
                  required
                  onChange={(e) => {
                    setBookingDetails({
                      ...bookingDetails,
                      nonVegCount: e.target.value,
                    });
                  }}
                  type="text"
                  id="nonVegCount"
                  label="Non Vegetarian Count"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </div>
            </div>
            <div className="fields">
              <FormControl fullWidth required>
                <InputLabel>Choose Category</InputLabel>
                <Select fullWidth label="Choose Category">
                  {themes.map((c, index) => (
                    <MenuItem
                      key={index}
                      value={c.content}
                      onClick={() => {
                        setBookingDetails({
                          ...bookingDetails,
                          category: c.content,
                        });
                      }}
                    >
                      {c.content}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="fields">
              <FormControl fullWidth required>
                <InputLabel>Choose Addons</InputLabel>
                <Select fullWidth label="Choose Category">
                  {addOns.map((c, index) => (
                    <MenuItem
                      key={index}
                      value={c.addOn}
                      onClick={() => {
                        setBookingDetails({
                          ...bookingDetails,
                          addOn: c.addOn,
                        });
                      }}
                    >
                      {c.addOn}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <center>
              <Button type="submit">Confirm Booking</Button>
            </center>
          </div>
        </form>
      </div>
    </>
  );
}

export default Book_events_2;
