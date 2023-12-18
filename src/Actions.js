//https://www.toptal.com/designers/htmlarrows/

const Actions = ({ handleClickLeft, handleClickRight }) => {
  return (
    <div className="Actions">
      <button onClick={() => handleClickLeft()}>&gt;</button>
      <button onClick={() => handleClickRight()}>&lt;</button>
    </div>
  );
};

export default Actions;
