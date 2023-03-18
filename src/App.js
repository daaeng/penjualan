import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Dashboard from "./page/Dashboard";
import Dpenjualan from "./page/Dpenjualan";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Dashboard/>}/>
          <Route path="/d_pen" element = {<Dpenjualan/>}/>
          <Route path="*" element= {'NOT FOUND !'}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
