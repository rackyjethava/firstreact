import { useSelector, useDispatch } from "react-redux";
import { addNumber, editNumber, deleteNumber } from "./actions";

const NumbersComponent = () => {
  const dispatch = useDispatch();
  const numbers = useSelector((state) => state.numbers.numbers);

  const handleAddNumber = (number) => {
    dispatch(addNumber(number));
  };

  const handleEditNumber = (number) => {
    dispatch(editNumber(number));
  };

  const handleDeleteNumber = (id) => {
    dispatch(deleteNumber(id));
  };

  return (
    <div>
      {/* Add your numbers here */}
      {numbers.map((number) => (
        <div key={number.id}>
          {number.value}
          <button onClick={() => handleEditNumber(number)}>Edit</button>
          <button onClick={() => handleDeleteNumber(number.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NumbersComponent;