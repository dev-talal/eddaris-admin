import ReactApexChart from "react-apexcharts";
import React from "react";
class DonutChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [200, 200,400],
      options: {
        chart: {
          type: "donut",
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
              expandOnClick: false,
              donut: {
                labels: {
                    show: true,
                    total: {
                        show: true,
                        label: '',
                        formatter: () => "24%"
                    },
                    value:{
                      offsetY: -8,
                      color:'#0A0D31'
                    }
                }
              }
            }
        },
        colors: ['#DBDEFF','#CDF0ED','#F8D6D6'],
      },
    };
  }
  render() {
    return (
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
        />
    );
  }
}
export default DonutChart