import { QlikEmbedConfig, type HostConfig } from "@qlik/embed-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SidePanel from "./components/SidePanel";
import TopBar from "./components/TopBar";
import AnalyticsChart from "./examples/AnalyticsChart";
import ClassicApp from "./examples/ClassicApp";
import CustomCharts from "./examples/CustomCharts";

const hostConfig: HostConfig = {
  host: import.meta.env.VITE_TENANT_HOST,
  clientId: import.meta.env.VITE_TENANT_CLIENTID,
  redirectUri: import.meta.env.VITE_TENANT_REDIRECTURI,
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
            <Route path="/custom-charts" element={<CustomCharts />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </Router>
    </div>
  </QlikEmbedConfig.Provider>
);
