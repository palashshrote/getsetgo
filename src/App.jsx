import { use, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
const initialItems = [
  {
    id: 1,
    quantity: 2,
    description: "Passports",
    packed: false,
  },
  {
    id: 2,
    quantity: 2,
    description: "Umbrella",
    packed: true,
  },
];
export default function App() {
  const [items, setItems] = useState(initialItems);
  function handleAddItems(newItem) {
    const readyItems = { ...newItem, id: items.length + 1 };
    setItems((items) => [...items, readyItems]);
  }
  function handleToogle(id) {
    console.log(id);
    const filteredItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(filteredItems);
  }
  function handleOnDelete(id) {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  }
  function handleOnClear() {
    setItems([]);
  }
  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onClear={handleOnClear}
        onDelete={handleOnDelete}
        onToggle={handleToogle}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
}
