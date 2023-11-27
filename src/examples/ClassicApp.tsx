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

const appId = "d6152f1d-c366-4471-8aa6-7ae473e63f59";
const sheetId = "e3c5da86-bc30-4fd0-92e0-7ffeeb25450f";

export default ClassicApp;
