import { QlikEmbed } from '@qlik/embed-react';
import CustomKPI from '../components/CustomKPI';
import CustomBarChart from '../components/CustomBarChart';
import "./examples.css";

const CustomCharts = () => (
  <div className="container">

    <h1>Qlik Embed React - use QlikEmbedRefApi to render the chart yourself</h1>
    <div className="selections-bar">
      <QlikEmbed ui="analytics/selections" appId={appId} />
    </div>

    <div className="row">
      <CustomKPI appId={appId} objectId="mTjVeM" />
      <CustomKPI appId={appId} objectId="NXfLpP" />
      <CustomKPI appId={appId} objectId="jhTmTRy" />
    </div>

    <div className="row">
      <div className="viz" style={{ height: "500px" }}>
        <QlikEmbed ui="analytics/chart" appId={appId} objectId="678b46e5-efd2-406d-9493-bf0a7e99de4f" />
      </div>
    </div>

    <div className="row">
      <div className="viz" style={{ height: "500px" }}>
        <CustomBarChart appId={appId} objectId="SqDbku" />
      </div>
    </div>

    <div className="row">
      <div className="viz" style={{ height: "500px" }}>
        <QlikEmbed ui="analytics/chart" appId={appId} objectId="RdPNMDa" />
      </div>
    </div>
  </div>
);

const appId = "d6152f1d-c366-4471-8aa6-7ae473e63f59";

export default CustomCharts;
