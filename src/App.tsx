import { QlikEmbedConfig, type HostConfig } from "@qlik/embed-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SidePanel from "./components/SidePanel";
import TopBar from "./components/TopBar";
import AnalyticsChart from "./examples/AnalyticsChart";
import ClassicApp from "./examples/ClassicApp";

const hostConfig: HostConfig = {
  host: process.env.REACT_APP_TENANT_HOST,
  clientId: process.env.REACT_APP_TENANT_CLIENTID || "",
  redirectUri: process.env.REACT_APP_TENANT_REDIRECTURI,
  accessTokenStorage: "session",
  authType: "oauth2",
  autoRedirect:true
};

export default () => (
  <QlikEmbedConfig.Provider value={hostConfig}>
    <TopBar />
    <div className="main-app">
      <Router>
        <SidePanel />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classic-app" element={<ClassicApp />} />
            <Route path="/analytics-chart" element={<AnalyticsChart />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </Router>
    </div>
  </QlikEmbedConfig.Provider>
);
