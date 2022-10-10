import { useContext, createContext } from "react";
import { useGetData } from "./hook/useGetData";

const dataContext = createContext();

const DataProvider = ({ children }) => {
  const data = useGetData();
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

const useData = () => {
  return useContext(dataContext);
};

module.exports = {
  DataProvider,
  useData,
};
