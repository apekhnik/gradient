import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {
  getColorList,
  editColor,
  getDisableBtn,
  isValid,
  disableBtnToogler,
} from "../../features/appSlice";
import { createGradient } from "../new/NewGradient";
import "./style.sass";
const EditGradient = (props) => {
  const disableChek = useSelector(getDisableBtn);
  const id = props.match.params.id;
  const history = useHistory();
  const gradient = useSelector(getColorList).filter((item) =>
    item.id != id ? false : true
  )[0];

  const [first, setFirstColor] = useState(gradient.first);
  const [second, setSecondColor] = useState(gradient.second);

  const dispatch = useDispatch();

  const addEdited = (e) => {
    e.preventDefault();
    dispatch(editColor({ first, second, id }));
    history.push("/");
  };
  const isDisabled = (v) => {
    isValid(v)
      ? dispatch(disableBtnToogler(true))
      : dispatch(disableBtnToogler(false));
  };
  return (
    <div
      className="editGradient"
      style={{ background: createGradient(first, second) }}
    >
      <form action="" className="form__grid">
        <div className="form__input">
          <input
            type="text"
            value={first}
            onChange={(e) => {
              isDisabled(e.target.value);
              setFirstColor(e.target.value);
            }}
          />

          <input
            type="text"
            value={second}
            onChange={(e) => {
              isDisabled(e.target.value);
              setSecondColor(e.target.value);
            }}
          />
        </div>
        <button type="submit" onClick={addEdited} disabled={!disableChek}>
          Accept changes
        </button>
      </form>
    </div>
  );
};
export default EditGradient;
