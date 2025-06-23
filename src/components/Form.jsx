import { useState } from "react";

export default function Form({ onAddItems }) {
  const [des, setDes] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleFormSubmission(e) {
    e.preventDefault();
    //create new Item
    var newItem = {
      description: des,
      quantity: quantity,
      packed: false,
    };
    console.log(newItem);
    //add item
    onAddItems(newItem);
    setDes("");
    setQuantity(1);
  }
  return (
    <form onSubmit={handleFormSubmission} className="form-input">
      <h2>What do you need for your trip?</h2>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={des}
        onChange={(e) => {
          setDes(e.target.value);
        }}
        type="text"
        placeholder="Item..."
      />
      <button>Add</button>
    </form>
  );
}
