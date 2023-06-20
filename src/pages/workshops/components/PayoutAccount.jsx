import React from 'react'
import styled from 'styled-components'
import { Box } from '../../../components/ui/Elements'

const PayoutAccount = () => {

  return (

    <TileStyledList className='list-unstyled mb-0' >

        <TileStyled className='w-100'>

            <span>Holder name</span>

        </TileStyled>

        <TileStyled className='w-100'>

            <span>Bank country</span>

        </TileStyled>

        <TileStyled className='w-100'>

            <span>Bank city</span>

        </TileStyled>

        <TileStyled className='w-100'>

            <span>Bank name</span>

        </TileStyled>

        <TileStyled className='w-100'>

            <span>Bank address</span>

        </TileStyled>

        <TileStyled className='w-100'>

            <span>SWIFT code</span>

        </TileStyled>

        <TileStyled className='w-100'>

            <span>IBAN</span>

        </TileStyled>


    </TileStyledList>
  )

  
}

const TileStyledList = styled.ul`

    max-width: 603px;

`

const TileStyled = styled.li`
    
    padding: 14px 20px;
    border: 1px solid #E0E0E0;
    border-radius: 10px;
    font-weight: 500;
    font-size: 13px;
    color: var(--grey-color);
    margin-bottom: 10px;
    
`

export default PayoutAccount