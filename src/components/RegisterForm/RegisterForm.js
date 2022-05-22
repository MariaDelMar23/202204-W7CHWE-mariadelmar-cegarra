import axios from "axios";
import { useState } from "react";

const urlApi = process.env.REACT_APP_API_URL;

const RegisterForm = () => {
  const emptyForm = {
    name: "",
    username: "",
    password: "",
    image: "",
  };
  const [formData, setformData] = useState(emptyForm);

  const changeForm = (event) => {
    setformData({ ...formData, [event.target.id]: event.target.value });
  };

  const register = (event) => {
    event.preventDefault();
    const newUser = new FormData();
    newUser.append("name", formData.name);
    newUser.append("username", formData.username);
    newUser.append("password", formData.password);
    newUser.append("image", formData.image);
    axios.post();
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
      <label htmlFor="name"></label>
      <input
        id="name"
        type="text"
        onChange={changeForm}
        value={formData.name}
      />
      <label htmlFor="password"></label>
      <input
        id="password"
        type="password"
        onChange={changeForm}
        value={formData.password}
      />

      <label htmlFor="image"></label>
      <input
        id="image"
        type="url"
        onChange={changeForm}
        value={formData.image}
      />
      <input type="submit" value="REGISTER" onClick={register} />
    </form>
  );
};

export default RegisterForm;
