import { useState } from "react";
import { useDispatch } from "react-redux";
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
  const logIn = (event) => {
    event.preventDefault();
    dispatch(logInThunk(formData));
    setformData(emptyForm);
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
    </form>
  );
};

export default LoginForm;
