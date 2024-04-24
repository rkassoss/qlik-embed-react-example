import { QlikEmbed } from "@qlik/embed-react";
import "./examples.css";

const ClassicApp = (): JSX.Element => (
  <div className="container">
    <h1>Qlik Embed React - ui="classic/app"</h1>
    <div className="viz">
      <QlikEmbed ui="classic/app" app={appId} sheet={sheetId} />
    </div>
  </div>
);

const appId = "d6152f1d-c366-4471-8aa6-7ae473e63f59";
const sheetId = "XuWLHFK";

export default ClassicApp;
