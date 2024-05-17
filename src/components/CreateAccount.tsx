import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Account = {
  username: string;
  password: string;
  email: string;
};

const CreateAccount = () => {
  const [buttonText, setButtonText] = useState<string>("Submit");
  const baseURL = import.meta.env.VITE_BASEURL;
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      createAccount(value);
    },
  });

  async function createAccount(body: Account) {
    try {
      const response = await fetch(baseURL + "/account/create", {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        setButtonText("There was an error");
        throw new Error(`${response.status}`);
      }
      setButtonText("Account Created!");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error(error);
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
            htmlFor="username"
            className="text-[15px] font-medium leading-[35px] text-black"
          >
            Username
          </label>
        </div>
        <form.Field
          name="username"
          children={(username) => (
            <input
              name="username"
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              value={username.state.value}
              onChange={(e) => username.handleChange(e.target.value)}
              required
            />
          )}
        />
 <div className="flex items-baseline justify-between">
          <label className="text-[15px] font-medium leading-[35px] text-black">
            Email
          </label>
        </div>
        <form.Field
              name="email"
              children={(email) => (
                <input
                  name="email"
                  type="email"
                  className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  value={email.state.value}
                  onChange={(e) => email.handleChange(e.target.value)}
                  required
                />
              )}
            />
        <div className="flex items-baseline justify-between">
          <label
            htmlFor="password"
            className="text-[15px] font-medium leading-[35px] text-black"
          >
            Password
          </label>
        </div>
        <form.Field
              name="password"
              children={(password) => (
                <input
                  name="password"
                  className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  type="password"
                  value={password.state.value}
                  onChange={(e) => password.handleChange(e.target.value)}
                  required
                />
              )}
            />
        <div className="flex items-baseline justify-between">
          <label
            htmlFor="passwordConfirm"
            className="text-[15px] font-medium leading-[35px] text-black"
          >
            Confirm Password
          </label>
        </div>
        <input
          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          type="password"
          name="passwordConfirm"
          required
        />
       
        <button className="box-border w-full text-white shadow-blackA4 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-black px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[20px]" type="submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
