import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Stapes } from "../Redux/Action/Action";
import '../App.css'

export const AddStapes = () => {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const stapes = useSelector(state => state.stapes);
    console.log(" stapes", stapes)
    return (
        <div className="App">
            <h2>You've walked {stapes} steps today!</h2>
            <button className="addStapes-Btn stape-Btn" onClick={() => dispatch(Stapes(stapes + 1))}>Add Step</button>
            <button className="ResetStapes-Btn stape-Btn" onClick={() => dispatch(Stapes(0))}>Reset Steps</button>
        </div>
    )
}
