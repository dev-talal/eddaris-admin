import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import { ButtonStyled, DropdownList, SearchBarFilter } from '../../components/helpers/globalComponents';
import { subAdminColumns, subAdminRows } from '../../components/helpers/tableVariables';
import { sub_admin_fields } from '../../components/helpers/variables';
import ListTable from '../../components/tables/ListTable';
import { SpanStyled, Box, InputStyled } from '../../components/ui/Elements';

export const SubAdmins = () => {

  const  [ expandSubCategory,setExpandCategory ] = useState(false);

  return (

    <>

        <Box className='max__container__form border-0'>

            <Box className='d-flex align-items-center'>

                <button type='button' className='bg-transparent border-0 px-0 mb-1' onClick={ () => setExpandCategory( !expandSubCategory ) }>

                    {expandSubCategory?

                        <ChevronUp className='me-2' size="14px" />

                    :

                        <ChevronDown className='me-2' size="14px" />

                    }

                    <SpanStyled size='12px' weight='700' color='var(--theme-grey-l)'>Add sub-admin</SpanStyled>

                </button>

            </Box>

            {expandSubCategory && sub_admin_fields.map( ( { name, label }, x ) => {

                const type = name == 'password' || name == 'email' ? name : 'text'

                return(

                    <Box style={{ marginBottom: '10px' }} key={ x }>

                        <InputStyled type={ type } className='w-100' placeholder={ label } name={ name } />

                    </Box>

                )

            })}

            {expandSubCategory?   

                <Box className='text-end mb-5 mt-4'>

                    <ButtonStyled className='border-0 text-white'>

                        Save sub-admin

                    </ButtonStyled>

                </Box>

            :null }

        </Box>

        <Box>

            <Row>
                <Col lg={6}>

                    <Box className='d-flex'>

                        <SearchBarFilter placeholder="search a rating" />

                        <DropdownList style={{ width: "140px", textAlign: "left" }} options={ ['All']} />

                    </Box>
                    
                </Col>

                <Col lg={12} className='mt-4'>

                    <ListTable columns={ subAdminColumns } rows={ subAdminRows }  options={ ['delete'] } />

                </Col>

            </Row>

        </Box>

    </>    

  )

}

export default SubAdmins