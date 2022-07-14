import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: center;

`

export const ColorDiv = styled.div`

`
export const Text = styled.button`
color: ${({color})=>color}
`