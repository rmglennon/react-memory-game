import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="wrapper container-fluid">{props.children}</div>;

export default Wrapper;