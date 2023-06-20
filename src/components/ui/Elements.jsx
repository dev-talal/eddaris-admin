import styled from "styled-components"

export const Box = styled.div`
    
`
export const HeadingStyled = styled.div`
    font-size:${props=>props.size};
    font-weight:${props=>props.weight?props.weight:400};
    color:${props=>props.color?props.color:"#0A0D31"};
`

export const SpanStyled = styled.span`
    font-size:${props=>props.size};
    font-weight:${props=>props.weight?props.weight:400};
    color:${props=>props.color?props.color:"#0A0D31"};
`

export const TextStyled = styled.p`
    font-size:${props=>props.size};
    font-weight:${props=>props.weight?props.weight:400};
    color:${props=>props.color?props.color:"#0A0D31"};
`

export const InputStyled = styled.input`

    border: 1px solid #DDDDDD;
    border-radius: 10px;
    height: 45px;
    padding-left: 20px;
    padding-right: 20px;
    &,&::placeholder{
        color: var(--theme-grey-l);
        font-size: 12px;
        font-weight: 400;
    }
`

export const ListTileStyled = styled.div`
    background: 
    ${ ( props ) => props.bg || 'rgb(122 187 181 / 15%)' };
    border-radius: 20px;
    padding: 10px 20px;
    min-height: 60px;
    margin-bottom: 20px;
    max-width: 689px;
    svg {
        cursor: pointer;
        &.fill-danger {
            path {
                fill: var(--theme-danger);
            }
        }
    }
`