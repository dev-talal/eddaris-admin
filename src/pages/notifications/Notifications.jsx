import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ArrowClockwise, X } from 'react-bootstrap-icons'
import styled from 'styled-components'
import { ButtonStyled, DropdownList, RequestLoader, SearchBarFilter } from '../../components/helpers/globalComponents'
import ListTable from '../../components/tables/ListTable'
import { Box, HeadingStyled, SpanStyled } from '../../components/ui/Elements'
import { notificationsColumns } from '../../components/helpers/tableVariables'
import { useDispatch, useSelector } from 'react-redux'
import { getNotificationsData } from '../../store/Slices/notify/NotifySlice'

const Notifications = () => {
  const dispatch = useDispatch()
  const { loading, notifications } = useSelector(state => state.notifications)
  useEffect(() => {
    dispatch(getNotificationsData())
  },[])
  return (
    <>
        {!loading && notifications?
            <Box>
                <Box className='max__container__form'>
                    <HeadingStyled weight="600" size="14px" color="var(--theme-grey-l)">
                        Send Notifications
                    </HeadingStyled>
                    <Box className='d-flex align-items-center mt-3'>
                        <SpanStyled size="12px">Send to</SpanStyled>
                        <DropdownList style={{width:"140px",textAlign:"left"}} options={['All']} />
                    </Box>
                    <Box className='d-flex align-items-center mb-3'>
                        <ul className='list-unstyled m-0 align-items-center d-flex flex-wrap mt-1'>
                            <li className='mt-2 me-2'>
                                <FilterTags>
                                    <span className='me-2'>Parents</span>
                                    <span type='button'><X size='22px' /></span>
                                </FilterTags>
                            </li>
                            <li className='mt-2 me-2'>
                                <FilterTags>
                                    <span className='me-2'>Tutors</span>
                                    <span type='button'><X size='22px' /></span>
                                </FilterTags>
                            </li>
                            <li className='mt-2'>
                                <span type='button'>
                                    <ArrowClockwise size='18px' color="var(--themeColorO)" />
                                </span>
                            </li>
                        </ul>
                    </Box>
                </Box>
                <Box className='max__container__form mt-4'>
                    <Box className='d-flex align-items-center mt-3'>
                        <SpanStyled size="12px">in the city</SpanStyled>
                        <DropdownList style={{width:"140px",textAlign:"left"}} options={['All']} />
                    </Box>
                    <Box className='d-flex align-items-center mb-3'>
                        <ul className='list-unstyled m-0 align-items-center d-flex flex-wrap mt-1'>
                            <li className='mt-2 me-2'>
                                <FilterTags>
                                    <span className='me-2'>Parents</span>
                                    <span type='button'><X size='22px' /></span>
                                </FilterTags>
                            </li>
                            <li className='mt-2 me-2'>
                                <FilterTags>
                                    <span className='me-2'>Tutors</span>
                                    <span type='button'><X size='22px' /></span>
                                </FilterTags>
                            </li>
                            <li className='mt-2'>
                                <span type='button'>
                                    <ArrowClockwise size='18px' color="var(--themeColorO)" />
                                </span>
                            </li>
                        </ul>
                    </Box>
                </Box>
                <Box className='max__container__form border-bottom-0 mt-4'>
                    <Box className='mt-3'>
                        <SpanStyled size="12px" className='d-block mb-2'>Or add email addresses</SpanStyled>
                        <TextArea className='w-100 mb-2' placeholder='Email addresses (separated by “,”)' />
                        <TextArea className='w-100' placeholder='Notification text' />
                    </Box>
                    <Box className='mt-3 text-end'>
                        <ButtonStyled className='border-0 text-white'>
                            Send notifications
                        </ButtonStyled>
                    </Box>
                </Box>
                <Box className='mt-5'>
                    <Row>
                        <Col lg={6}>
                            <Box className='d-flex'>
                                <SearchBarFilter placeholder="search a notification" />
                                <DropdownList style={{width:"140px",textAlign:"left"}} options={['All']} />
                            </Box>
                        </Col>
                        <Col lg={12} className='mt-4'>
                            <ListTable columns={ notificationsColumns } type={ 'notification' } rows={ notifications.slice(0,6) }  options={ ['view', 'delete'] } />
                        </Col>
                    </Row>
                </Box>
            </Box>
        : 
        <RequestLoader />
        }
    </>
  )
}

const FilterTags = styled.div`
    padding:10.5px 12px 10.5px 20px;
    background: rgba(239, 194, 130, 0.1);
    border-radius: 8px;
    font-size: 14px;
    font-weight:600;
    color:var(--themeColorO);
`
const TextArea = styled.textarea`
    border: 1px solid #DDDDDD;
    border-radius: 10px;
    padding:13px 15px;
    font-size:12px;
    color:var(--theme-grey-l);
    height:90px;
    resize:none;
`;

export default Notifications