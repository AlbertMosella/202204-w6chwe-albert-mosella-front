import { loadRobotsActionCreator } from "../features/robots/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  try {
    const response = await fetch(process.env.REACT_APP_API_URL);
    const robots = await response.json();
    dispatch(loadRobotsActionCreator(robots.robots));
  } catch (error) {}
};
