import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store/store";

describe("Given a App component", () => {
  describe("When it's called", () => {
    test("Then it should render the text 'Loading...'", () => {
      const expectedText = "LOADING...";

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const receivedElement = screen.getByText(expectedText);
      expect(receivedElement).toBeInTheDocument();
    });
  });
});
