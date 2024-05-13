import LoginForm from "../components/LoginForm";
import ErrorMessage from "../components/ErrorMessage";

const Login = () => {
  return (
    <>
      <div className="text-center text-3xl p-8 w-full bg-gray-300">
        Login
      </div>
      <ErrorMessage />
      <LoginForm />
    </>
  );
};

export default Login;
