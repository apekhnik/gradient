import React, { useState } from "react";
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
  const actualColor = useSelector(getNewColor);
  const disableChek = useSelector(getDisableBtn);

  const list = useSelector((state) => state.app.colorList);
  const history = useHistory();
  const dispatch = useDispatch();
  const addColor = (e) => {
    e.preventDefault();
    const newColor = {
      first: actualColor.first,
      second: actualColor.second,
      id: uniqid(),
    };

    dispatch(addColorToList(newColor));
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };
  return (
    <div
      className="newGradient"
      style={{
        background: createGradient(actualColor.first, actualColor.second),
      }}
    >
      <div className="newGradient__content">
        <div className="newGradient__form">
          <form action="" className="form__grid">
            <div className="form__input">
              <input
                type="text"
                value={actualColor.first}
                onChange={(e) => {
                  isValid(e.target.value)
                    ? dispatch(disableBtnToogler(true))
                    : dispatch(disableBtnToogler(false));
                  dispatch(onFirstColorChange(e.target.value));
                }}
              />

              <input
                type="text"
                value={actualColor.second}
                onChange={(e) => {
                  isValid(e.target.value)
                    ? dispatch(disableBtnToogler(true))
                    : dispatch(disableBtnToogler(false));
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
