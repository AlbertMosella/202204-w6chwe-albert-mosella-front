import axios from "axios";
import jwtDecode from "jwt-decode";
import { loadRobotsActionCreator } from "../features/robots/robotsSlice";
import {
  setLoadedOffActionCreator,
  setLoadedOnActionCreator,
} from "../features/ui/uiSlice";
import { logInActionCreator } from "../features/user/userSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  dispatch(setLoadedOffActionCreator());
  try {
    const response = await fetch(process.env.REACT_APP_API_URL);
    const robots = await response.json();
    dispatch(loadRobotsActionCreator(robots.robots));
    setTimeout(() => {
      dispatch(setLoadedOnActionCreator());
    }, 3000);
  } catch (error) {}
};

export const loginThunk = (userData) => async (dispatch) => {
  const url = process.env.REACT_APP_URL;
  const { data } = await axios.post(`${url}users/login`, userData);

  const userInfo = jwtDecode(data.token);

  localStorage.setItem("token", data.token);

  dispatch(logInActionCreator(userInfo));
};
