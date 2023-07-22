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
          <Route path="/detdtsalesman/:id" element = {<DetSalesman/>} />

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


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// make :
// Side Bar & Header
// Dashboard {Sales}
// Tabel Data Sales
// Chart Sales {Bar, Bar Samping, Line, Pie}
// Detail Sales

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// blum
// {
//  ~ Session Login ~~~~~~~!
// }

// penjualan (bar naik)
// - / brang
// - / kategori
// - / sales
// - / area

// piuntang (bar kanan)
// / hari ini
// / esper hari ini
// / customer

// table ?
// jumlah pengiriman (Card)
// 1 - pengiriman hari ini
// 2 - instalasi hari ini
// 3 - extended waranty
// 4 - jumlah retur hari ini
// 5 - jumlah cash back
// 6 - jumlah penjualan brand
// 7 - jumlah transaksi (total)
// 8 - jumlah baraqn gyang terjual
// 9 - jumlah penjualan harvi

// ╢─> logout (api)
// toast (all notif)
// efek loading(loodle)

// userJabID
// userCategID
// cabID

// Sales
// logistic
// md
// (itmd ==)
// finance
// grosir

// admin
// (itspm = 123)
// ______________________________________________

// Login
// Dashboard role id
// - Sales
// penjualan
// piutang

// - logistic
// - md
// - finance
// - grosir