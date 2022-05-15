import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "./pages/LoadingPage/LoadingPage";

import RobotsListPage from "./pages/RobotsListPage/RobotsListPage";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

function App() {
  const dispatch = useDispatch();
  const { loaded } = useSelector(({ ui }) => ui);

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return <>{!loaded ? <LoadingPage /> : <RobotsListPage />};</>;
}

export default App;
