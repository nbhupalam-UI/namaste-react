import { createContext } from "react";

export const UserDataContext = createContext({
  loggedInUser: "Default User",
});

export const UserDataContextProvider = ({children, value}) => {
  return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>;
};
