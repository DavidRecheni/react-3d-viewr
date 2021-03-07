import styled from "styled-components";

export const ToolsContainer = styled.div`
    position: fixed;
    right: 20;
    z-index: 1;

    ${props => props.left && 'left: 20px;'}
    ${props => props.right && 'right: 20px;'}
    ${props => props.top && 'top: 20px;'}
    ${props => props.bottom && 'bottom: 20px;'}

`
export const Container = styled.div`

    display: flex;

    ${props => props.alignCenter && 'align-items: center;'}

`
export const Input = styled.input`

    cursor: 'pointer';
    margin-left: 5px;
    margin-right: 5px;
`