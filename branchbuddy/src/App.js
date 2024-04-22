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
import AdjustmentConfig from "./Administrator/Capture/AdjustmentConfig.js";
import ApplicationCodes from "./Administrator/Capture/ApplicationCodes.js";
import CashLetterGroup from "./Administrator/Capture/CashLetterGroup.js";
import DupItemsConfig from "./Administrator/Capture/DupItemsConfig.js";
import ECLProfiles from "./Administrator/Capture/ECLProfiles.js";
import Endpoint from "./Administrator/Capture/Endpoint.js";
import EndpointGroups from "./Administrator/Capture/EndpointGroups.js";
import VirtualMaster from "./Administrator/Capture/VirtualMaster.js";
import WorkTypes from "./Administrator/Capture/WorkTypes.js";

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
          <Route path="/eclConsolidation" element={<ECLConsolidation />} />
          <Route
            path="/jobcutoffdefinition"
            element={<JobCutoffDefinition />}
          />
          <Route path="/adjustmentConfig" element={<AdjustmentConfig />} />
          <Route path="/applicationCodes" element={<ApplicationCodes />} />
          <Route path="/cashlettergroup" element={<CashLetterGroup/>}/>
          <Route path="/dupitemsconfig" element={<DupItemsConfig/>}/>
          <Route path="/eclprofiles" element={<ECLProfiles/>}/>
          <Route path="/endpoint" element={<Endpoint/>}/>
          <Route path="/endpointgroups" element={<EndpointGroups/>}/>
          <Route path="/virtualmaster" element={<VirtualMaster/>}/>
          <Route path="/worktypes" element={<WorkTypes/>}/>
          {/* Add routes for other components */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
