import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box } from "../ui/Elements";
class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        chart: {
          sparkline: {
            enabled: true,
          },
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "50px",
            distributed: true,
            borderRadius: 10,
            colors: {
              backgroundBarColors: ["#fff"],
              backgroundBarOpacity: 1,
              backgroundBarRadius: 10,
            },
          },
        },
        colors: ["#F8E1CC", "#FEEFC1", "#CDF0ED", "#F8D6D6", "#DBDEFF"],
        grid: {
          show: false,
        },
      },
      series: [
        {
          name: "Tutors",
          data: [48, 40, 60, 50, 80],
        },
      ],
    };
  }

  render() {
    return (
      <Box className="w-100 mt-4">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="100%"
        />
      </Box>
    );
  }
}
export default BarChart;
