import styled from "styled-components";

export const ChartBox = styled.div`
  background: #fff;
  box-shadow: 0px 10px 89px rgba(0, 0, 0, 0.04),
  0px 6.48148px 52.1227px rgba(0, 0, 0, 0.0303704),
  0px 3.85185px 28.3481px rgba(0, 0, 0, 0.0242963),
  0px 2px 14.4625px rgba(0, 0, 0, 0.02),
  0px 0.814815px 7.25185px rgba(0, 0, 0, 0.0157037),
  0px 0.185185px 3.50231px rgba(0, 0, 0, 0.00962963);
  border-radius: 20px;
  padding: 15px;
  .apexcharts-tooltip-title{
    border-radius: none !important;
    background:${process.env.REACT_APP_THEME_COLOR} !important;
    color:#fff !important;
    font-family: 'Poppins', sans-serif !important;
    font-size:12px !important;
  }
  .apexcharts-tooltip-series-group{
    font-family: 'Poppins', sans-serif !important;
    font-size:12px !important;
  }
  &.area__chart {
    svg {
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
    .px__chart_heading{
      padding-left:15px;
      padding-right:15px;
    }
  }
`;
export const ChartTabs = styled.div`
  box-shadow: 0px 0px 65px rgba(0, 0, 0, 0.05), 0px 0px 38.0671px rgba(0, 0, 0, 0.037963), 0px 0px 20.7037px rgba(0, 0, 0, 0.0303704), 0px 0px 10.5625px rgba(0, 0, 0, 0.025), 0px 0px 5.2963px rgba(0, 0, 0, 0.0196296), 0px 0px 2.55787px rgba(0, 0, 0, 0.012037);
  border-radius: 10px;
  height: 45px;
  overflow:hidden;
  li{
    padding:16px;
    font-size:12px;
    color: #828282;
    &.active{
      background:var(--themeColor);
      color:#fff;
    }
  }
`