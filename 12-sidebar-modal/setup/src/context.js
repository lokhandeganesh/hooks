import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // For Sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }
  // For Modal
  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <AppContext.Provider value={{
      isSidebarOpen, openSidebar, closeSidebar,
      isModalOpen, openModal, closeModal
    }}>{children}</AppContext.Provider>
  )
}

// Custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }