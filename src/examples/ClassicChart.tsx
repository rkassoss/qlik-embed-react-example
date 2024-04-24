import { QlikEmbed } from "@qlik/embed-react";
import "./examples.css";

const ClassicChart = (): JSX.Element => (
  <div className="container">
    <h1>Qlik Embed React - ui="classic/chart" - not working in embed-react</h1>
    <div className="viz">
      <QlikEmbed ui="classic/chart" appId={appId} objectId={objectId} />
    </div>
  </div>
);

const appId = "d6152f1d-c366-4471-8aa6-7ae473e63f59";
const objectId = "SqDbku";

export default ClassicChart;
