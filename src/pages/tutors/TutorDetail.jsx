import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box } from "../../components/ui/Elements";
import TutorProfileInfo from "./components/TutorProfileInfo";
import { CardCounter, RequestLoader } from "../../components/helpers/globalComponents";
import { TabsList } from "../workshops/WorkshopDetail";
import { TabContainer } from "react-bootstrap";
import { tutorDetailsTabsList } from "../../components/helpers/variables";
import { useDispatch, useSelector } from "react-redux";
import { getTutorDetailsData, getTutorTransactionsData } from "../../store/Slices/tutor/tutorSlice";
import { useParams } from "react-router";

const TutorDetail = () => {
  const [activeTab, setActiveTab] = useState(tutorDetailsTabsList[0]);
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, tutor } = useSelector((state) => state.tutor);
  useEffect(() => {
    dispatch(getTutorDetailsData({ id: params.id })).then(() => {
      dispatch(getTutorTransactionsData({page: 1, limit:10 , id: params.id}))
    })
  }, []);
  return (
    <>
      { !loading && tutor?
      <Row>
        <Col lg={3}>
          <TutorProfileInfo />
        </Col>
        <Col lg={9}>
          <Row style={{ marginRight: "-0.5rem" }}>
            <Col lg={3} className="px-2 mb-4">
              <CardCounter
                counter={tutor?.dashboard?.classes_gave}
                label="Classes gave"
                size="12px"
                style={{ height: "168px" }}
                color="themeColor"
              />
            </Col>
            <Col lg={3} className="px-2  mb-4">
              <CardCounter
                counter={tutor?.dashboard?.booked_classes}
                label="Booked classes"
                size="12px"
                style={{ height: "168px" }}
                color="themeColorO"
              />
            </Col>
            <Col lg={3} className="px-2  mb-4">
              <CardCounter
                counter={781}
                label="Booked classes"
                size="12px"
                style={{ height: "168px" }}
                color="themeColor"
              />
            </Col>
            <Col lg={3} className="px-2  mb-4">
              <CardCounter
                counter={781}
                label="Visitors"
                size="12px"
                style={{ height: "168px" }}
                color="themeColorO"
              />
            </Col>
          </Row>
          <Box>
            <TabsList className="list-unstyled mb-0 d-flex align-items-center mb-3 justify-content-between">
              {tutorDetailsTabsList.map((item, key) => {
                return (
                  <li
                    className={`
                      ${tutorDetailsTabsList.length == key + 1 && " me-0 "} 
                      ${
                        item.name.toLowerCase() == activeTab.name.toLowerCase() &&
                        "active"
                      }`}
                    key={key}
                    onClick={() => setActiveTab(item)}
                  >
                    {item.name}
                  </li>
                );
              })}
            </TabsList>

            <TabContainer>
              <activeTab.component />
            </TabContainer>
            
          </Box>
        </Col>
      </Row>
      : <RequestLoader />
      }
    </>
  );
};

export default TutorDetail;
