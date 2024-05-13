import LoginForm from "../components/LoginForm";
import Message from "../components/Message";

const Login = () => {
  return (
    <>
      <div className="text-center text-3xl p-8 w-full bg-gray-300">
        Login
      </div>
      <Message />
      <LoginForm />
    </>
  );
};

export default Login;
