import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

type Account = {
  username: string;
  password: string;
  email: string;
}

const CreateAccount = () => {
  const [buttonText, setButtonText] = useState<string>("Submit")
  const [disabled, setDisabled] = useState<boolean>(false);
  const usernameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const baseURL = import.meta.env.VITE_BASEURL;
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDisabled(true);
    const accountObject: Account = {
      username: `${usernameRef?.current?.value}`,
      password: `${passwordRef?.current?.value}`,
      email: `${emailRef?.current?.value}`,
    };
    mutate(accountObject);
  }

  const { mutate } = useMutation({
    mutationFn: login,
  });

  async function login(body: Account) {
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
        setDisabled(false)
        setButtonText('There was an error')
        throw new Error(`${response.status}`);
      }
      setButtonText("Account Created!")
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  }

return (
<div className="flex justify-center">
<form className="w-[260px]" onSubmit={handleSubmit}>
    <div className="flex items-baseline justify-between">
      <label htmlFor="username"className="text-[15px] font-medium leading-[35px] text-black">
        Username
      </label>
      </div>
      <input
        className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
        type="text"
        name="username"
        disabled={disabled}
        ref={usernameRef}
        required
      />

    <div className="flex items-baseline justify-between">
      <label htmlFor="password" className="text-[15px] font-medium leading-[35px] text-black">
        Password
      </label>
    </div>
      <input
        className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
        type="password"
        name="password"
        ref={passwordRef}
        disabled={disabled}
        required
      />
    <div className="flex items-baseline justify-between">
      <label htmlFor="passwordConfirm" className="text-[15px] font-medium leading-[35px] text-black">
        Confirm Password
      </label>
    </div>
      <input
        className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
        type="password"
        name="passwordConfirm"
        disabled={disabled}
        required
      />
    <div className="flex items-baseline justify-between">
      <label className="text-[15px] font-medium leading-[35px] text-black">
        Email
      </label>
    </div>
      <input
        className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
        type="email"
        name="email"
        ref={emailRef}
        disabled={disabled}
        required
      />
    <button className="box-border w-full text-white shadow-blackA4 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-black px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
      {buttonText}
    </button>
</form>
</div>  
)
}

export default CreateAccount;
