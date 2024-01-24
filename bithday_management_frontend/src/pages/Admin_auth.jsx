import PrimarySearchAppBar from "../components/Nav_bar";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import confetti from "../assets/images/login.jpg";

function Admin_auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState("Login");
  const [adminLogin, setAdminLogin] = useState({
    email: "",
    password: "",
  });
  const [admin, setAdmin] = useState({
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
          email: adminLogin.email,
          password: adminLogin.password,
          role: "Admin",
          loggedIn: true,
        })
      );
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  const handleRegister = (e) => {
    e.preventDefault();
    try {
      dispatch(
        login({
          email: admin.email,
          password: admin.password,
          role: "Admin",
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
          <h1>Admin</h1>
          <div className="flex-center-full">
            <div>
              <img
                src={confetti}
                height={200}
                style={{ marginTop: 15 }}
                alt="gift"
              ></img>
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
                  value={adminLogin.email}
                  onChange={(e) => {
                    setAdminLogin({
                      ...adminLogin,
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
                  value={adminLogin.password}
                  onChange={(e) => {
                    setAdminLogin({
                      ...adminLogin,
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
                  value={admin.firstName}
                  onChange={(e) => {
                    setAdmin({ ...admin, firstName: e.target.value });
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
                  value={admin.lastName}
                  onChange={(e) => {
                    setAdmin({ ...admin, lastName: e.target.value });
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
                  value={admin.email}
                  onChange={(e) => {
                    setAdmin({ ...admin, email: e.target.value });
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
                  value={admin.password}
                  onChange={(e) => {
                    setAdmin({ ...admin, password: e.target.value });
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
                  value={admin.confirmPassword}
                  onChange={(e) => {
                    setAdmin({
                      ...admin,
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
                navigate("/customer-auth");
              }}
              style={{ color: "black !important" }}
            >
              <p style={{ color: "black" }}>Are you - </p> customer ?
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Admin_auth;
