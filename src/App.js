import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
// import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Dashboard from "./page/Dashboard";
import {BiUserCircle, BiBell} from 'react-icons/bi';


function App() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <Sidebar/>
      <section className="flex-1">
      
        <Dashboard/>

      </section>
      
      <section className="w-24 bg-gray-100 rounded-tl-70px overflow-hidden ">
        <div className="pt-8 flex justify-end space-x-3 mr-5 items-center">
          <BiBell size={'25'}/>
          <BiUserCircle size={'25'}/>
        </div>
      </section>
    </div>
  );
}

export default App;
