export default function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);
  return (
    <div className="footer">
      {totalItems === 0 ? (
        <h2>You have no items on your list</h2>
      ) : packedItems === totalItems ? (
        <h2>GET SET GO</h2>
      ) : (
        <h2>
          You have {totalItems} on your list, and you've already packed{" "}
          {packedItems} ({percentage}%)
        </h2>
      )}
    </div>
  );
}
