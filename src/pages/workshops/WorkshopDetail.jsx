import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Box } from "../../components/ui/Elements";
import GeneralInformation from "./components/GeneralInformation";
import PayoutAccount from "./components/PayoutAccount";
import ReservationList from "./components/ReservationList";

const WorkshopDetail = () => {
  const { loading, workshop_dashboard } = useSelector(
    (state) => state.workshop
  );

  let workshop = workshop_dashboard.workshops[0];
  console.log(workshop);
  const [activeTab, setActiveTab] = useState("general");

  return (
    <>
      <MainContainer>
        <TabsList className="list-unstyled mb-0 d-flex align-items-center mb-3">
          <li
            className={activeTab == "general" && "active"}
            onClick={() => setActiveTab("general")}
          >
            General information
          </li>

          <li
            className={activeTab == "payout" && "active"}
            onClick={() => setActiveTab("payout")}
          >
            Payout account
          </li>

          <li
            className={activeTab == "reservation" && "active"}
            onClick={() => setActiveTab("reservation")}
          >
            Reservations
          </li>
        </TabsList>
      </MainContainer>

      <TabContainer>
        {activeTab == "general" ? (
          <GeneralInformation workshop={workshop} />
        ) : null}

        {activeTab == "payout" ? <PayoutAccount /> : null}

        {activeTab == "reservation" ? (
          <ReservationList workshop={workshop} />
        ) : null}
      </TabContainer>
    </>
  );
};

const MainContainer = styled.div`
  max-width: 872px;
`;

export const TabsList = styled.ul`
  border-top: 1px solid rgb(200 200 200 / 50%);
  border-bottom: 1px solid rgb(200 200 200 / 50%);

  li {
    margin-right: 24px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 13px;
    cursor: pointer;
    position: relative;
    &:not(.active) {
      color: #c8c8c8;
    }
    &.active {
      color: var(--themeColor);
      font-weight: 700;
    }
    &:hover {
      color: var(--themeColor);
    }
    &.active::before {
      content: "";
      width: 100%;
      height: 0;
      position: absolute;
      bottom: -2.5px;
      left: 0;
      border: 2px solid var(--themeColor);
      border-radius: 10px;
    }
  }
`;

export const TabContainer = styled.div``;

export default WorkshopDetail;
