import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: center;

`

export const ColorDiv = styled.div`

`
export const Text = styled.p`
color: ${({color})=>color}
`
export const Button=styled.button`
border-radius:5px;
border:1px solid black;
padding:5px 10px;
`
export const Content= styled.div`
color: ${({color})=>color}
`