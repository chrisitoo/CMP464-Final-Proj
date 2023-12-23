import { ChangeEvent, MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  onAddItem: (newItem: string) => void;
}

function ListGroup({ items, heading, onSelectItem, onAddItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      const newItems = [...items, inputValue.trim()];
      setSelectedIndex(newItems.length - 1);
      onSelectItem(newItems[newItems.length - 1]);
      setInputValue("");
      onAddItem(newItems[newItems.length - 1]);
    }
  };

  return (
    <>
      <h1>{heading}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyPress}
        placeholder="Add new item..."
      />
      {items.length === 0 && <p> Add something to keep track of your day!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
