import React, { createContext, useContext, useReducer } from "react";

// Prepaer the dataLayer
export const StateContext = createContext();
 
// Wrap our app and provide the layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


// pull information from the data layer
export const useStateValue = () => useContext(StateContext);
