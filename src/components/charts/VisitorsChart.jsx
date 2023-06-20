import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box } from "../ui/Elements";
class VisitorsChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "series1",
          data: [400, 300, 600, 500, 800, 700,900,750],
        }
      ],
      options: {
        chart: {
          height: 150,
          width: "100%",
          sparkline: {
            enabled: true,
          },
          type: "area",
          toolbar: {
            show: false,
          },
        },
        
        subtitle: {
            text: '4,507,649',
            align: 'left',
            margin: 15,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
            fontSize:  '22px',
            fontWeight:  '700',
            fontFamily:  'Poppins',
            color:  '#7ABBB5'
            },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-12T00:00:00.000Z",
            "2018-09-13T01:30:00.000Z",
            "2018-09-14T02:30:00.000Z",
            "2018-09-15T03:30:00.000Z",
            "2018-09-16T04:30:00.000Z",
            "2018-09-17T05:30:00.000Z",
            "2018-09-18T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
          ],
          crosshairs: {
            show: false
          },
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
        grid: {
            show: false,
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: ['rgba(122, 187, 181, 0.35)','rgba(122, 187, 181, 0)'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 0.35,
              opacityTo: 1,
              stops: [0.35, 100],
            },
        },
        colors:[process.env.REACT_APP_THEME_COLOR],
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0,   
            colors:[process.env.REACT_APP_THEME_COLOR], 
        },
        markers: {
            colors: process.env.REACT_APP_THEME_COLOR,
            strokeColors: process.env.REACT_APP_THEME_COLOR,
        }
      },
    };
  }

  render() {
    return (
      <Box className="w-100">
       <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={250} />
      </Box>
    );
  }
}
export default VisitorsChart;
