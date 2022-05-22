import axios from "axios";
import { getUsersActionCreator } from "../redux/features/UsersSlice";

const urlApi = process.env.REACT_APP_API_URL;

const getUsersThunk = (token) => async (dispatch) => {
  const { status, data } = await axios.get(`${urlApi}/user/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (status === 200) {
    dispatch(getUsersActionCreator(data.users));
  }
};

export default getUsersThunk;
