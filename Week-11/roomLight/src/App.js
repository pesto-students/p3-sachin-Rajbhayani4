import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { lightSwitch } from "./redux/Action/action";
import Switch from "react-switch";

function App() {
  const dispatch = useDispatch();

  const room = useSelector(state => state.room);

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "20px", left: "20px" }}>
        <Switch onChange={() => dispatch(lightSwitch(!room))} checked={room} />
      </div>
      {room ? <img src="./Assets/Night.jpg" width="100%" /> : <img src="./Assets/Day.jpg" width="100%" />}
    </div>
  );
}

export default App;
