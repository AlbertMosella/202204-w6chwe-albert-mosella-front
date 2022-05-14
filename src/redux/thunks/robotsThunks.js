import axios from "axios";

import { loadRobotsActionCreator } from "../robots/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  try {
    const { robots } = await axios.get(process.env.REACT_APP_API_URL);
    dispatch(loadRobotsActionCreator(robots));
  } catch {
    console.log("Cagada la hemos");
  }
};
