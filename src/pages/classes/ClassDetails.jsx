import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { RequestLoader } from "../../components/helpers/globalComponents";
import { Box, SpanStyled } from "../../components/ui/Elements";
import { getClassDetailsData } from "../../store/Slices/class/classSlice";

export const ListContent = ({ h, t, primary }) => {
  return (
    <li>
      <SpanStyled color="var(--grey-color)">{h}</SpanStyled>
      <SpanStyled color={`${primary ? "var(--themeColor)" : "var(--drColor)"}`}>
        {t}
      </SpanStyled>
    </li>
  );
};

const ClassDetails = () => {
  const { loading, singleClass } = useSelector((state) => state.class);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClassDetailsData({ id: params.id }));
  }, []);
  return !loading ? (
    <Box>
      <DetailList className="list-unstyled">
        <ListContent
          h="Tutors Name"
          t={
            singleClass?.tutor_id?.first_name +
            " " +
            singleClass?.tutor_id?.last_name
          }
        />

        <ListContent
          h="Students Name"
          t={
            singleClass?.user_id?.first_name +
            " " +
            singleClass?.user_id?.last_name
          }
        />

        <ListContent h="Class Name " t={singleClass?.name} />

        <ListContent h="Venue" t={singleClass?.class_location} />

        <ListContent
          h="Start Date"
          t={moment(singleClass?.class_date).format("DD, MMM YYYY")}
        />

        <ListContent h="End Date" t="--" />

        <ListContent h="Price" t={`$${singleClass?.total_price || 0} `} />

        <ListContent h="Payment Status" primary t="Paid" />
        <ListContent
          h="Class status"
          primary={singleClass?.completed}
          t={singleClass?.completed ? "Completed" : "Uncomplete"}
        />
      </DetailList>
    </Box>
  ) : (
    <RequestLoader />
  );
};

export const DetailList = styled.ul`
  max-width: fit-content;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    span {
      &:first-child {
        width: 162px;
        display: block;
        margin-right: 50px;
        font-weight: 600;
        font-size: 14px;
      }

      &:last-child {
        font-size: 13px;
      }
    }
  }
`;

export default ClassDetails;
