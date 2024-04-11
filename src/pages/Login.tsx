import LoginForm from "../components/LoginForm";

const Login = () => {
  async function validateCookie() {
    try {
      const response = await fetch('https://hivemind-be.fly.dev/account/token/validate', {
        credentials: "same-origin",
      })
      const data = await response.json()
      console.log(data)
      if (!response.ok) {
        throw new Error(`${response.status}`)
      }
    }
    catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    <button className="border" onClick={validateCookie}>Validate Cookie</button>
      <div className="text-center text-3xl p-8 mb-2 w-full bg-gray-300">
        Login
      </div>
      <LoginForm />
    </>
  );
};

export default Login;
