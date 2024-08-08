import { incrementByAmount } from "../model/counterSlice";
import { RootState } from "#src/shared/reduxTypes/reduxTypes";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const counter = useSelector((state: RootState) => state.counterSlice.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(incrementByAmount(counter))}>
        click
      </button>
      <div>{counter}</div>
    </div>
  );
};
