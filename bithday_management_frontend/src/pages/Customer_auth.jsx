import PrimarySearchAppBar from "../components/Nav_bar";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import confetti from "../assets/images/confetti.gif";
import { login } from "../features/userSlice";
function Customer_auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState("Login");
  const [customerLogin, setCustomerLogin] = useState({
    email: "",
    password: "",
  });
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      dispatch(
        login({
          email: customerLogin.email,
          password: customerLogin.password,
          role: "Customer",
          loggedIn: true,
        })
      );
      navigate("/");
    } catch (e) {
      console.log(e);
    }
    console.log(customerLogin);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      dispatch(
        login({
          email: customer.email,
          password: customer.password,
          role: "Customer",
          loggedIn: true,
        })
      );
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <PrimarySearchAppBar />
      <div className="flex-center-full-hw">
        <form
          onSubmit={(e) => {
            if (state === "Login") {
              handleLogin(e);
            } else {
              handleRegister(e);
            }
          }}
        >
          <h1>Customer</h1>
          <div className="flex-center-full">
            <div>
              <img src={confetti} alt="gift"></img>
            </div>
          </div>
          <div>
            <div className="button-header">
              <Button
                onClick={() => {
                  setState("Login");
                }}
                className="color-orange text-color"
              >
                Login
              </Button>
              |
              <Button
                onClick={() => {
                  setState("Register");
                }}
                className="color-orange text-color"
              >
                Register
              </Button>
            </div>
          </div>
          {state === "Login" ? (
            <>
              <div className="field-container">
                <TextField
                  required
                  value={customerLogin.email}
                  onChange={(e) => {
                    setCustomerLogin({
                      ...customerLogin,
                      email: e.target.value,
                    });
                  }}
                  type="email"
                  id="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="field-container">
                <TextField
                  required
                  value={customerLogin.password}
                  onChange={(e) => {
                    setCustomerLogin({
                      ...customerLogin,
                      password: e.target.value,
                    });
                  }}
                  type="password"
                  id="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                />
              </div>
              {/* <div className="field-container">
                  <Link to={"/forgot-password"}>Forgot Password?</Link>
                </div> */}
              <div className="field-container">
                <Button
                  type="submit"
                  variant="contained"
                  className="button-bg"
                  fullWidth
                >
                  Login
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="field-container">
                <TextField
                  value={customer.firstName}
                  onChange={(e) => {
                    setCustomer({ ...customer, firstName: e.target.value });
                  }}
                  type="text"
                  id="first-name"
                  label="First Name"
                  required
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="field-container">
                <TextField
                  value={customer.lastName}
                  onChange={(e) => {
                    setCustomer({ ...customer, lastName: e.target.value });
                  }}
                  type="text"
                  id="last-name"
                  label="Last Name"
                  required
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="field-container">
                <TextField
                  value={customer.email}
                  onChange={(e) => {
                    setCustomer({ ...customer, email: e.target.value });
                  }}
                  type="email"
                  id="email"
                  label="Email"
                  required
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="field-container">
                <TextField
                  value={customer.password}
                  onChange={(e) => {
                    setCustomer({ ...customer, password: e.target.value });
                  }}
                  type="password"
                  id="password"
                  label="Password"
                  required
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="field-container">
                <TextField
                  value={customer.confirmPassword}
                  onChange={(e) => {
                    setCustomer({
                      ...customer,
                      confirmPassword: e.target.value,
                    });
                  }}
                  type="password"
                  id="confirm-password"
                  label="Confirm password"
                  required
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="field-container">
                <Button
                  variant="contained"
                  type="submit"
                  className="button-bg"
                  fullWidth
                >
                  Register
                </Button>
              </div>
            </>
          )}
          <div className="button-header">
            <Button
              onClick={() => {
                navigate("/admin-auth");
              }}
              style={{ color: "black !important" }}
            >
              <p style={{ color: "black" }}>Are you - </p> Admin ?
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Customer_auth;
