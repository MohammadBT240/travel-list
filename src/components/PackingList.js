import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onDeleteItems,
}) {
  const [sortBy, setSortBy] = useState("description");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            itemObj={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            onDeleteItems={onDeleteItems}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input orders</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={onDeleteItems}>Clear List</button>
      </div>
    </div>
  );
}
