import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

export const SaveContext = createContext();

export const SaveProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState(
    localStorage.getItem("savedItems")
      ? JSON.parse(localStorage.getItem("savedItems"))
      : [],
  );

  const addToSave = (item) => {
    const isItemInSave = savedItems.find((saveItem) => saveItem.id === item.id);

    if (!isItemInSave) {
      setSavedItems([...savedItems, { ...item }]);
    }
  };

  const removeFromSave = (item) => {
    const isItemInSave = savedItems.find((saveItem) => saveItem.id === item.id);

    if (isItemInSave) {
      setSavedItems(savedItems.filter((saveItem) => saveItem.id !== item.id));
    }
  };

  const isItemInSave = (item) =>
    savedItems.find((saveItem) => saveItem.id === item.id);

  const clearSave = () => {
    setSavedItems([]);
  };

  useEffect(() => {
    const data = localStorage.getItem("savedItems");
    if (data) {
      setSavedItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
  }, [savedItems]);

  return (
    <SaveContext.Provider
      value={{
        savedItems,
        addToSave,
        removeFromSave,
        clearSave,
        isItemInSave,
      }}
    >
      {children}
    </SaveContext.Provider>
  );
};

SaveProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
