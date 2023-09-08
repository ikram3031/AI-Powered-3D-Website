"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export const AuthProvider = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

export const ReduxProvider = ({children}) => {
  return(
    <Provider store={store}>
      {children}
    </Provider>
  )
}