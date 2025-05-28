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

function Layout({ children }) {
  const location = useLocation();

  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main>{children}</main>
    </>
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
