import { useSelector } from "react-redux";
import RobotsList from "../../components/RobotsList/RobotsList";
import styled from "styled-components";

const RobotListContainer = styled.div`
  justify-content: center;
  text-align: center;
  padding-top: 20px;
  color: black;

  h1 {
    font-size: 2.5em;
  }
  span {
    font-size: 1.5em;
  }
`;

const RobotsListPage = () => {
  const robots = useSelector((state) => state.robots);

  return (
    <>
      <RobotListContainer>
        <span>~Virgulilla Productions Presents~</span>
        <h1>Amazing Robots</h1>
        <RobotsList robots={robots} />
      </RobotListContainer>
    </>
  );
};

export default RobotsListPage;
