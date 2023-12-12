import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const value = {};
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default AppContext;