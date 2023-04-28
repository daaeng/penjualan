import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Dashboard from "./page/Dashboard";
import Psale from "./page/saless";
import Fnance from "./page/fnance";
import Logstik from "./page/Logstik";
import MdMerhcain from "./page/MdMerhcain";
import Ggrosir from "./page/Ggrosir";
import Login from "./page/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Dashboard/>}/>
          <Route path="/sales" element = {<Psale/>}/>
          <Route path="/finance" element = {<Fnance/>}/>
          <Route path="/Logistik" element = {<Logstik/>}/>
          <Route path="/MD" element = {<MdMerhcain/>}/>
          <Route path="/Grosir" element = {<Ggrosir/>}/>

          <Route path="/Auth" element = {<Login/>}/>

          <Route path="*" element= {'NOT FOUND !'}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
