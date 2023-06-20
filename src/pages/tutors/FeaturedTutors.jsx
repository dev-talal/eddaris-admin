import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box } from "../../components/ui/Elements";
import {
    DropdownList,
  RequestLoader,
  SearchBarFilter,
} from "../../components/helpers/globalComponents";
import ListTable from "../../components/tables/ListTable";
import {
    featuredTutorColumns
} from "../../components/helpers/tableVariables";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFeaturedTutorsData } from "../../store/Slices/tutor/tutorSlice";

const FeaturedTutors = () => {
  const dispatch = useDispatch();

  const { featured_tutors, loading } = useSelector((state) => state.tutor);

  useEffect(() => {

    dispatch(getFeaturedTutorsData({ page: 1, limit: 10 }));

  }, []);

  return (
    <Box>
      { !loading && featured_tutors?.tutors?
        <Row>
            <Col lg={6}>
                <Box className="d-flex">
                    <SearchBarFilter placeholder="search a workshop" />
                    <DropdownList
                        style={{ width: "140px", textAlign: "left" }}
                        options={["All"]}
                    />
                </Box>
            </Col>
          <Col xs={12} className="mt-4">
            <ListTable
              columns={ featuredTutorColumns }
              rows={ featured_tutors?.tutors }
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

export default FeaturedTutors;
