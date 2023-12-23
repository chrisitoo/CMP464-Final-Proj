import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  const [toDos, setToDos] = useState<string[]>([
    "Errand 1",
    "Errand 2",
    "Errand 3",
    "Errand 4",
    "Errand 5",
  ]);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleAddItem = (newItem: string) => {
    setToDos((prevToDos) => [...prevToDos, newItem]);
  };

  const handleDeleteItem = (index: number) => {
    setToDos((prevToDos) => prevToDos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <ListGroup
        items={toDos}
        heading="Errands"
        onSelectItem={handleSelectItem}
        onAddItem={handleAddItem}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default App;
