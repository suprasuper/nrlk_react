import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Approutes from "./routes/Approutes";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

function Layout({ children }) {
  const location = useLocation();

  const hideNavbar = location.pathname === "/";
  const hideTopBar = location.pathname === "/";

  return (
    <div id="page-top">
      <div id="wrapper">
        {!hideNavbar && <Navbar />}
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">{!hideTopBar && <Topbar />}</div>
          <div className="container-fluid custom-container">{children}</div>
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Layout>
        <Approutes />
        <ToastContainer />
      </Layout>
    </Router>
  );
}

export default App;
