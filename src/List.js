const List = ({ items, handleCheckboxChange, checkedItems }) => {
  return (
    <div className="List">
      {items.map((item, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={checkedItems[index] || false}
            onChange={() => handleCheckboxChange(index)}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default List;
