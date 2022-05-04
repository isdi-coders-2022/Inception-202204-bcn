import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={3}>{children}</AppContext.Provider>;
};

export default AppProvider;
