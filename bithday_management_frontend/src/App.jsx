import Homepage from "./components/Homepage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Customer_auth from "./pages/Customer_auth";
import Admin_auth from "./pages/Admin_auth";
import About_us from "./pages/About_us";
import Contact_us from "./pages/Contact_us";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/customer-auth" element={<Customer_auth />} />
        <Route path="/admin-auth" element={<Admin_auth />} />
        <Route path="/about-us" element={<About_us />} />
        <Route path="/contact-us" element={<Contact_us />} />
      </Routes>
    </Router>
  );
}

export default App;
