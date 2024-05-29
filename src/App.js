import Chart from "react-apexcharts";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarChart from './Components/Barchart'
import Home from './Components/Home'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="BarChart" element={<BarChart />} />
      </Routes>
    </Router>
  );
}

export default App;
