import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/LoginForm/LoginForm";
import LoadingPage from "./pages/LoadingPage/LoadingPage";

import RobotsListPage from "./pages/RobotsListPage/RobotsListPage";

import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

function App() {
  const dispatch = useDispatch();
  const { loaded } = useSelector(({ ui }) => ui);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  /* useEffect(() => {
    const token = localStorage.getItem("token");
    const userInfo = jwtDecode(token);

    if (token) {
      dispatch(logInActionCreator(userInfo));
    }
  }, [dispatch]); */

  /* const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logOutActionCreator());
  }; */

  return (
    <>
      <p>Hola {user?.name}</p>
      <LoginForm />
      {!loaded ? <LoadingPage /> : <RobotsListPage />};
    </>
  );
}

export default App;
