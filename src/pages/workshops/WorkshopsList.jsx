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
  workshopsColumns
} from "../../components/helpers/tableVariables";
import { useDispatch, useSelector } from "react-redux";
import { getWorkShopsData } from "../../store/Slices/workshop/workshopSlice";
import { useEffect } from "react";

const WorkshopsList = () => {
  const dispatch = useDispatch();
  const { loading, workshop_dashboard } = useSelector(
    (state) => state.workshop
  );
  useEffect(() => {
    dispatch(getWorkShopsData({ page: 1, limit: 10 }));
  }, []);

  return (
    <Box>
      { !loading && workshop_dashboard?
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
              columns={workshopsColumns}
              rows={workshop_dashboard?.workshops}
              options={["view", "delete"]}
              type="workshop"
            />
          </Col>
        </Row>
      :
        <RequestLoader />
      } 
    </Box>
  );
};

export default WorkshopsList;
