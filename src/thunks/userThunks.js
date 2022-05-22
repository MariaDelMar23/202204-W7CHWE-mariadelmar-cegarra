import axios from "axios";
import jwtDecode from "jwt-decode";
import { logInActionCreator } from "../redux/features/UserSlice";

const urlApi = process.env.REACT_APP_API_URL;

const logInThunk = (formData) => async (dispatch) => {
  const { username, password } = formData;
  const { status, data } = await axios.post(`${urlApi}/user/login`, {
    username,
    password,
  });
  if (status === 200) {
    const userInfo = jwtDecode(data.token);
    localStorage.setItem("token", data.token);
    dispatch(logInActionCreator(userInfo));
  }
};

export default logInThunk;
