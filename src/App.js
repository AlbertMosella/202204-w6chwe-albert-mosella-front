import { useEffect } from "react";
import { useDispatch } from "react-redux";

import RobotsListPage from "./pages/RobotsListPage/RobotsListPage";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return <RobotsListPage />;
}

export default App;
