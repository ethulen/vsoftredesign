import "./App.css";
import Header from "./Header.js";
import HamburgerMenu from "./HamburgerMenu.js";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Definition from "./Administrator/ATM/Definition";
import ATM_Virtual_Docs from "./Administrator/ATM/ATM_Virtual_Docs";
import Review_Threshold from "./Administrator/ATM/Review_Threshold";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          <HamburgerMenu />
          <Routes>
            <Route path="/definition" component={Definition} />
            <Route path="/reviewthreshold" component={Review_Threshold} />
            <Route path="/atmvirtualdocs" component={ATM_Virtual_Docs} />
            {/* Add routes for other components */}
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
