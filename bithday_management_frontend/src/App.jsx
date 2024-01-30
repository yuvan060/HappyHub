import Homepage from "./components/Homepage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Customer_auth from "./pages/Customer_auth";
import Admin_auth from "./pages/Admin_auth";
import About_us from "./pages/About_us";
import Contact_us from "./pages/Contact_us";
import LogOut from "./pages/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Error from "./pages/Error";
import View_schedule from "./pages/View_schedule";
import Add_themes from "./pages/Add_themes";
import Profile from "./pages/Profile";
import AccountSettings from "./components/Account_setting";
import ChangePassword from "./components/Change_password";
import Dashboard from "./pages/Dashboard";
import Book_events from "./pages/Book_events";
import Book_events_2 from "./pages/Books_events_2";
import Addons from "./pages/Addons";
function App() {
  const user = useSelector(selectUser);
  return (
    <Router>
      {!user ? (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/customer-auth" element={<Customer_auth />} />
          <Route path="/admin-auth" element={<Admin_auth />} />
          <Route path="/about-us" element={<About_us />} />
          <Route path="/contact-us" element={<Contact_us />} />
          <Route path="*" element={<Error />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/customer-auth" element={<Customer_auth />} />
          <Route path="/admin-auth" element={<Admin_auth />} />
          <Route path="/about-us" element={<About_us />} />
          <Route path="/contact-us" element={<Contact_us />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/customer/view-schedule" element={<View_schedule />} />
          <Route path="/admin/themes" element={<Add_themes />} />
          <Route path="/admin/addons" element={<Addons />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/profile/account-settings"
            element={<AccountSettings />}
          />
          <Route path="/profile/change-password" element={<ChangePassword />} />
          <Route path="/profile/dashboard" element={<Dashboard />} />
          <Route path="/customer/book-schedule" element={<Book_events />} />
          <Route
            path="/customer/booking-detail-confirm"
            element={<Book_events_2 />}
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;
