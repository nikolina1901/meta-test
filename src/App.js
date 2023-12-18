import "./App.css";
import { items } from "./data";
import Actions from "./Actions";
import List from "./List";
import { useState } from "react";

function App() {
  const [leftList, setLeftList] = useState(items);
  const [rightList, setRightList] = useState([]);
  const [leftCheckedItems, setLeftCheckedItems] = useState(
    Array(items.length).fill(false)
  );
  const [rightCheckedItems, setRightCheckedItems] = useState(
    Array(items.length).fill(false)
  );

  const handleCheckboxChange = (index, list) => {
    if (list === "left") {
      const newLeftCheckedItems = [...leftCheckedItems];
      newLeftCheckedItems[index] = !newLeftCheckedItems[index];
      setLeftCheckedItems(newLeftCheckedItems);
    } else if (list === "right") {
      const newRightCheckedItems = [...rightCheckedItems];
      newRightCheckedItems[index] = !newRightCheckedItems[index];
      setRightCheckedItems(newRightCheckedItems);
    }
  };

  const handleClickLeft = () => {
    const newLeftList = leftList.filter((_, index) => !leftCheckedItems[index]);
    const movedItems = leftList.filter((_, index) => leftCheckedItems[index]);
    setLeftList(newLeftList);
    setRightList([...rightList, ...movedItems]);
    setLeftCheckedItems(Array(leftList.length).fill(false)); // Reset checked items
  };

  const handleClickRight = () => {
    const newRightList = rightList.filter(
      (_, index) => !rightCheckedItems[index]
    );
    const movedItems = rightList.filter((_, index) => rightCheckedItems[index]);
    setRightList(newRightList);
    setLeftList([...leftList, ...movedItems]);
    setRightCheckedItems(Array(rightList.length).fill(false)); // Reset checked items
  };

  return (
    <div className="App">
      <List
        items={leftList}
        handleCheckboxChange={(index) => handleCheckboxChange(index, "left")}
        checkedItems={leftCheckedItems}
      />
      <Actions
        handleClickLeft={handleClickLeft}
        handleClickRight={handleClickRight}
      />
      <List
        items={rightList}
        handleCheckboxChange={(index) => handleCheckboxChange(index, "right")}
        checkedItems={rightCheckedItems}
      />
    </div>
  );
}

export default App;
