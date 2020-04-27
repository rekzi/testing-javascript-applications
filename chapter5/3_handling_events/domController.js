const updateItemList = inventory => {
  const inventoryList = window.document.getElementById("item-list");

  // Clears the list
  inventoryList.innerHTML = "";

  Object.entries(inventory).forEach(([itemName, quantity]) => {
    const listItem = window.document.createElement("li");
    listItem.innerText = `${itemName} - Quantity: ${quantity}`;
    inventoryList.appendChild(listItem);
  });
};
