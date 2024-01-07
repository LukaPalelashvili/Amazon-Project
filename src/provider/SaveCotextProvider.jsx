// import PropTypes from "prop-types";
// import { useState, useEffect } from "react";
// import { SaveContext } from "../context/saveContext";
// SaveContext
// export const SaveCotextProvider = ({ children }) => {
//   const [saveItems, setSaveItems] = useState(
//     localStorage.getItem("saveItems")
//       ? JSON.parse(localStorage.getItem("saveItems"))
//       : []
//   );

//   const addToSave = (item) => {
//     const isItemInSave = saveItems.find((saveItem) => saveItem.id === item.id);

//     if (isItemInSave) {
//       setSaveItems(
//         saveItems.map((saveItem) =>
//           saveItem.id === item.id
//             ? { ...saveItem, quantity: saveItem.quantity + 1 }
//             : saveItem
//         )
//       );
//     } else {
//       setSaveItems([...saveItems, { ...item, quantity: 1 }]);
//     }
//   };

//   const removeFromSave = (item) => {
//     const isItemInSave = saveItems.find((saveItem) => saveItem.id === item.id);

//     if (isItemInSave.quantity === 1) {
//       setSaveItems(saveItems.filter((saveItem) => saveItem.id !== item.id));
//     } else {
//       setSaveItems(
//         saveItems.map((saveItem) =>
//           saveItem.id === item.id
//             ? { ...saveItem, quantity: saveItem.quantity - 1 }
//             : saveItem
//         )
//       );
//     }
//   };

//   const clearSave = () => {
//     setSaveItems([]);
//   };

//   const getCartTotal = () => {
//     return saveItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   useEffect(() => {
//     const data = localStorage.getItem("saveItems");
//     if (data) {
//       setSaveItems(JSON.parse(data));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("saveItems", JSON.stringify(saveItems));
//   }, [saveItems]);

//   return (
//     <CartContext.Provider
//       value={{
//         saveItems,
//         addToSave,
//         removeFromSave,
//         clearSave,
//         getCartTotal,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// SaveCotextProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
