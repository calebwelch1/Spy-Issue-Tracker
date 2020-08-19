import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// Components
import SpringAnimations from "./components/SpringAnimations";
import Component1 from "./components/SpringAnimations/component1";
import Component2 from "./components/SpringAnimations/component2";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  linkstyle: {
    display: "center",
    textAlign: "center",
    color: "white",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  centered: {
    textAlign: "center",
    color: "white",
    marginLeft: "50px",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <body className="background">
      <h1> SPY</h1>
      <Component1 />
      <Component2 />
    </body>
  );
}
