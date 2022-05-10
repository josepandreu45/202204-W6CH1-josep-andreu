import axios from "axios";
import {
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

export default loadListThunk;
