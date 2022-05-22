import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const WelcomePage = () => {
  const user = useSelector((state) => state.user);

  return <>{user === {} ? <RegisterForm /> : <LoginForm />}</>;
};

export default WelcomePage;
