import AccountSettings from "../components/Account_setting";
import PrimarySearchAppBar from "../components/Nav_bar";
import ChangePassword from "../components/Change_password";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import image from "../assets/images/my-profile.jpg";
import { Puff } from "react-loader-spinner";
import Footer from "../components/Footer";

function Profile() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const [active, setActive] = useState("accountsettings");
  return (
    <>
      {loading ? (
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#ac87c5"
          ariaLabel="puff-loading"
          wrapperClass="flex-center-full loader"
        />
      ) : (
        <>
          <PrimarySearchAppBar />
          <div>
            <img
              src={image}
              className="image-slider"
              style={{ height: "70vh", width: "100%" }}
              alt="Slider"
            />
            <h1
              className="image-panel"
              style={{ color: "black", left: "60%", fontSize: "500%" }}
            >
              My Profile
            </h1>
          </div>
          <div className="userprofile">
            <div className="userprofilein">
              <div className="left">
                <div className="usersidebar">
                  <Button
                    onClick={() => {
                      setActive("accountsettings");
                    }}
                  >
                    <div className="s1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>Account Settings</span>
                    </div>
                  </Button>

                  <Button
                    onClick={() => {
                      setActive("changepassword");
                    }}
                  >
                    <div className="s1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3   0 016 0z"
                        />
                      </svg>
                      <span>Change Password</span>
                    </div>
                  </Button>
                </div>
              </div>
              <div className="right">
                {active === "accountsettings" && <AccountSettings />}
                {active === "changepassword" && <ChangePassword />}
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}{" "}
    </>
  );
}

export default Profile;
