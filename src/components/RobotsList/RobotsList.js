import Robot from "../Robot/Robot";
import styled from "styled-components";

const RobotListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  li {
    list-style: none;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
  }
`;

const RobotsList = ({ robots }) => {
  return (
    <RobotListContainer>
      <ul>
        {robots.map((robot) => (
          <li key={robot.name}>
            <Robot robot={robot} />
          </li>
        ))}
      </ul>
    </RobotListContainer>
  );
};

export default RobotsList;
