import React, { createContext, useState } from "react";

type userType = {
  email: string;
  token: string;
};

export interface authContextValue {
  user: userType | null;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<authContextValue | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userType | null>(null);
  /*  check the browser for token  if its there  set the user state if not  then set user to null*/

  const authContextValue = {
    user: null /* {
      email: "sahil",
      token: "token",
    } */,
    login: () => {
      console.log("login");
    },
    logout: () => {
      console.log("logout");
    },
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
