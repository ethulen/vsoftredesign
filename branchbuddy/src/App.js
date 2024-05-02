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
import ECLInbox from "./Administrator/Configuration/ECLInbox.js";
import EDeskConfiguration from "./Administrator/Configuration/EDeskConfiguration.js";
import ImagePaths from "./Administrator/Configuration/ImagePaths.js";
import Printers from "./Administrator/Configuration/Printers.js";
import Site from "./Administrator/Configuration/Site.js";
import SystemParameters from "./Administrator/Configuration/SystemParameters.js";
import Institutions from "./Administrator/Security/Institutions.js";
import ResetUserSettings from "./Administrator/Security/ResetUserSettings.js";
import RestrictAcctRole from "./Administrator/Security/RestrictAcctRole.js";
import RestrictAcctUser from "./Administrator/Security/RestrictAcctUser.js";
import RolePrivilege from "./Administrator/Security/RolePrivilege.js";
import Roles from "./Administrator/Security/Roles.js";
import Users from "./Administrator/Security/Users.js";
import SortPattern from "./Administrator/Sort Pattern/SortPattern.js";
import SortPatternKeys from "./Administrator/Sort Pattern/SortPatternKeys.js";
import SortPatternPockets from "./Administrator/Sort Pattern/SortPatternPockets.js";
import SortPatternSelectors from "./Administrator/Sort Pattern/SortPatternSelectors.js";
import SortPatternTables from "./Administrator/Sort Pattern/SortPatternTables.js";
import MICRConversion from "./Administrator/Sort Pattern/MICRConversion.js";

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
          <Route path="/cashlettergroup" element={<CashLetterGroup />} />
          <Route path="/dupitemsconfig" element={<DupItemsConfig />} />
          <Route path="/eclprofiles" element={<ECLProfiles />} />
          <Route path="/endpoint" element={<Endpoint />} />
          <Route path="/endpointgroups" element={<EndpointGroups />} />
          <Route path="/virtualmaster" element={<VirtualMaster />} />
          <Route path="/worktypes" element={<WorkTypes />} />
          <Route path="/eclinbox" element={<ECLInbox />} />
          <Route path="/edeskconfig" element={<EDeskConfiguration />} />
          <Route path="/imagepaths" element={<ImagePaths />} />
          <Route path="/printers" element={<Printers />} />
          <Route path="/site" element={<Site />} />
          <Route path="/systemparams" element={<SystemParameters />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/resetusersettings" element={<ResetUserSettings />} />
          <Route path="/restrictrole" element={<RestrictAcctRole />} />
          <Route path="/restrictUser" element={<RestrictAcctUser />} />
          <Route path="/roleprivilege" element={<RolePrivilege />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/users" element={<Users />} />
          <Route path="/sortpattern" element={<SortPattern />} />
          <Route path="/sortpatternkeys" element={<SortPatternKeys />} />
          <Route path="/sortpatternpockets" element={<SortPatternPockets />} />
          <Route path="/sortpatternselectors" element={<SortPatternSelectors />} />
          <Route path="/sortpatterntables" element={<SortPatternTables />} />
          <Route path="/micrconversion" element={<MICRConversion />} />
          {/* Add routes for other components */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
