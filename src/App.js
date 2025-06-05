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
    <div id="page-top" className="flex h-screen">
      <div id="wrapper">
      {/* Sidebar = navbar-left.php */}
      {!hideNavbar && (
        <aside className="w-64 bg-gradient-to-b from-blue-700 to-blue-500 text-white">
          <Navbar />
        </aside>
      )}

      {/* Content Wrapper = content-wrapper */}
      <div className="flex flex-col flex-1">
        {/* Topbar = navbar-top.php */}
        {!hideTopBar && (
          <header className="h-16 bg-white shadow flex items-center px-4">
            <Topbar />
          </header>
        )}

        {/* Main content = container-fluid custom-container */}
        <main className="flex-1 overflow-auto p-4 bg-gray-100">
          {children}
        </main>
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
