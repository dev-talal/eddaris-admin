import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Box } from "../../components/ui/Elements"
import { CardCounter, DropdownList, RequestLoader, SearchBarFilter } from "../../components/helpers/globalComponents"
import ListTable from "../../components/tables/ListTable"
import { studentColumns, StudentRows } from "../../components/helpers/tableVariables"
import { useDispatch, useSelector } from "react-redux"
import { getStudentsData } from "../../store/Slices/student/studentSlice"
import { useEffect } from "react"

const StudentsList = () => {
      const dispatch = useDispatch()
    const { loading, student_dashboard } = useSelector( state => state.student )
    useEffect(()=> {
        dispatch(getStudentsData({page:1, limit:10}))
    },[])

  return (
    <Box>
        {!loading && student_dashboard?
            <Row>
                <Col lg={6}>
                    <Box className='d-flex'>
                        <SearchBarFilter placeholder="search a student" />
                        <DropdownList style={{width:"140px",textAlign:"left"}} options={['All']} />
                    </Box>
                </Col>
                <Col lg={6}>
                    <Row style={{marginRight:"-0.5rem"}}>
                        {/* <Col lg={3} className='px-1'>
                            <CardCounter counter={964} label="New students" size="12px" color="themeColor" />
                        </Col> */}
                        <Col lg={3} className='px-1'>
                            <CardCounter counter={student_dashboard?.dashboard?.total_individual} label="Total individuals" size="12px" color="themeColor" />
                        </Col>
                        <Col lg={3} className='px-1'>
                            <CardCounter counter={student_dashboard?.dashboard?.total_parents} label="Total parents" size="12px" color="themeColor" />
                        </Col>
                        {/* <Col lg={3} className='px-1'>
                            <CardCounter counter={781} label="Total kids" size="12px" color="themeColorO" />
                        </Col> */}
                    </Row>
                </Col>
                <Col lg={12} className='mt-4'>
                    <ListTable type='student' columns={ studentColumns } rows={ student_dashboard.students } options={ ['view', 'delete'] } />
                </Col>
            </Row>
        :
            <RequestLoader />
        }
    </Box>
  )
}
export default StudentsList