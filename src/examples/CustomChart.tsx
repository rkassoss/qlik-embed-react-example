import React, { useState, useEffect } from 'react';
import { QlikEmbed, type QlikEmbedRefApi } from "@qlik/embed-react";
import "./examples.css";

export const CustomCharts = () => {
  const [objTitle, setObjTitle] = useState(null);
  const [objSubTitle, setObjSubTitle] = useState(null);
  const [mainKpi, setMainKpi] = useState(null);

  // Create a state variable
  const [chartApi, setChartRefApi] = useState<QlikEmbedRefApi<"analytics/chart"> | null>(null);

  // The difference is very reactish, when using a state variable a react rerender is done when the setChartRefApi function is called so you can trigger things to happen immediately:
  useEffect(() => {
    void (async () => {
      if (chartApi) {
        const doc = await chartApi.getDoc();
        console.log("doc", doc);

        
        const list = await doc.getSheetList();
        console.log("list", list);
        const objectTest = await doc.getObject("mTjVeM");
        console.log("objectTest", objectTest);
        const chartRefApi = await chartApi.getChartRefApi();
        console.log("chartRefApi", chartRefApi);


        const object = await chartApi.getObject();
        let layout = await object.getLayout();
        setObjTitle(layout.title);
        setObjSubTitle(layout.subtitle);
        setMainKpi(layout.qHyperCube.qGrandTotalRow[0].qText);
        object.on("changed", async () => {
          layout = await object.getLayout();
          setObjTitle(layout.title);
          setObjSubTitle(layout.subtitle);
          setMainKpi(layout.qHyperCube.qGrandTotalRow[0].qText);
        });
      }
    })();
  }, [chartApi]);

  return (
    <div className="container">
      <h1>Qlik Embed React - use QlikEmbedRefApi to render the chart yourself</h1>
      <div className="selections-bar">
        <QlikEmbed ui="analytics/selections" appId={appId} />
      </div>
        { objTitle && <h1>{ objTitle }</h1> }
        { objSubTitle && <p>{ objSubTitle }</p> }
        { mainKpi && <h2>{ mainKpi }</h2> }
      <div className="hidden-viz">
        {/* Send in the "update state" function  as ref */}
        <QlikEmbed ui="analytics/chart" appId={appId} objectId={objectId} ref={setChartRefApi} />
      </div>
    </div>
  );
};

const appId = "d6152f1d-c366-4471-8aa6-7ae473e63f59";
const objectId = "mTjVeM";

export default CustomCharts;
