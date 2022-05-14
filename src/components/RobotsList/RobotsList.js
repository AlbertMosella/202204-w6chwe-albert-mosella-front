import Robot from "../Robot/Robot";

const RobotsList = ({ robots }) => {
  return (
    <ul>
      {robots.map((robot) => (
        <li key={robot.name}>
          <Robot robot={robot} />
        </li>
      ))}
    </ul>
  );
};

export default RobotsList;
