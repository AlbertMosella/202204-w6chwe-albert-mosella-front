import { useSelector } from "react-redux";
import RobotsList from "../../components/RobotsList/RobotsList";
import styled from "styled-components";

const RobotListContainer = styled.div`
  justify-content: center;
  text-align: center;
  h1 {
    font-size: 2em;
    color: black;
  }
`;

const RobotsListPage = () => {
  const robots = useSelector((state) => state.robots);

  return (
    <>
      <RobotListContainer>
        <h1>Amazing Robots</h1>
        <RobotsList robots={robots} />
      </RobotListContainer>
    </>
  );
};

export default RobotsListPage;
