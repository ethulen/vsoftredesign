import "./App.css";
import Header from "./Header.js";
import HamburgerMenu from "./HamburgerMenu.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Definition from "./Administrator/ATM/Definition";
import ATMVirtualDocs from "./Administrator/ATM/ATMVirtualDocs";
import ReviewThreshold from "./Administrator/ATM/ReviewThreshold";
import NewATMForm from "./Administrator/ATM/NewATMForm";
import NewVirtualDocs from "./Administrator/ATM/NewVirtualDocs";
import NewReviewThreshold from "./Administrator/ATM/NewReviewThreshold";
import BlockRangeDefinition from "./Administrator/Branch Capture/BlockRangeDefinition.js";
import NewBlockRangeDefinition from "./Administrator/Branch Capture/NewBlockRangeDefinition.js";
import Branch from "./Administrator/Branch Capture/Branch";
import BranchGroups from "./Administrator/Branch Capture/BranchGroups";
import BranchGroupsSorters from "./Administrator/Branch Capture/BranchGroupSorters.js";
import BranchList from "./Administrator/Branch Capture/BranchList.js";
import ConsolidationSchedules from "./Administrator/Branch Capture/ConsolidationSchedules.js";
import ECLConsolidation from "./Administrator/Branch Capture/ECLConsolidation.js";
import JobCutoffDefinition from "./Administrator/Branch Capture/JobCutoffDefinition.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <HamburgerMenu />
        <Routes>
          <Route path="/definition" element={<Definition />} />
          <Route path="/reviewthreshold" element={<ReviewThreshold />} />
          <Route path="/atmvirtualdocs" element={<ATMVirtualDocs />} />
          <Route path="/addATM" element={<NewATMForm />} />
          <Route path="/addVirtualDocs" element={<NewVirtualDocs />} />
          <Route path="/addReviewThreshold" element={<NewReviewThreshold />} />
          <Route
            path="/blockRangeDefinition"
            element={<BlockRangeDefinition />}
          />
          <Route
            path="/addBlockRangeDefinition"
            element={<NewBlockRangeDefinition />}
          />
          <Route path="/branch" element={<Branch />} />
          <Route path="/branchGroups" element={<BranchGroups />} />
          <Route path="/branchGroupSorters" element={<BranchGroupsSorters />} />
          <Route path="/branchList" element={<BranchList />} />
          <Route
            path="/consolidationSchedules"
            element={<ConsolidationSchedules />}
          />
          <Route
            path="/eclConsolidation"
            element={<ECLConsolidation />}
          />
          <Route
            path="/jobcutoffdefinition"
            element={<JobCutoffDefinition />}
          />
          {/* Add routes for other components */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
