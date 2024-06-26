import React, { useState, useEffect, type FC } from 'react';
import { QlikEmbed, type QlikEmbedRefApi } from "@qlik/embed-react";
import Card from '@mui/material/Card';
import "../examples/examples.css";
import { Box } from '@mui/material';

interface KPIProps {
  appId: string,
  objectId: string,
}

const CustomKPI : FC<KPIProps> = ({ appId, objectId }): JSX.Element => {
  const [objTitle, setObjTitle] = useState(null);
  const [objSubTitle, setObjSubTitle] = useState(null);
  const [mainKpi, setMainKpi] = useState(null);
  const [secKpi, setSecKpi] = useState(null);

  // Create a state variable
  const [chartApi, setChartRefApi] = useState<QlikEmbedRefApi<"analytics/chart"> | null>(null);

  // The difference is very reactish, when using a state variable a react rerender is done when the setChartRefApi function is called so you can trigger things to happen immediately:
  useEffect(() => {
    void (async () => {
      if (chartApi) {
        console.log("chartApi", chartApi);
        const doc = await chartApi.getDoc();
        console.log("doc", doc);
        const object = await chartApi.getObject();
        let layout = await object.getLayout();
        // console.log("layout", layout);
        setObjTitle(layout.title);
        setObjSubTitle(layout.subtitle);
        setMainKpi(layout.qHyperCube.qGrandTotalRow[0].qText);
        setSecKpi(layout.qHyperCube.qGrandTotalRow[1].qText);
        
        const handleChanged = async () => {
          layout = await object.getLayout();
          setObjTitle(layout.title);
          setObjSubTitle(layout.subtitle);
          setMainKpi(layout.qHyperCube.qGrandTotalRow[0].qText);
          setSecKpi(layout.qHyperCube.qGrandTotalRow[1].qText);
          console.log("kpi");
        }
        object.on("changed", handleChanged);
      }
    })();
  }, [chartApi]);

  return (
    <>
      <Card variant="outlined">
        <Box
          sx={{
            p: 1,
            borderRadius: 2,
          }}
        >
        { objTitle && <h1>{ objTitle }</h1> }
        { objSubTitle && <p>{ objSubTitle }</p> }
        <div className="row">
          { mainKpi && <h2>{ mainKpi }</h2> }
          { secKpi && <h3>{ secKpi }</h3> }
        </div>
        </Box>
      </Card>
      <div className="hidden-viz">
        {/* Send in the "update state" function  as ref */}
        <QlikEmbed ui="analytics/chart" appId={appId} objectId={objectId} ref={setChartRefApi} />
      </div>
    </>
  );
};

export default CustomKPI;
