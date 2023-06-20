import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ChartBox } from "../components/helpers/styledElements";
import BarChart from "../components/charts/BarChart";
import GroupedBarChart from "../components/charts/GroupedBarChart";
import LineAreaChart from "../components/charts/LineAreaChart";
import { Box, HeadingStyled, SpanStyled } from "../components/ui/Elements";
import DonutChart from "../components/charts/DonutChart";
import SalesChart, { SalesTabs } from "../components/charts/SalesChart";
import BookedClassesChart from "../components/charts/BookedClassesChart";
import NotificationsCard from "../components/dashboard/NotificationsCard";
import DashboardTable from "../components/dashboard/DashboardTable";
import VisitorsChart from "../components/charts/VisitorsChart";
import { DropdownList, RequestLoader } from "../components/helpers/globalComponents";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardData } from "../store/Slices/dashboard/dashboardSlice";
import WorkshopTable from "../components/dashboard/WorkshopTable";
const Dashboard = () => {
  const dispatch = useDispatch()
  const { loading, data } = useSelector( state => state.dashboard )
  useEffect(()=> {
    dispatch(getDashboardData())
  },[])

  return (
    <Box style={{ maxWidth: "970px" }}>
      {!loading && data?
        <Row>
          <Col lg={9}>
            <Row>
              <Col lg={4}>
                <ChartBox className="border h-100">
                  <HeadingStyled weight="600" size="13px" color="var(--grey-color)">
                    Total Tutors
                  </HeadingStyled>
                  <DonutChart />
                </ChartBox>
              </Col>
              <Col lg={4}>
                <ChartBox className="border h-100">
                  <HeadingStyled weight="600" size="13px" color="var(--grey-color)">
                    Total Tutors
                  </HeadingStyled>
                  <BarChart />
                </ChartBox>
              </Col>
              <Col lg={4}>
                <ChartBox className="border h-100">
                  <HeadingStyled weight="600" size="13px" color="var(--grey-color)">
                    Total bookings
                  </HeadingStyled>
                  <GroupedBarChart />
                </ChartBox>
              </Col>
            </Row>
          </Col>
          <Col lg={3}>
            <ChartBox className="border pb-0 px-0 area__chart">
              <HeadingStyled
                className="px__chart_heading"
                weight="600"
                size="13px"
                color="var(--grey-color)"
              >
                Total earnings
              </HeadingStyled>
              <LineAreaChart />
            </ChartBox>
          </Col>
          <Col xs={9} className="tabs__margin__up">
            <SalesTabs heading="Sales" />
          </Col>
          <Col xs={12} className="mt-4 pb-3">
            <SalesChart />
          </Col>
          <Col lg={8}>
            <SalesTabs heading="Booked classes" />
            <Box className="mt-4">
              <BookedClassesChart />
            </Box>
          </Col>
          <Col lg={4}>
            <NotificationsCard />
          </Col>
          <Col xs={7} className="mt-2">
            <HeadingStyled
              weight="700"
              size="18px"
              className="mb-4 pb-2"
              color="var(--drColor)"
            >
              Recent booked classes
            </HeadingStyled>
            <DashboardTable rows={data?.recentBookedClasses} />
          </Col>
          <Col xs={5} className="mt-2">
            <HeadingStyled
              weight="700"
              size="18px"
              className="mb-2 pb-2"
              color="var(--drColor)"
            >
              Visitors
            </HeadingStyled>
            <ChartBox className="px-0 pb-0 area__chart">
              <VisitorsChart />
            </ChartBox>
          </Col>
          <Col xs={7} className="mt-4">
            <HeadingStyled
              weight="700"
              size="18px"
              className="mb-4 pb-2"
              color="var(--drColor)"
            >
              Featured workshops
            </HeadingStyled>
            <WorkshopTable rows={data?.recentWorkshops} />
          </Col>
          <Col xs={5} className="mt-4">
            <Box className="mb-3 d-flex align-items-center">
              <DropdownList options={["Tutors"]} classes="filter__line" />
              <SpanStyled weight="700" size="24px" className="mx-2">
                in
              </SpanStyled>
              <DropdownList options={["Riyadh"]} classes="filter__line" />
            </Box>
            <ChartBox className="px-0 pb-0 area__chart">
              <VisitorsChart />
            </ChartBox>
          </Col>
        </Row>
        : <RequestLoader />
      }
    </Box>
  );
};

export default Dashboard;
