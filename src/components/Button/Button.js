import styled from "styled-components";

const ButtonContainer = styled.div`
  display: inline-block;
  padding-top: 15px;

  button {
    text-decoration: none;
    font-size: 1.25em;
    color: black;
    padding: 10px 25px;
    border: 3px solid black;
    position: relative;
    margin: auto;
  }

  button::before,
  button::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border: inherit;
    transition: all 0.5s;
  }

  button::before {
    top: -15px;
    left: -15px;
    border-width: 3px 0 0 3px;
  }

  button::after {
    bottom: -15px;
    right: -15px;
    border-width: 0 3px 3px 0;
  }

  button:hover::before,
  button:hover::after {
    width: calc(100% + 27px);
    height: calc(100% + 27px);
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

/* background-color: #f69b4b;
    color: black;
    font-size: 1.5em;
    border-radius: 10px;
    border: none;
    padding: 3px 10px;
    cursor: pointer; */
