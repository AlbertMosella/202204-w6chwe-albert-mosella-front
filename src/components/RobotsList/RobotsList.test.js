import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockRobot } from "../../mocks/robots";
import store from "../../redux/store/store";
import RobotsList from "../RobotsList/RobotsList";

describe("Given a RobotsList Component", () => {
  describe("When it's called with a Robot", () => {
    test("Then it should render a li element'", () => {
      const expectedResult = 1;

      render(
        <Provider store={store}>
          <RobotsList robots={[mockRobot]} />
        </Provider>
      );

      const receivedResult = screen.getAllByRole("list");
      expect(receivedResult).toHaveLength(expectedResult);
    });
  });
});
