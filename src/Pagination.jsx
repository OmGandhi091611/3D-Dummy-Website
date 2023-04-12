import React from "react";
import "./Pagination.css";
const Pagination = (props) => {
  const handleClick = (index) => {
    props.setActivePage(index);
  };
  return (
    <div className="pagination">
      <div
        className={props.activePage === 1 ? "active" : "passive"}
        onClick={() => handleClick(1)}
      ></div>
      <div
        className={props.activePage === 2 ? "active" : "passive"}
        onClick={() => handleClick(2)}
      ></div>
      <div
        className={props.activePage === 3 ? "active" : "passive"}
        onClick={() => handleClick(3)}
      ></div>
    </div>
  );
};

export default Pagination;
