import * as Form from "@radix-ui/react-form";
import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SessionContext from "../context/SessionProvider";
import { useMutation } from "@tanstack/react-query";

type LoginCredentials = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const baseURL = import.meta.env.VITE_BASEURL;
  const navigate = useNavigate();

  //@ts-expect-error
  // Session hook
  const { session, setSession } = useContext(SessionContext);

  // Login
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDisabled(true);
    const loginObject: LoginCredentials = {
      email: `${emailRef?.current?.value}`,
      password: `${passwordRef?.current?.value}`,
    };
    mutate(loginObject);
  }
  const { mutate } = useMutation({
    mutationFn: login,
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
        throw new Error(`${response.status}`);
      }
      const results = await response.json();
      localStorage.setItem("accessToken", results.Token);
      //@ts-expect-error
      setSession((prevState) => ({
        ...prevState, // Spread the previous state to preserve other properties
        [session.accessToken]: results.Token, // Update the specific property with the new value
      }));
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex justify-center">
      <Form.Root className="w-[260px]" onSubmit={handleSubmit}>
        <Form.Field className="grid mb-[10px]" name="email">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
              Email
            </Form.Label>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your email
            </Form.Message>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="typeMismatch"
            >
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="email"
              ref={emailRef}
              disabled={disabled}
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="password">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
              Password
            </Form.Label>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your password
            </Form.Message>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="typeMismatch"
            >
              Please provide a valid password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              type="password"
              ref={passwordRef}
              disabled={disabled}
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="box-border w-full text-white shadow-blackA4 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-black px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
            Login
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default LoginForm;
