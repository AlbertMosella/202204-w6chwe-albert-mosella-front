import { loadRobotsActionCreator } from "../features/robots/robotsSlice";
import {
  setLoadedOffActionCreator,
  setLoadedOnActionCreator,
} from "../features/ui/uiSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  dispatch(setLoadedOffActionCreator());
  try {
    const response = await fetch(process.env.REACT_APP_API_URL);
    const robots = await response.json();
    dispatch(loadRobotsActionCreator(robots.robots));
    setTimeout(() => {
      dispatch(setLoadedOnActionCreator());
    }, 3000);
  } catch (error) {
    console.log(error);
  }
};
