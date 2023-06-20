import React from 'react'
import styled from 'styled-components'
import { ArrowIcon } from '../layouts/AllImages'
import { Box } from '../ui/Elements'
import { ActionButtons } from './tablesComponents'

const ListTable = ({ columns, rows, type, onView, options, idIndex, deleteApi }) => {

  return (
    <Box>
       <TableStyled className='w-100'>
            <thead>
                <tr>
                    <th style={{width:"40px"}}>#</th>

                    {columns.map((list,key)=>(
                        <th key={key}>{list.label}</th>
                    ))}

                    { options && options.length > 0 && (
                        <th style={{width:"150px"}}>Action</th>
                    )}
                    
                </tr>
            </thead>
            <tbody>
         
                {rows.map((list, key) => (

                    <tr key={key}>

                        <td className='pe-2'>{key+1}</td>

                        {columns.map(({ name, render }, key) => (
                            <td key={key}>
                                { render? render(list[name], list) : list[name] }
                            </td>  
                        ))}

                        { options && options.length > 0 && (
                            <td>
                                { <ActionButtons onView={ onView} deleteApi={deleteApi} type={ type } options={ options } index={ idIndex? list[idIndex]['_id'] :  list._id }  /> }
                            </td>
                        )}

                    </tr>

                ))}
                
            </tbody>
        </TableStyled>
        <TablePagination className='table-pagination align-items-center list-unstyled d-flex'>
            <li>
                1 - 15 of 35
            </li>
            <li className='ms-auto align-items-center me-3'>
                Rows per page
            </li>
            <li className='me-5'>
                <select className='border-0 bg-transparent'>
                    <option>
                        50
                    </option>
                    <option>
                        100
                    </option>
                    <option>
                        500
                    </option>
                </select>
            </li>
            <li className='me-4 pag_btn'>
                <button type='text' className='bg-transparent border-0'>
                    <ArrowIcon />
                </button>
            </li>
            <li className='rotate-angle pag_btn'>
                <button type='text' className='bg-transparent border-0'>
                    <ArrowIcon />
                </button>
            </li>
       </TablePagination>
    </Box>
  )

}

const TableStyled = styled.table`
    th{
        padding-top:8px;
        padding-bottom:8px;
    }
    td{
        color:var(--drColor);
        font-size: 12px;
        padding-top:8px;
        padding-bottom:8px;
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
const TablePagination = styled.ul`
    padding:18px 0px;
    border-top: 1px solid rgb(10, 13, 49, 0.15);
    margin-top:18px;
    li{
        font-size:12px;
        color:#0D0D0D;
    }
    select{
        box-shadow: 0px 0px 65px rgba(0, 0, 0, 0.05), 0px 0px 38.0671px rgba(0, 0, 0, 0.037963), 0px 0px 20.7037px rgba(0, 0, 0, 0.0303704), 0px 0px 10.5625px rgba(0, 0, 0, 0.025), 0px 0px 5.2963px rgba(0, 0, 0, 0.0196296), 0px 0px 2.55787px rgba(0, 0, 0, 0.012037);
        border-radius: 7px;
        width:58px;
        height:30px;
        padding-left:10px;
        padding-right:10px;
    }
    .rotate-angle{
        transform:rotate(180deg);
    }
    .pag_btn{
        button{
            box-shadow: 0px 0px 65px rgba(0, 0, 0, 0.05), 0px 0px 38.0671px rgba(0, 0, 0, 0.037963), 0px 0px 20.7037px rgba(0, 0, 0, 0.0303704), 0px 0px 10.5625px rgba(0, 0, 0, 0.025), 0px 0px 5.2963px rgba(0, 0, 0, 0.0196296), 0px 0px 2.55787px rgba(0, 0, 0, 0.012037);
            border-radius: 7px;
            width:30px;
            height:30px;
            &:hover{
                background-color:var(--themeColor) !important;
                svg path{
                    fill:#fff;
                }
            }
        }
    }
`

export default ListTable