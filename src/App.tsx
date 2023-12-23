import ListGroup from "./components/ListGroup";

function App() {
  let toDos = ["Errand 1 ", "Errand 2", "Errand 3", "Errand 4", "Errand 5"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={toDos}
        heading="Errands"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
