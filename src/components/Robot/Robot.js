import styled from "styled-components";

const RobotContainer = styled.div`
  color: red;
  width: 300px;
  height: 560px;
  margin: 10px;
  background-color: #cad4d8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: 1px 5px 15px 3px rgba(0, 0, 0, 0.51);
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.51);
  }
`;

const Robot = ({ robot }) => {
  return (
    <RobotContainer>
      <img src={robot.img} alt="" />
      <p>Name: {robot.name}</p>
      <p>Date: {robot.date}</p>
      <p>Endurance: {robot.endurance}</p>
      <p>Speed: {robot.speed}</p>
    </RobotContainer>
  );
};

export default Robot;
