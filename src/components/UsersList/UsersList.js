import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUsersThunk from "../../thunks/usersThunks";
import User from "../User/User";

const UsersList = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersThunk(token));
  }, [dispatch]);

  return (
    <>
      <ul className="users-list">
        {users.map((user) => (
          <li className="user" key={user.id}>
            <User user={user} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
