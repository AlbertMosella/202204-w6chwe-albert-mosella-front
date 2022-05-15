import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's instantiated with a text 'delete", () => {
    test("Then it should render a button with the text 'delete' inside", () => {
      const expectedResult = "delete";

      render(<Button text={expectedResult} />);
      const receivedElement = screen.getByRole("button");

      expect(receivedElement.innerHTML).toBe(expectedResult);
    });
  });
});
