// SideHeaderContext.js
import React, { createContext, useContext, useState } from 'react';

const SideHeaderContext = createContext();

export const SideHeaderProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Welcome")
  const toggleSideHeader = () => {
    setIsOpen((prev) => !prev);
  };

  const openSideHeader = () => setIsOpen(true);
  const closeSideHeader = () => setIsOpen(false);
  const addTitle = (title) => {
    setTitle(title)
  }

  return (
    <SideHeaderContext.Provider value={{ isOpen, toggleSideHeader, openSideHeader, closeSideHeader, title, addTitle }}>
      {children}
    </SideHeaderContext.Provider>
  );
};

export const useSideHeader = () => useContext(SideHeaderContext);
