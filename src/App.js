import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Dashboard from "./page/Dashboard";
import Dpembelian from "./page/Dpembelian";
import Pelanggan from "./page/Pelanggan";
import Dpembayaran from "./page/Dpembayaran";
import Home from "./page/home";
import Item from "./page/item";
import DetailChart from "./page/DetChart";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Dashboard/>}/>
          <Route path="/home" element = {<Home/>}/>
          <Route path="/pel" element = {<Pelanggan/>}/>
          <Route path="/dpem" element = {<Dpembayaran/>}/>
          <Route path="/dpbel" element = {<Dpembelian/>}/>
          <Route path="/item" element = {<Item/>}/>
          <Route path="/detch" element = {<DetailChart/>}/>
          <Route path="*" element= {'NOT FOUND !'}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
