import { Button } from "@mui/material";

const ChangePassword = () => {
  return (
    <div className="accountsettings">
      <h1 className="mainhead1">Change Password</h1>

      <div className="form">
        <div className="form-group">
          <label htmlFor="oldpass">
            Old Password <span>*</span>
          </label>
          <input type="password" />
        </div>

        <div className="form-group">
          <label htmlFor="newpass">
            New Password <span>*</span>
          </label>
          <input type="password" />
        </div>
      </div>

      <Button className="mainbutton1">Save Changes</Button>
    </div>
  );
};

export default ChangePassword;
