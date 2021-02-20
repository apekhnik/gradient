import React from "react";
import "./style.sass";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import GradientItem from "./GradientItem";

const Home = () => {
  const list = useSelector((state) => state.app.colorList);

  const history = useHistory();
  const gradientList = list.map((item) => (
    <GradientItem
      first={item.first}
      second={item.second}
      id={item.id}
      key={item.id}
    />
  ));

  return (
    <div className="home">
      {gradientList}
      <button className="returnToNew" onClick={() => history.push("/new")}>
        CREATE
      </button>
    </div>
  );
};
export default Home;
