import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Box, HeadingStyled, SpanStyled } from '../ui/Elements';
import Dropdown from 'react-bootstrap/Dropdown'
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { Logo, SearchIcon } from '../layouts/AllImages';
export const LazyImage = (props) => {
    return(
        <LazyLoadImage
            {...props}
            effect="blur"
  
        />
    )
}

export const DropdownList = ({options,classes,style}) => {
    return(
    
        <Dropdown className={`d-inline mx-2 ${classes} customized__dropdown`}>
            <Dropdown.Toggle bsPrefix='none bg-white border-0' style={style}>
                {options[0]}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {options && options.map((item,key)=>{
                    return(
                        <Dropdown.Item href="#" key={key}>{item}</Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
        
    )
}

export const SearchBarFilter = ({placeholder}) => {
    return(
        <SearchFilterContainerStyle className='overflow-hidden d-flex'>
            <Box className='d-flex position-relative flex-1'>
                <Form as='input' className='border-0 h-100' placeholder={placeholder} type='text' name='search' />
                <span className='position-absolute field__icon'>
                    <SearchIcon />
                </span>
            </Box>
        </SearchFilterContainerStyle>
    )
}

export const CardCounter = ({counter,label,color,style,className}) => {
    return(
        <CardCounterStyled className={`text-center ${style && ('d-flex flex-column align-items-center justify-content-center')} ${className}`} style={style}>
            <HeadingStyled size={style?'32px':'24px'} weight='700' color={`var(--${color})`}>{counter}</HeadingStyled>
            <SpanStyled size="12px" className='d-block mt-1 pt-1' weight="700" color='var(--grey-color)'>{label}</SpanStyled>
        </CardCounterStyled>
    )
}
export const RequestLoader = () => (
    <Box>
        <Loader className='d-flex align-items-center flex-column justify-content-center'>
        <Box className='d-flex align-items-center animation-container'>
            <img src={ Logo } className='me-4' width='100' />
            <HeadingStyled size='34px' className='animate-text' color='var(--themeColor)' weight={700}>
                Eddaris
            </HeadingStyled>
        </Box>
        </Loader>
    </Box>
)
const SearchFilterContainerStyle = styled.div`
    background: #fff;
    border: 1px solid #dddddd;
    border-radius: 10px;
    height: 45px;
    padding-left:14px;
    padding-right:20px;
    flex:1;
    input{
        font-size:12px;
        color:#bdbdbd;
        flex:1;
        padding-left:30px;
        &::placeholder{
            color:#bdbdbd;
        }
    }
    .field__icon{
        top:11px;
    }
`;
const CardCounterStyled = styled.div`
    box-shadow: 0px 10px 89px rgba(0, 0, 0, 0.04), 0px 6.48148px 52.1227px rgba(0, 0, 0, 0.0303704), 0px 3.85185px 28.3481px rgba(0, 0, 0, 0.0242963), 0px 2px 14.4625px rgba(0, 0, 0, 0.02), 0px 0.814815px 7.25185px rgba(0, 0, 0, 0.0157037), 0px 0.185185px 3.50231px rgba(0, 0, 0, 0.00962963);
    border-radius: 20px;
    padding:19px 12px;
`;

export const ButtonStyled = styled.button`
    background: var(--themeColor);
    border-radius: 10px;
    padding:11px 24px;
    font-weight: 600;
    font-size: 14px;
    transition:0.3s opacity ease-in-out;
    &:hover{
        opacity:0.8;
    }
`;

export const Loader = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left:0;
  background: #fff;
  z-index: 99;
  .spinner-border {
    color: var( --drColor);
  }
  .animation-container {
    width: 260.22px;
  }
  .animate-text {
    animation: animateText 1s linear infinite;
    overflow: hidden;
    
  }
`