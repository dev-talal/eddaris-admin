import React, { useEffect, useCallback } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DropdownList } from "../../../../components/helpers/globalComponents";
import {
  tutorClassesColumns,
} from "../../../../components/helpers/tableVariables";
import ListTable from "../../../../components/tables/ListTable";
import { Box, HeadingStyled } from "../../../../components/ui/Elements";
import { getTutorClassesData } from "../../../../store/Slices/tutor/tutorSlice";

const Classes = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { classes } = useSelector((state) => state.tutor);
  const { data, loading } = classes;
  const fetchData = useCallback(() => {
    dispatch(getTutorClassesData({ page: 1, limit: 10, id: params.id }));
  }, [dispatch, params.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData, params.id]);

  return (
    !loading && data?.classes?
    <Box>
     { data?.classes?.length > 0 ?
      <Box>
        <Box className="d-flex align-items-center justify-content-between">
          <HeadingStyled size="24px" weight="700">
            Classes
          </HeadingStyled>
          <Box style={{ width: "154px" }}>
            <DropdownList options={["All"]} classes="filter__line" />
          </Box>
        </Box>
        <TableWrapStyled>
          <ListTable
            columns={tutorClassesColumns}
            rows={data?.classes}
            options={[]}
          />
        </TableWrapStyled>
      </Box>
      :
      <HeadingStyled className='text-center' size='20px' weight='700' style={{ marginTop: '40px' }}>
        No Class found
      </HeadingStyled>
      }
    </Box>
    :
    <Box className='text-center mt-4'>
      <Spinner />
    </Box>
  );
};

const TableWrapStyled = styled.div`
  background: rgb(200, 200, 200, 0.05);
  border-radius: 20px;
  padding: 20px;
  margin-top: 20px;
`;

export default Classes;
