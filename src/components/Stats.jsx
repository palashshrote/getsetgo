export default function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);
  return (
    <div className="footer">
      {totalItems === 0 ? (
        <h1>You have no items on your list</h1>
      ) : packedItems === totalItems ? (
        <h1>GET SET GO</h1>
      ) : (
        <h1>
          You have {totalItems} on your list, and you've already packed{" "}
          {packedItems} ({percentage}%)
        </h1>
      )}
    </div>
  );
}
