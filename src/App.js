import { Navigate, Route, Router, Routes } from "react-router";
import LogInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";
import UserListPage from "./pages/UsersListPage";

function App() {
  return (
    <>
      <h1>FRIENEMIES</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/user/login" />}></Route>
        <Route path="/user/login" element={<LogInPage />}></Route>
        <Route path="/user/register" element={<RegisterPage />}></Route>
        <Route path="/user/users" element={<UserListPage />}></Route>
        <Route path="*" element={<LogInPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
