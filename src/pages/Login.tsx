import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/home")}>Home Page</button>
      <div className="text-center text-3xl p-8 mb-2 w-full bg-gray-300">
        Login
      </div>
      <LoginForm />
    </>
  );
};

export default Login;
