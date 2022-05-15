import { loadRobotsThunk } from "./robotsThunks";

describe("Given a loadRobotsThunk function", () => {
  describe("When it's invoked", () => {
    test("Then it sholud call dispatch", async () => {
      const thunk = loadRobotsThunk();
      const dispatch = jest.fn();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
