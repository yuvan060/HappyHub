import { Button } from "@mui/material";
import "../assets/css/DashBoard.css";
import PrimarySearchAppBar from "../components/Nav_bar";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const Dashboard = () => {
  const [isCardVisible, setCardVisibility] = useState(false);
  const user = useSelector(selectUser);
  return (
    <>
      <PrimarySearchAppBar />
      <div id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
            </div>
            <a href="#" className="btn-download">
              <i className="bx bxs-cloud-download"></i>
              <span className="text">Download PDF</span>
            </a>
          </div>

          <ul className="box-info">
            <li>
              <i className="bx bxs-calendar-check"></i>
              <span className="text">
                <h3>13</h3>
                <p>
                  {user.role === "Customer" ? "Your Bookings" : "Booked Events"}
                </p>
              </span>
            </li>
            <li>
              <i className="bx bxs-group"></i>
              <span className="text">
                <h3>5</h3>
                <p>Upcoming Events</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-dollar-circle"></i>
              <span className="text">
                <h3>8</h3>
                <p>Completed Events</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Recent Bookings</h3>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Booked by</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* <img src="img/people.png"/> */}
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status completed">Completed</span>
                    </td>
                    <td>
                      <Button
                        className="button-bg"
                        onClick={() => {
                          setCardVisibility(true);
                        }}
                        style={{ color: "white" }}
                      >
                        View{" "}
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {/* <img src="img/people.png"/> */}
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status pending">Pending</span>
                    </td>
                    <td>
                      <Button
                        className="button-bg"
                        onClick={() => {
                          setCardVisibility(true);
                        }}
                        style={{ color: "white" }}
                      >
                        View{" "}
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {/* <img src="img/people.png"/> */}
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status process">Process</span>
                    </td>
                    <td>
                      <Button
                        className="button-bg"
                        onClick={() => {
                          setCardVisibility(true);
                        }}
                        style={{ color: "white" }}
                      >
                        View{" "}
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {/* <img src="img/people.png"/> */}
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status pending">Pending</span>
                    </td>
                    <td>
                      <Button
                        className="button-bg"
                        onClick={() => {
                          setCardVisibility(true);
                        }}
                        style={{ color: "white" }}
                      >
                        View{" "}
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {/* <img src="img/people.png"/> */}
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status completed">Completed</span>
                    </td>
                    <td>
                      <Button
                        className="button-bg"
                        onClick={() => {
                          setCardVisibility(true);
                        }}
                        style={{ color: "white" }}
                      >
                        View{" "}
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="todo">
              <div className="head">
                <h3>Your Activities </h3>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
