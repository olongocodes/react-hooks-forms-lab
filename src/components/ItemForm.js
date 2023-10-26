import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  // Initialize state for the form input values
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce"); // Default to "Produce"

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new item object
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    // Pass the new item to the parent component via the callback
    props.onItemFormSubmit(newItem);

    // Clear the form after submission
    setItemName("");
    setItemCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
