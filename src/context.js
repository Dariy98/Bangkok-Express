import React, { useContext } from "react";

export const MyContext = React.createContext();

export const useProducts = () => useContext(MyContext);

