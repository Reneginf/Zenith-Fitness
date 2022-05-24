import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nutrition = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="jumbotron">
      <h1 className="display-4">Nutrition</h1>
    </div>
  );
};

Nutrition.propTypes = {
  match: PropTypes.object,
};
