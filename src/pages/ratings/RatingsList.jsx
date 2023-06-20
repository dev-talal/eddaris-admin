import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Box, HeadingStyled, SpanStyled } from "../../components/ui/Elements"
import { ButtonStyled, DropdownList, SearchBarFilter } from "../../components/helpers/globalComponents"
import ListTable from "../../components/tables/ListTable"
import { ratingsColumns, ratingsRows } from "../../components/helpers/tableVariables"
import { Modal } from "react-bootstrap"
import styled from "styled-components"
import { Ratings } from "../../components/tables/tablesComponents"
import { XCircle } from "react-bootstrap-icons"
import { useState } from "react"

const RatingsList = () => {
  const [ modal, setModal ] = useState( false );
  const onView = () => {
    setModal(true);
  }
  return (
    <Box>
        <Row>
            <Col lg={6}>
                <Box className='d-flex'>
                    <SearchBarFilter placeholder="search a rating" />
                    <DropdownList style={{width:"140px",textAlign:"left"}} options={['All']} />
                </Box>
            </Col>
            <Col lg={12} className='mt-4'>
                <ListTable columns={ ratingsColumns } rows={ ratingsRows }  options={ ['view', 'delete'] } onView={ onView } />
            </Col>
        </Row>
        <Modal show={modal} centered size='lg' onHide={() => setModal(false)}>
            <Modal.Header className='border-0 justify-content-end pb-0'>
                <button className='border-0 bg-transparent' type='button' onClick={()=>setModal(false)}>
                    <XCircle size={33} color='#C8C8C8' />
                </button>
            </Modal.Header>
            <Modal.Body>
                <RatingModalContent>
                    <Box>
                        <HeadingStyled className='content-heading' color='var(--drColor)' size='24px' weight='700'>
                            Review given by “John Doe”
                        </HeadingStyled>
                        <SpanStyled color='var(--grey-color)' size='12px' weight='700'>
                            Ratings
                        </SpanStyled>
                        <Ratings size={33} value={4} count={5} color='#dddddd' activeColor="var(--themeColor)" />
                        <Box>
                            <SpanStyled color='var(--grey-color)' className='mb-1 mt-2 pt-1 d-block' size='12px' weight='700'>
                                Review
                            </SpanStyled>
                            <SpanStyled className='d-block' size='12px'>
                                Lorem ipsum dolor sit amet consectetur. Nascetur neque dolor ultrices in lectus ut feugiat vitae. Ultrices sed magna id sed sit sed cras arcu sed. Faucibus risus facilisi odio duis. Egestas sed tellus volutpat fermentum accumsan sit.
                            </SpanStyled>
                        </Box>
                        <Box className='text-center'>
                            <ButtonStyled className='border-0 text-white' onClick={()=>setModal(false)}>
                                Back
                            </ButtonStyled>
                        </Box>
                    </Box>
                </RatingModalContent>
            </Modal.Body>
        </Modal>
    </Box>
  )
}
const RatingModalContent = styled.div`
    max-width:345px;
    margin-left:auto;
    margin-right:auto;
    .content-heading{
        margin-bottom: 30px;
    }
    button{
        width: 199px;
        margin-top: 30px;
        margin-bottom: 40px;
    }
`
export default RatingsList