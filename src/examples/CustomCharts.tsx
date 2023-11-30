import { QlikEmbed } from '@qlik/embed-react';
import CustomKPI from '../components/CustomKPI';
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

    <div className="viz">
      <QlikEmbed ui="analytics/chart" appId={appId} objectId="3688b116-7f39-440a-872a-644f324e17ea" />
    </div>
  </div>
);

const appId = "d6152f1d-c366-4471-8aa6-7ae473e63f59";

export default CustomCharts;
