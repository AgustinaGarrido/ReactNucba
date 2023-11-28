// NavigationContext.jsx
import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const selectNavItem = (item) => {
    setSelectedNavItem(item);
  };

  return (
    <NavigationContext.Provider value={{ selectedNavItem, selectNavItem }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  return useContext(NavigationContext);
};
