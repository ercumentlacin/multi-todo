import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

StateProvider.propTypes = {
  reducer: PropTypes.func,
  initialState: PropTypes.shape({}),
  children: PropTypes.shape({}),
};

StateProvider.defaultProps = {
  reducer: "",
  initialState: "",
  children: "",
};
