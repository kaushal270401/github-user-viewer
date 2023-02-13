import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Chart from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ColumnChart = ({ data }) => {
  const chartConfigs = {
    type: "column3d", // The chart type
    width: "500", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most popular",
        yAxisName:'stars',
        xAxisName:"Repos",
        xAxisNameFontSize:'16px',
        yAxisNameFontSize:'16px'

      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ColumnChart;
