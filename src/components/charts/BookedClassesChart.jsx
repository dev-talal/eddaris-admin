import React from "react";
import { DropdownList } from "../helpers/globalComponents";
import { ChartTabs } from "../helpers/styledElements";
import { Box, HeadingStyled } from "../ui/Elements";
import ReactApexChart from "react-apexcharts";
class BookedClassesChart extends React.Component {
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
          background: ["rgba(200, 200, 200, 0.05)"],
          sparkline: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: [
            "Jan 2022",
            "Feb 2022",
            "Mar 2022",
            "Apr 2022",
            "May 2022",
            "Jun 2022",
          ],
          lines: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "rgba(10, 13, 49, 0.1)",
            height: 2,
            width: "100%",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
          },
          lines: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "rgba(239, 194, 130, 0.15)",
            height: 1,
            width: "100%",
            offsetX: 0,
            offsetY: 0,
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
            columnWidth: "70px",
            distributed: true,
            borderRadius: 30,
            borderRadiusApplication: "last",
            colors: {
              backgroundBarColors: ["transparent"],
              backgroundBarOpacity: 1,
              backgroundBarRadius: 30,
            },
          },
        },
        colors: ["rgba(10, 13, 49, 0.5)"],
        grid: {
          borderColor: "rgba(200, 200, 200, 0.15)",
          show: true,
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
      },
      series: [
        {
          name: "Tutors",
          data: [48, 40, 60, 50, 80, 100],
        },
      ],
    };
  }
  render() {
    return (
      <>
        <Box className="w-100">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width="100%"
            height="380px"
          />
        </Box>
      </>
    );
  }
}
export default BookedClassesChart;
