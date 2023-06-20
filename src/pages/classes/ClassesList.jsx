import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box } from "../../components/ui/Elements";
import {
  CardCounter,
  DropdownList,
  RequestLoader,
  SearchBarFilter,
} from "../../components/helpers/globalComponents";
import ListTable from "../../components/tables/ListTable";
import {
  classesColumns,
  classesRows,
} from "../../components/helpers/tableVariables";
import { useDispatch, useSelector } from "react-redux";
import { deleteClass, getClassesData } from "../../store/Slices/class/classSlice";
import { useEffect } from "react";

const ClassesList = () => {
  const dispatch = useDispatch();
  const { loading, class_dashboard } = useSelector((state) => state.class);
  useEffect(() => {
    dispatch(getClassesData({ page: 1, limit: 10 }));
  }, []);

  return (
    <Box>
    {!loading && class_dashboard?
      <Row>
        <Col lg={6}>
          <Box className="d-flex">
            <SearchBarFilter placeholder="search a class" />
            <DropdownList
              style={{ width: "140px", textAlign: "left" }}
              options={["All"]}
            />
          </Box>
        </Col>
        <Col lg={6}>
          <Row style={{ marginRight: "-0.5rem" }}>
            {/* <Col lg={3} className='px-1'>
                <CardCounter counter={964} label="Daily bookings" size="12px" color="themeColor" />
            </Col> */}
            <Col lg={3} className="px-1">
              <CardCounter
                counter={class_dashboard?.dashboard?.total_classes}
                label="Total bookings"
                size="12px"
                color="themeColor"
              />
            </Col>
            <Col lg={3} className="px-1">
              <CardCounter
                counter={class_dashboard?.dashboard?.completed_classes}
                label="In-progress"
                size="12px"
                color="themeColor"
              />
            </Col>
            <Col lg={3} className="px-1">
              <CardCounter
                counter={class_dashboard?.dashboard?.pending_classes}
                label="Cancelled"
                size="12px"
                color="themeColorO"
              />
            </Col>
          </Row>
        </Col>
        <Col lg={12} className="mt-4">
          <ListTable
            columns={classesColumns}
            rows={class_dashboard?.classes}
            options={["view", "delete"]}
            type="class"
            deleteApi={deleteClass}
          />
        </Col>
      </Row>
    :
      <RequestLoader />
    }
    </Box>
  );
};
export default ClassesList;
