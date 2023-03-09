import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from "./component/Navbar";
import Dashboard from "./Dashboard";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="">
        
        
        <Dashboard/>
        
      </header>
    </div>
  );
}

export default App;
