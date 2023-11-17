import { QlikEmbed } from "@qlik/embed-react";
import "./examples.css";

const ClassicApp = (): JSX.Element => (
  <div className="container">
    <h1>Qlik Embed React - Qlik Sense app with selection bar</h1>
    <div className="selections-bar">
      <QlikEmbed ui="analytics/selections" appId={appId} />
    </div>
    <div className="viz">
      <QlikEmbed ui="classic/app" app={appId} sheet={sheetId} />
    </div>
  </div>
);

const appId = "<app-id>";
const sheetId = "<sheet-id>";

export default ClassicApp;
