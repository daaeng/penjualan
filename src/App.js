import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Dashboard from "./page/Dashboard";
import Detail_pen from "./page/Detail_Pen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Dashboard/>}/>
          <Route path="/detail_pen" element = {<Detail_pen/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
