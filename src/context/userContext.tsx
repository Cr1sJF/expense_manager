import { createContext, useState } from 'react';

type UserContextType = {
  loggedIn: boolean;
  login: (user: string, password: string) => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export function UserContextProvider(props: any) {
  const [loggedIn, setLoggedIn] = useState(false);

  const context = {
    loggedIn: loggedIn,
    login: function (user: string, password: string) {
      console.log('Login', user, password);

      setLoggedIn(true);
    },
    logout: function () {
      console.log('Logout');

      setLoggedIn(false);
    },
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}
