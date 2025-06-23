export default function Item({ item, onToggle, onDelete }) {
  return (
    <li
      style={{ textDecoration: item.packed ? "line-through" : "none" }}
      key={item.id}
    >
      <input
        type="checkbox"
        defaultChecked={item.packed}
        onChange={() => onToggle(item.id)}
      />
      {item.quantity} {item.description} {}
      <button onClick={() => onDelete(item.id)}>&times;</button>
    </li>
  );
}
