import React from "react";
import { createGradient } from "../new/NewGradient";
import { deleteColor } from "../../features/appSlice";
import "./style.sass";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const GradientItem = ({ first, second, id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const remove = () => {
    dispatch(deleteColor(id));
  };
  const edit = () => {
    history.push(`/edit/${id}`);
  };
  return (
    <div
      className="gradientItem"
      style={{
        background: createGradient(first, second),
      }}
    >
      <button onClick={remove} className="gradientItem__remove_btn">
        x
      </button>
      <div className="gradientItem__info">
        <span>{first}</span>
        <span>{second}</span>
      </div>
      <button className="gradientItem__edit_btn" onClick={edit}>
        ...
      </button>
    </div>
  );
};
export default GradientItem;
