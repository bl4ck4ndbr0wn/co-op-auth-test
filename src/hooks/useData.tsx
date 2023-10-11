import {createContext, useCallback, useContext, useState} from 'react';
import {IUseData, IUser} from '../constants/types';

export const DataContext = createContext({});

export const useData = () => useContext(DataContext) as IUseData;

export const DataProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<IUser>({});

  // handle user
  const handleUser = useCallback(
    (payload: IUser) => {
      // set user / compare if has updated
      if (JSON.stringify(payload) !== JSON.stringify(user)) {
        setUser(payload);
      }
    },
    [user, setUser],
  );

  const contextValue = {
    user,
    handleUser,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
