import axios from "axios";
import { getUsersActionCreator } from "../redux/features/UsersSlice";

const urlApi = process.env.REACT_APP_API_URL;

const getUsers = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const { status, data } = await axios.get(`${urlApi}/user/users`, {
    headers: {
      authentication: `Bearer ${token}`,
    },
  });
  if (status === 200) {
    dispatch(getUsersActionCreator(data.users));
  }
};

export default getUsers;
