import React from 'react'
import Form from 'react-bootstrap/Form'
import { TrashIcon } from '../../../../components/layouts/AllImages'
import { Box, HeadingStyled, ListTileStyled } from '../../../../components/ui/Elements'

const Actions = () => {

  return (
    <Box>
   
        <ListTileStyled bg='rgb(235 87 87 / 15%)' className='d-flex align-items-center justify-content-between'>
            <HeadingStyled size='13px' color='var(--theme-danger)' weight={700}>
                Delete account
            </HeadingStyled>
            <TrashIcon width={23} className='fill-danger' height={23} />
        </ListTileStyled>

        <ListTileStyled bg='rgb(239 194 130 / 15%)' className='d-flex align-items-center justify-content-between'>
            <HeadingStyled size='13px' color='var(--themeColorO)' weight={700}>
                De-activate account
            </HeadingStyled>
            <Box style={{marginTop:'-4px'}}>
                <Form.Check className='pt-0 bg-theme-warning tile-check' type='switch' />
            </Box>
        </ListTileStyled>
          
    </Box>
  )

}

export default Actions