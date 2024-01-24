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
import Add_events from "./pages/Add_events";
import Edit_events from "./pages/Edit_events";
import Delete_events from "./pages/Delete_events";
import Profile from "./pages/Profile";
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
          <Route path="/admin/add-event" element={<Add_events />} />
          <Route path="/admin/edit-event" element={<Edit_events />} />
          <Route path="/admin/delete-event" element={<Delete_events />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
