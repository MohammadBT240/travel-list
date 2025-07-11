export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="footer">
        <em>Start Adding items into your list! </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are done packing!!!"
          : `You have ${numItems} items on your list,and you've already packed
        ${numPacked} (${percentage}%)`}
        ;
      </em>
    </footer>
  );
}
