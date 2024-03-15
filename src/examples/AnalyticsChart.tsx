import { QlikEmbed } from "@qlik/embed-react";
import "./examples.css";

const AnalyticsChart = (): JSX.Element => (
  <div className="container">
    <h1>Qlik Embed React - Single chart with selection bar</h1>
    <div className="selections-bar">
      <QlikEmbed ui="analytics/selections" appId={appId} />
    </div>
    <div className="viz">
      <QlikEmbed ui="analytics/chart" appId={appId} objectId={objectId} />
    </div>
  </div>
);

const appId = "d6152f1d-c366-4471-8aa6-7ae473e63f59";
const objectId = "SqDbku";

export default AnalyticsChart;
