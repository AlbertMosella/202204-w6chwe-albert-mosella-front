import styled from "styled-components";
import Button from "../Button/Button";

const RobotContainer = styled.div`
  text-align: center;
  color: white;
  width: 250px;
  height: 470px;
  margin: 15px;
  background-color: black;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 1px 5px 15px 3px rgba(0, 0, 0, 0.51);
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 250px;
    border-radius: 20px 20px 0px 0px;
  }
  h2 {
    font-size: 1.5em;
    margin: 10px 10px;
  }
  p {
    font-size: 1.25em;
    margin: 10px 10px;
  }
  .robot-name {
    background-color: grey;
  }
`;

const Robot = ({ robot }) => {
  return (
    <RobotContainer>
      <img src={robot.img} alt="" />
      <div className="robot-name">
        <h2>{robot.name}</h2>
      </div>
      <p>Date: {robot.date}</p>
      <p>Endurance: {robot.endurance}</p>
      <p>Speed: {robot.speed}</p>
      <Button text="DELETE" />
    </RobotContainer>
  );
};

export default Robot;
