import { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";
import { Logo } from "./Logo";
import { PackingList } from "./PackingList";
import { Form } from "./Form";
import { Stats } from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Caps", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems(() => [...items, item]);
  }
  function handleDeleteItem(id) {
    //Deleting an item from an array
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      //Updating an item in an array
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteItems() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      width: "400px", // Set custom width here
    }).then((result) => {
      if (result.isConfirmed) {
        setItems([]);
        Swal.fire("Deleted!", "Your items have been deleted.", "success");
      }
    });
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteItems={handleDeleteItems}
      />
      <Stats items={items} />
    </div>
  );
}
