import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box } from "../../components/ui/Elements";
import {
  RequestLoader,
} from "../../components/helpers/globalComponents";
import ListTable from "../../components/tables/ListTable";
import {
    topTutorColumns
} from "../../components/helpers/tableVariables";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTopTutorsData } from "../../store/Slices/tutor/tutorSlice";

const TopTutors = () => {
  const dispatch = useDispatch();
  const { loading, top_tutors } = useSelector(
    (state) => state.tutor
  );
  useEffect(() => {
    dispatch(getTopTutorsData({ page: 1, limit: 10 }));
  }, []);

  return (
    <Box>
      { !loading && top_tutors?
        <Row>
          <Col xs={12} className="mt-4">
            <ListTable
              columns={topTutorColumns}
              rows={top_tutors?.tutors}
              options={["view"]}
              type='tutor'
              idIndex='user_profile'
            />
          </Col>
        </Row>
      :
        <RequestLoader />
      } 
    </Box>
  );
};

export default TopTutors;
