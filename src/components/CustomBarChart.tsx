import React, { useState, useEffect, type FC } from 'react';
import { QlikEmbed, type QlikEmbedRefApi } from "@qlik/embed-react";
import Card from '@mui/material/Card';
import "../examples/examples.css";
import { Box } from '@mui/material';

interface ChartProps {
  appId: string,
  objectId: string,
}

const CustomBarChart : FC<ChartProps> = ({ appId, objectId }): JSX.Element => {
  const [objTitle, setObjTitle] = useState(null);
  const [objSubTitle, setObjSubTitle] = useState(null);
  const [category, setCategory] = useState([]);
  const [metrics, setMetrics] = useState([]);

  // Create a state variable
  const [chartApi, setChartRefApi] = useState<QlikEmbedRefApi<"analytics/chart"> | null>(null);

  // The difference is very reactish, when using a state variable a react rerender is done when the setChartRefApi function is called so you can trigger things to happen immediately:
  useEffect(() => {
    void (async () => {
      if (chartApi) {
        const object = await chartApi.getObject();
        let layout = await object.getLayout();
        setObjTitle(layout.title);
        setObjSubTitle(layout.subtitle);
        let mapCategory = layout.qHyperCube.qDataPages[0].qMatrix.map((row: { qText: string }[]) => (
          row[0].qText
        ));
        setCategory(mapCategory);
        let mapData = layout.qHyperCube.qDataPages[0].qMatrix.map((row: { qText: string }[]) => (
          row[1].qText
        ));
        setMetrics(mapData);

        object.on("changed", async () => {
          layout = await object.getLayout();
          setObjTitle(layout.title);
          setObjSubTitle(layout.subtitle);
          console.count("chartapi useeffect");
          mapCategory = layout.qHyperCube.qDataPages[0].qMatrix.map((row: { qText: string }[]) => (
            row[0].qText
          ));
          setCategory(mapCategory);
          mapData = layout.qHyperCube.qDataPages[0].qMatrix.map((row: { qNum: number }[]) => (
            row[1].qNum
          ));
          setMetrics(mapData);
          console.log(mapCategory, mapData);
        });

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
          { category.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="col" key={index}>
              <p>{ item }</p>
            </div>
          )) }

          { metrics.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="col" key={index}>
              <p>{ item }</p>
            </div>
          )) }
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

export default CustomBarChart;
