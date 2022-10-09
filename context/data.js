import { useContext, createContext } from "react";
import { useGetData } from "../hooks/useGetData";

const dataContext = createContext();

export const DataProvider = ({ children }) => {
  const data = useGetData();
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export const useData = () => {
  return useContext(dataContext);
};
