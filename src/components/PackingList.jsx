import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onToggle, onDelete, onClear }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  } else {
    sortedItems = items;
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onDelete={onDelete}
            onToggle={onToggle}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
      <div className="action-btn">
        <button onClick={() => onClear()}>Clear List</button>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}
