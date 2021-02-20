import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getNewColor,
  onSecondColorChange,
  addColorToList,
  onFirstColorChange,
  isValid,
  disableBtnToogler,
  getDisableBtn,
} from "../../features/appSlice";
import "./styles.sass";
import uniqid from "uniqid";
import { useHistory } from "react-router-dom";
export const createGradient = (first = "#42716f", second = "#19000c") => {
  return `linear-gradient(90deg,${first}, ${second})`;
};

const NewGradient = () => {
  const { first, second } = useSelector(getNewColor);
  const disableChek = useSelector(getDisableBtn);

  const history = useHistory();
  const dispatch = useDispatch();
  const addColor = (e) => {
    e.preventDefault();
    const newColor = {
      first: first,
      second: second,
      id: uniqid(),
    };

    dispatch(addColorToList(newColor));
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };
  const isDisabled = (v) => {
    isValid(v)
      ? dispatch(disableBtnToogler(true))
      : dispatch(disableBtnToogler(false));
  };
  return (
    <div
      className="newGradient"
      style={{
        background: createGradient(first, second),
      }}
    >
      <div className="newGradient__content">
        <div className="newGradient__form">
          <form action="" className="form__grid">
            <div className="form__input">
              <input
                type="text"
                value={first}
                onChange={(e) => {
                  isDisabled(e.target.value);
                  dispatch(onFirstColorChange(e.target.value));
                }}
              />

              <input
                type="text"
                value={second}
                onChange={(e) => {
                  isDisabled(e.target.value);
                  dispatch(onSecondColorChange(e.target.value));
                }}
              />
            </div>
            <button type="submit" onClick={addColor} disabled={!disableChek}>
              ADD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewGradient;
