import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  DropdownList,
  SearchBarFilter,
} from "../../../components/helpers/globalComponents";
import { Box } from "../../../components/ui/Elements";
import {
  reservationColumns,
  reservationRows,
} from "../../../components/helpers/tableVariables";
import ListTable from "../../../components/tables/ListTable";

const ReservationList = ({ workshop }) => {
  return (
    <Box>
      <Row>
        <Col lg={6}>
          <Box className="d-flex">
            <SearchBarFilter placeholder="Search a booking" />

            <DropdownList
              style={{ width: "140px", textAlign: "left" }}
              options={["All"]}
            />
          </Box>
        </Col>

        <Col xs={12} className="mt-4">
          <ListTable
            columns={reservationColumns}
            rows={reservationRows}
            options={["delete"]}
            type="workshop"
          />
        </Col>
      </Row>
    </Box>
  );
};

export default ReservationList;
