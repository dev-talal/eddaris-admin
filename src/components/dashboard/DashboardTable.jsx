import moment from 'moment/moment'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LazyImage } from '../helpers/globalComponents'
import { userImage } from '../layouts/AllImages'
import { Box, SpanStyled } from '../ui/Elements'

const DashboardTable = ({ rows }) => {

  return (
    <Box>
       <TableStyled className='w-100'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Tutor name</th>
                    <th>Venue</th>
                    <th>Class date</th>
                </tr>
            </thead>
            <tbody>
                {rows && rows.slice(0,5).map((item,key)=>{
                    return(
                        <tr key={key}>
                            <td>
                                <Box className='d-flex align-items-center'>
                                    <LazyImage src={userImage} width="30px" height="30px" className="rounded-circle" />
                                    <SpanStyled weight="700" size="12px" className='ms-2'>{item.name}</SpanStyled>
                                </Box>
                            </td>
                            <td>
                                Mathematics
                            </td>
                            <td>{ item.tutor_id?.first_name } { item.tutor_id?.last_name }</td>
                            <td>{ item.class_location }</td>
                            <td>{ moment(item.class_date).format('MMM DD, YYYY') }</td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan='12'>
                        <Link to="/classes" className='text-decoration-none text-theme-primary'>
                            <SpanStyled weight='700' size='12px' color='var(--themeColor)'>See all classes</SpanStyled>
                        </Link>
                    </td>
                </tr>
            </tfoot>
       </TableStyled>
    </Box>
  )

}

export const TableStyled = styled.table`
    th{
        padding-top:6px;
        padding-bottom:6px;
    }
    td{
        color:var(--drColor);
        font-size: 12px;
        padding-top:6px;
        padding-bottom:6px;
    }
    th{
        border-bottom: 1px solid rgb(10, 13, 49, 0.15);
        color:var(--grey-color);
        font-size:12px;
    }
    tfoot{
        td{
            border-top: 1px solid rgb(10, 13, 49, 0.15);
        }
    }
`

export default DashboardTable