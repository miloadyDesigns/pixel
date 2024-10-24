// SideHeaderContext.js
import React, { createContext, useContext, useState } from 'react';

const SideHeaderContext = createContext();

export const SideHeaderProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideHeader = () => {
    setIsOpen((prev) => !prev);
  };

  const openSideHeader = () => setIsOpen(true);
  const closeSideHeader = () => setIsOpen(false);

  return (
    <SideHeaderContext.Provider value={{ isOpen, toggleSideHeader, openSideHeader, closeSideHeader }}>
      {children}
    </SideHeaderContext.Provider>
  );
};

export const useSideHeader = () => useContext(SideHeaderContext);
