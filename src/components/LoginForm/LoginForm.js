import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { NavLink } from "react-router-dom";
import logInThunk from "../../thunks/userThunks";

const LoginForm = () => {
  const emptyForm = {
    username: "",
    password: "",
  };
  const dispatch = useDispatch();
  const [formData, setformData] = useState(emptyForm);

  const changeForm = (event) => {
    setformData({ ...formData, [event.target.id]: event.target.value });
  };

  const logIn = async (event) => {
    event.preventDefault();
    await dispatch(logInThunk(formData));
    setformData(emptyForm);
    window.location.href = "users";
  };

  return (
    <form action="login" autoComplete="off" noValidate>
      <label htmlFor="username"></label>
      <input
        id="username"
        type="text"
        onChange={changeForm}
        value={formData.username}
      />
      <label htmlFor="password"></label>
      <input
        id="password"
        type="password"
        onChange={changeForm}
        value={formData.password}
      />
      <input type="submit" value="LOG IN" onClick={logIn} />
      <p>
        Don't have an account?
        {<NavLink to="/user/register">Click here</NavLink>}{" "}
      </p>
    </form>
  );
};

export default LoginForm;
