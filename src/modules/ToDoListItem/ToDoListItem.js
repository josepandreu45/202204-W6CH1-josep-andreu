import { useDispatch } from "react-redux";
import { markAsDoneActionCreator } from "../../redux/features/listSlice";
import { delteListItemThunk } from "../../redux/thunks/thunks";

const ToDoListItem = ({ toDoListItem: { id, name, done } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>Id: {id}</p>
      <p>{name}</p>
      <p>
        Done: {done && "Yes"} {!done && "No"}
      </p>
      <button onClick={() => dispatch(delteListItemThunk(id))}>Delete</button>
      <button onClick={() => dispatch(markAsDoneActionCreator(id))}>
        Done
      </button>
    </>
  );
};

export default ToDoListItem;
