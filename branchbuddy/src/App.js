import "./App.css";
import Header from "./Header.js";
import HamburgerMenu from "./HamburgerMenu.js";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Definition from "./Administrator/ATM/Definition";
import ATMVirtualDocs from "./Administrator/ATM/ATMVirtualDocs";
import ReviewThreshold from "./Administrator/ATM/ReviewThreshold";
import NewATMForm from "./Administrator/ATM/NewATMForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          <HamburgerMenu />
          <Routes>
            <Route path="/definition" element={<Definition />} />
            <Route path="/reviewthreshold" element={<ReviewThreshold/>} />
            <Route path="/atmvirtualdocs" element={<ATMVirtualDocs/>} />
            <Route path="/add" element={<NewATMForm/>} />
            {/* Add routes for other components */}
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
