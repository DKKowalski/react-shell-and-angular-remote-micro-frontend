import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MarketingAppComponent from "./components/MarketingAppComponent";

// Create basic React components for other pages
const DashboardPage = () => (
  <div>
    <h2>Dashboard</h2>
    <p>Welcome to the dashboard!</p>
  </div>
);

const LoginPage = () => (
  <div>
    <h2>Login</h2>
    <p>Please log in.</p>
  </div>
);

const HomePage = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the home page!</p>
    <nav>
      <ul>
        <li>
          <Link to="/marketing">Marketing App</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketing/*" element={<MarketingAppComponent />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
