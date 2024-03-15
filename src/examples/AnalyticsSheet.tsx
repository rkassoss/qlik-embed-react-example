import { QlikEmbed } from "@qlik/embed-react";
import "./examples.css";

const AnalyticsSheet = (): JSX.Element => (
  <div className="container">
    <h1>Qlik Embed React - Qlik Sense app with selection bar</h1>
    <div className="viz">
      <QlikEmbed ui="analytics/sheet" appId={appId} objectId={sheetId} />
    </div>
  </div>
);

const appId = "d6152f1d-c366-4471-8aa6-7ae473e63f59";
const sheetId = "b55bc235-1c02-4ea0-9333-862d278b897c";

export default AnalyticsSheet;
