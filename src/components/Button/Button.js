import styled from "styled-components";

const ButtonContainer = styled.div`
  display: inline-block;
  padding-top: 15px;

  button {
    background-color: red;
    color: black;
    font-size: 30px;
    border-radius: 10px;
    border: none;
    padding: 3px 10px;
    cursor: pointer;
  }
`;

const Button = ({ text, action }) => {
  return (
    <>
      <ButtonContainer>
        <button onClick={action}>{text}</button>
      </ButtonContainer>
    </>
  );
};

export default Button;
