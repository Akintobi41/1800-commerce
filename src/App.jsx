import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Router>
        <Layout></Layout>
      </Router>
    </div>
  );
}

export default App;
