import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Dashboard from "./page/Dashboard";
import Dpenjualan from "./page/Dpenjualan";
import Pelanggan from "./page/Pelanggan";
import Dpembayaran from "./page/Dpembayaran";
import Home from "./page/home";
import Item from "./page/item";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Dashboard/>}/>
          <Route path="/home" element = {<Home/>}/>
          <Route path="/pel" element = {<Pelanggan/>}/>
          <Route path="/dpem" element = {<Dpembayaran/>}/>
          <Route path="/dpen" element = {<Dpenjualan/>}/>
          <Route path="/item" element = {<Item/>}/>
          <Route path="*" element= {'NOT FOUND !'}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
