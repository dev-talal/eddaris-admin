import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Box, HeadingStyled, SpanStyled } from '../../components/ui/Elements'
import { userAvatarImage } from '../../components/layouts/AllImages'
import styled from 'styled-components'
import { CardCounter, LazyImage } from '../../components/helpers/globalComponents'
import { TabsList } from '../workshops/WorkshopDetail'
import { StudentTabList } from '../../components/helpers/variables'
import { TabContainer } from 'react-bootstrap'

const StudentDetail = () => {
  const [activeTab, setActiveTab] = useState(StudentTabList[0]);
  return (
   <Box>
        <StudentDashStyled  className='d-flex'>
            <Box className='me-4'>
                <LazyImage width='220px' src={ userAvatarImage } />
            </Box>
            <Box className='flex-1'>
                <Box className='d-flex profile-line align-self-start'>
                    <HeadingStyled color='var(--drColor)' size='24px' style={{ lineHeight: '24px' }} className='me-2' weight={700}>Ali Bashir</HeadingStyled>
                    <SpanStyled className='mt-auto' color='var(--lg-color)' size='12px'>Riyadh, Saudi Arabia.</SpanStyled>
                </Box>
                <Row>
                    <Box className='mt-4 column-5'>
                        <CardCounter counter={10} label="Total classes" className='h-100' size="12px" color="themeColor" />
                    </Box>
                    <Box className='mt-4 column-5'>
                        <CardCounter counter={10} label="Classes attended online" className='h-100' size="12px" color="themeColor" />
                    </Box>
                    <Box className='mt-4 column-5'>
                        <CardCounter counter={10} label="Missed classes online" className='h-100' size="12px" color="themeColor" />
                    </Box>
                    <Box className='mt-4 column-5'>
                        <CardCounter counter={10} label="Tutor home classes" className='h-100' size="12px" color="themeColorO" />
                    </Box>
                    <Box className='mt-4 column-5'>
                        <CardCounter counter={10} label="Student home classes" className='h-100' size="12px" color="themeColorO" />
                    </Box>
                </Row>
            </Box>
        </StudentDashStyled>
        <Col lg={9}>
            <TabsList className="mt-5 list-unstyled mb-0 d-flex align-items-center mb-3 justify-content-start">
                {StudentTabList.map((item, key) => {
                    return (
                    <li
                        className={`
                        ${StudentTabList.length == key + 1 ? "me-0": "me-5"} 
                        ${
                            item.name.toLowerCase() == activeTab.name.toLowerCase() &&
                            "active"
                        }`}
                        key={key}
                        onClick={() => setActiveTab(item)}
                    >
                        {item.name}
                    </li>
                    );
                })}
            </TabsList>
            <TabContainer>
              <activeTab.component />
            </TabContainer>
        </Col>
   </Box>
  )
}

const StudentDashStyled = styled.div`
 .profile-line {
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(10, 13, 49, 0.15);
 }

 .column-5 {
    width: 20%;
    padding-left: 10px;
    padding-right: 10px;
 }
 
    
`

export default StudentDetail