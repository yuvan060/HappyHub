import { Button, Card, CardContent } from "@mui/material";
import "../assets/css/DashBoard.css";
import PrimarySearchAppBar from "../components/Nav_bar";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Close } from "@mui/icons-material";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const Dashboard = () => {
  const [isCardVisible, setCardVisibility] = useState(false);
  const user = useSelector(selectUser);

  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "AmountUsed",
        data: [20, 38, 38, 72, 55, 63, 43, 76, 85, 80, 40],
        borderColor: "#d0cdef",
        borderWidth: 2,
        borderDash: [5, 5],
      },
      {
        label: "TotalBudget",
        data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89],

        borderColor: "#6259ca",
        borderWidth: 2,
      },
    ],
  };
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
                    <td>01-10-2024</td>
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
              <Line data={chartData} />
            </div>
          </div>
        </main>
      </div>
      {isCardVisible && (
        <Card>
          <CardContent>
            <Close
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                cursor: "pointer",
              }}
              onClick={() => setCardVisibility(false)}
            />
            <p>This is your card content.</p>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Dashboard;
