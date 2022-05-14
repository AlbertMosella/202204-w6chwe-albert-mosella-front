import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);
}

export default App;
