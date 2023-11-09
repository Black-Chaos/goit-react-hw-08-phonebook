import {styled} from 'styled-components'

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 8px;
align-items: center;
`
export const StyledField = styled.input`
  background: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-family: 'Raleway', sans-serif;
  height: 48px;
  width: 99.5%;
  padding:0 20px;
  transition: var(--transition);
`;

export const ErrorField = styled.p`
font-size: 14px;
color: brown;
`

export const StyledButton = styled.button`
  background: #079bcf;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  height: 48px;
  width: 100%;
  transition: var(--transition);

  &:hover {
    background: #007ba5;
  }
`;