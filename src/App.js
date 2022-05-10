import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Form from "./modules/Form/Form";
import ToDoList from "./modules/ToDoList/ToDoList";

import loadListThunk from "./redux/thunks/thunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadListThunk);
  }, [dispatch]);

  return (
    <>
      <Form />
      <ToDoList />
    </>
  );
}

export default App;
