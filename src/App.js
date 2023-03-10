import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
// import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Dashboard from "./page/Dashboard";



function App() {
  return (
    <div className="App">
      <Sidebar/>
      <header className="">
        
        <Dashboard/>
        
      </header>
    </div>
  );
}

export default App;
