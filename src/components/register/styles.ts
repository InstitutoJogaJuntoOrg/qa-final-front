import { styled } from "styled-components";

export const FormContainer = styled.form`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
   width: 100%;
  gap: 12px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.black};
    font-weight: 600;
  }
  p {
    display: flex;
    width: 100%;
    color: #0008;
    margin-top: .2rem;
    background-color: white;
    font-size: 1rem;
    font-weight: 200;
  }
  @media screen and (max-width: 1000px) {
    padding-top: 1rem;
    margin: 1rem;
    padding-bottom: 2rem;
    h1 {
        font-size: 1.5rem;
    }
  }
  label {
    font-size: 14px;
    font-style: normal;
    margin-left: 1rem;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 132.3%;
  }
  
`;
export const ErrorContainer = styled.div`
width: 100%;
display: flex;
align-items: flex-start;
justify-content: start;
  span {
    margin-top: -.5rem;
    margin-left: 1rem;
    padding: 1rem 0rem;
    background-color: white;
    font-size: 1rem;
    font-weight: 400;
  }
  .error {
    color: #d32f2f;
  }
  .sucess {
    color: #058c42;
  }
`
export const ContainerRegisterInputs = styled.div`
width: 24rem;
display: flex;
flex-direction: column;
gap: 1rem;
input {
  width: 100%;
}
@media screen and (max-width: 1000px) {
    width: 100%;
    gap: 1rem;
  }
   
`

export const Button = styled.button`
  border: none;
  width: 10rem;
  border-radius: 87px;
  padding: 14px 59px;
  font-size: 14px;
  font-weight: 400;
  line-height: 132.3%;
  cursor: pointer;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
`;


