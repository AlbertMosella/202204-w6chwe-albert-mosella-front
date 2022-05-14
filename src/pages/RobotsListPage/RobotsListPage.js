import { useSelector } from "react-redux";
import RobotsList from "../../components/RobotsList/RobotsList";

const RobotsListPage = () => {
  const robots = useSelector((state) => state.robots);

  return <RobotsList robots={robots} />;
};

export default RobotsListPage;
