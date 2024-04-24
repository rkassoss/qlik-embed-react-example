import { QlikEmbed } from "@qlik/embed-react";
import "./examples.css";

const AnalyticsSheet = (): JSX.Element => (
  <div className="container">
    <h1>Qlik Embed React - ui="analytics/sheet"</h1>
    <div className="viz">
      <QlikEmbed ui="analytics/sheet" appId={appId} objectId={sheetId} />
      {/* <QlikEmbed ui="analytics/sheet" appId={appId} sheetId={sheetId} /> */}
    </div>
  </div>
);

const appId = "d6152f1d-c366-4471-8aa6-7ae473e63f59";
const sheetId = "XuWLHFK";

export default AnalyticsSheet;
