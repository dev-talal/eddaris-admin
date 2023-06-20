import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Box } from "../../components/ui/Elements"
import { CardCounter, DropdownList, RequestLoader, SearchBarFilter } from "../../components/helpers/globalComponents"
import styled from "styled-components"
import ListTable from "../../components/tables/ListTable"
import { tutorColumns } from "../../components/helpers/tableVariables"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getTutorsData } from "../../store/Slices/tutor/tutorSlice"

const TutorList = () => {
    const dispatch = useDispatch()
    const { loading, tutor_dashboard } = useSelector( state => state.tutor )
    useEffect(()=> {
        dispatch(getTutorsData({ page: 1, limit:10 }))
    },[])

  return (
    <Box>
        {!loading && tutor_dashboard?
            <Row>
                <Col lg={6}>
                    <Box className='d-flex'>
                        <SearchBarFilter placeholder="Search a tutor" />
                        <DropdownList style={{width:"140px",textAlign:"left"}} options={['All']} />
                    </Box>
                    <Box className='d-flex mt-3 flex-wrap align-items-center'>
                        <FilterTags type='button' className='active'>All tutors</FilterTags>
                        <FilterTags type='button'>Pending tutors</FilterTags>
                        <FilterTags type='button'>Rejected tutors</FilterTags>
                        <FilterTags type='button'>Blocked tutors</FilterTags>
                    </Box>
                </Col>
                <Col lg={6}>
                    <Row style={{marginRight:"-0.5rem"}}>
                        <Col lg={3} className='px-1'>
                            <CardCounter counter={tutor_dashboard?.dashboard?.active_tutors} label="Active tutors" size="12px" color="themeColor" />
                        </Col>
                        <Col lg={3} className='px-1'>
                            <CardCounter counter={tutor_dashboard?.dashboard?.in_active_tutors} label="Inactive tutors" size="12px" color="themeColorO" />
                        </Col>
                        <Col lg={3} className='px-1'>
                            <CardCounter counter={tutor_dashboard?.dashboard?.pending_tutors} label="Pending" size="12px" color="themeColor" />
                        </Col>
                        <Col lg={3} className='px-1'>
                            <CardCounter counter={tutor_dashboard?.dashboard?.rejected_tutors} label="Rejected" size="12px" color="themeColorO" />
                        </Col>
                    </Row>
                </Col>
                <Col lg={12} className='mt-4'>
                    <ListTable columns={ tutorColumns } rows={ tutor_dashboard.tutors } idIndex='user_profile' type='tutor' options={ ['view', 'edit', 'delete'] } />
                </Col>
            </Row>
        :
            <RequestLoader /> 
        }
    </Box>
  )
}
const FilterTags = styled.div`
    background: #fff;
    border: 1px solid rgba(200, 200, 200, 0.3);
    border-radius: 20px; 
    padding:8px 12px;
    min-width:90px;
    font-size:13px;
    text-align:center;
    margin-right:5px;
    transition: 0.3s ease-in-out all;
    &.active{
        font-weight:600;
        color:var(--themeColor);
    }
    &:hover, &.active{
        color:#fff;
        background:var(--themeColor);
    }
`
export default TutorList