import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Dashboard from "./page/Dashboard";
import Psale from "./page/saless";
import Fnance from "./page/fnance";
import Logstik from "./page/Logstik";
import MdMerhcain from "./page/MdMerhcain";
import Ggrosir from "./page/Ggrosir";
import Login from "./page/Login";
import SalesDetPiutang from "./page/SalesDetail/SalesDetPiutang";
import SalesDetPembayaran from "./page/SalesDetail/SalesDetPembayaran";
import SalesDetPenjualan from "./page/SalesDetail/SalesDetPenjualan";
import DetailDatPiutang from "./page/SalesDetail/DetailDatPiutang";
import DetSalesman from "./page/SalesDetail/DataTable/DetSalesman";
import NotingPage from "./page/NotingPage";

function App() {
  
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element = {<Login/>}/>

          <Route path="/dash" element = {<Dashboard/>}/>

          <Route path="/sales" element = {<Psale/>}/>
          <Route path="/detpiutang" element = {<SalesDetPiutang/>} />
          <Route path="/detpembayaran" element = {<SalesDetPembayaran/>} />
          <Route path="/detpenjualan" element = {<SalesDetPenjualan/>} />
          <Route path="/detdtsalesman" element = {<DetSalesman/>} />

          <Route path="/DetailDatPiutang" element = {<DetailDatPiutang/>} />
          
          <Route path="/finance" element = {<Fnance/>}/>
          
          <Route path="/Logistik" element = {<Logstik/>}/>
          
          <Route path="/MD" element = {<MdMerhcain/>}/>

          <Route path="/Grosir" element = {<Ggrosir/>}/>

          <Route path="*" element= {<NotingPage/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
