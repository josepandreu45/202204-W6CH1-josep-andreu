import axios from "axios";
import {
  addItemActionCreator,
  loadListActionCreator,
  removeItemActionCreator,
} from "../features/listSlice";

export const loadListThunk = () => async (dispatch) => {
  const { data: datalist } = await axios.get(process.env.REACT_APP_API_URL);

  dispatch(loadListActionCreator(datalist));
};

export const delteListItemThunk = (id) => async (dispatch) => {
  const { status } = await axios.delete(
    `${process.env.REACT_APP_API_URL}${id}`
  );

  if (status === 200) {
    dispatch(removeItemActionCreator(id));
  }
};

export const addListItemThunk = (item) => async (dispatch) => {
  const { status } = await axios.post(process.env.REACT_APP_API_URL, item);

  if (status === 201) {
    dispatch(addItemActionCreator(item));
  }
};

export default loadListThunk;
