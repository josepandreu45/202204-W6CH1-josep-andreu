import axios from "axios";
import { loadListActionCreator } from "../features/listSlice";

const loadListThunk = () => async (dispatch) => {
  const { data: datalist } = await axios.get(process.env.REACT_APP_API_URL);

  dispatch(loadListActionCreator(datalist));
};

export default loadListThunk;
