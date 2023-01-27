import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import NavBar from "./components/layout/NavBar";
import PageNotFound from "./components/pages/PageNotFound";
import AddUser from "./components/user/AddUser";
import EditUser from "./components/user/EditUser";
import ViewUser from "./components/user/ViewUser";
import AddUserNew from "./components/user/AddUserNew";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          {/* <Route exact path="/users/add" element={<AddUserNew />} /> */}
          <Route exact path="/users/add" element={<AddUser />} />
          <Route exact path="/users/edit/:userId" element={<EditUser />} />
          <Route exact path="/users/view/:userId" element={<ViewUser />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
