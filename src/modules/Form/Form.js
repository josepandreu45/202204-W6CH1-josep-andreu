import { useState } from "react";
import { useDispatch } from "react-redux";
import { addListItemThunk } from "../../redux/thunks/thunks";

const Form = () => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (10000 - 1)) + 1;
  };

  const initialItemToDo = {
    id: 1,
    name: "",
    done: false,
  };

  const [itemToDo, setItemToDo] = useState(initialItemToDo);
  const dispatch = useDispatch();

  const handleNameInputChange = (event) => {
    setItemToDo({ ...itemToDo, name: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!itemToDo.name) {
      return;
    }
    itemToDo.id = generateRandomNumber();
    dispatch(addListItemThunk(itemToDo));
    setItemToDo(initialItemToDo);
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={itemToDo.name}
          onChange={handleNameInputChange}
        />

        <input type="submit" value="+" className="submit-input" />
      </form>
    </>
  );
};

export default Form;
