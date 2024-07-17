import { useContext } from "react";
import { useForm } from "@tanstack/react-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SessionContext from "../context/SessionProvider";
import setStorage from "../utils/setStorage";
import useSetError from "../hooks/useSetError";

type LoginCredentials = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const baseURL = import.meta.env.VITE_BASEURL;
  const navigate = useNavigate();
  const setError = useSetError();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      login(value);
    },
  });

  //@ts-expect-error
  // Session hook
  const { session, setSession } = useContext<TContext>(SessionContext);

  async function login(body: LoginCredentials) {
    try {
      const response = await fetch(baseURL + "/account/login", {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
        const results = await response.json();
        setStorage(results.Token, results.RefreshToken);
        navigate("/");
    } catch (error) {
      setError("There was an error");
      console.error(error);
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <form
          className="w-[260px]"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <div>
            <label
              htmlFor="email"
              className="text-[15px] font-medium leading-[35px] text-black"
            >
              Email
            </label>
            <form.Field
              name="email"
              children={(email) => (
                <input
                  name="email"
                  type="email"
                  className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  value={email.state.value}
                  onChange={(e) => email.handleChange(e.target.value)}
                  data-testid="loginEmail"
                  required
                />
              )}
            />
          </div>
          <div>
            <label className="text-[15px] font-medium leading-[35px] text-black">
              Password
            </label>
            <form.Field
              name="password"
              children={(password) => (
                <input
                  name="password"
                  className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="password"
                  value={password.state.value}
                  onChange={(e) => password.handleChange(e.target.value)}
                  data-testid="loginPassword"
                  required
                />
              )}
            />
          </div>
          <button
            type="submit"
            className="box-border w-full text-white shadow-blackA4 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-black px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[24px]"
            data-testid="loginBtn1"
          >
            Login
          </button>
          <Link to="/createAccount">
            <button
              className="box-border w-full text-white shadow-blackA4 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-black px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[20px]"
              data-testid="loginBtn2"
            >
              Create Account
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
