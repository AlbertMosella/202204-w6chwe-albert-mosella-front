import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockRobot } from "../../mocks/robots";
import store from "../../redux/store/store";
import Robot from "./Robot";

describe("Given a Robot Component", () => {
  describe("When it's called with a Robot prop", () => {
    test("Then it should render the text 'Bender'", () => {
      const expectedText = "Bender";

      render(
        <Provider store={store}>
          <Robot robot={mockRobot} />
        </Provider>
      );

      const receivedResult = screen.getByText(expectedText).textContent;
      expect(receivedResult).toBe(expectedText);
    });
  });
});
