import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import validateEmail from "../utils/formValidation/validateEmail";
import setStorage from "../utils/setStorage";

type LoginCredentials = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const [buttonText, setButtonText] = useState<string>("Submit");
  const baseURL = import.meta.env.VITE_BASEURL;
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      login(value);
    },
  });

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
        setButtonText("Login Failed");
        setTimeout(() => {
          setButtonText("Submit");
        }, 1500);

        throw new Error(`${response.status}`);
      }
      const results = await response.json();
      setStorage(results.Token, results.RefreshToken);
      navigate("/");
      location.reload();
    } catch (error) {
      console.error("Login Failed", error);
    }
  }

  return (
    <div className="flex justify-center">
      <form
        className="w-[260px]"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <div className="flex items-baseline justify-between">
          <label
            htmlFor="email"
            className="text-[15px] font-medium leading-[35px] text-black"
          >
            Email
          </label>
        </div>
        <form.Field
          name="email"
          validators={{
            onBlur: ({ value }) => {
              const emailValidation = validateEmail(value);
              const errors = [];
              for (const key in emailValidation) {
                if (
                  key !== "input" &&
                  (emailValidation as any)[key].isValid === false
                ) {
                  errors.push((emailValidation as any)[key].errorMsg);
                }
              }
              if (errors.length > 0) {
                return "Email error: " + errors.join(", ");
              }
              return undefined;
            },
          }}
        >
          {(email) => (
            <>
              <input
                name="email"
                className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                value={email.state.value}
                onChange={(e) => email.handleChange(e.target.value)}
                onBlur={email.handleBlur}
                data-testid="loginEmail"
                required
              />
              {email.state.meta.errors ? (
                <em role="alert" className="text-xs text-red-700">
                  {email.state.meta.errors.join(", ")}
                </em>
              ) : null}
            </>
          )}
        </form.Field>
        <div className="flex items-baseline justify-between">
          <label
            htmlFor="password"
            className="text-[15px] font-medium leading-[35px] text-black"
          >
            Password
          </label>
        </div>
        <form.Field name="password">
          {(password) => (
            <>
              <input
                name="password"
                className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                type="password"
                value={password.state.value}
                onChange={(e) => password.handleChange(e.target.value)}
                onBlur={password.handleBlur}
                data-testid="loginPassword"
                required
              />
              {password.state.meta.errors ? (
                <em role="alert" className="text-xs text-red-700">
                  {password.state.meta.errors.join(", ")}
                </em>
              ) : null}
            </>
          )}
        </form.Field>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button
              className="box-border w-full text-white shadow-blackA4 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-black px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[20px] disabled:cursor-not-allowed disabled:bg-red-700"
              type="submit"
              disabled={!canSubmit || isSubmitting}
              data-testid="loginBtn1"
            >
              {isSubmitting ? "..." : buttonText}
            </button>
          )}
        />
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
  );
};

export default LoginForm;
