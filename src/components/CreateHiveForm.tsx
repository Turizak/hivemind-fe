import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const CreateHiveForm = () => {
  const [buttonText, setButtonText] = useState<string>("Submit");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [textareaValue, setTextareaValue] = useState<string>("");
  const hiveRef = useRef<HTMLInputElement>(null);

  type Hive = {
    Name: string;
    Creator: string;
    Description: string;
  };

  const baseURL = import.meta.env.VITE_BASEURL;
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDisabled(true);
    const hiveObject: Hive = {
      Name: `${hiveRef?.current?.value}`,
      Creator: `${localStorage.getItem("username")}`,
      Description: textareaValue,
    };
    mutate(hiveObject);
  }
  const { mutate } = useMutation({
    mutationFn: postHive,
  });

  async function postHive(body: Hive) {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await fetch(baseURL + "/hive", {
        method: "POST",
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        setDisabled(false);
        throw new Error(`${response.status}`);
      }
      setButtonText("Success!");
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  }

  function textareaHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextareaValue(e.target.value);
  }

  return (
    <div className="flex justify-center">
      <form className="w-[260px]" onSubmit={handleSubmit}>
        <label
          htmlFor="title"
          className="text-[15px] font-normal leading-[45px] text-black"
        >
          Hive Name
        </label>
        <input
          type="text"
          name="title"
          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          minLength={1}
          maxLength={30}
          pattern="^[a-zA-Z]+$"
          disabled={disabled}
          ref={hiveRef}
          required
        />
        <label
          htmlFor="message"
          className="text-[15px] font-normal leading-[45px] text-black"
        >
          Description
        </label>
        <textarea
          name="title"
          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[150px] p-2 appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          minLength={1}
          maxLength={256}
          disabled={disabled}
          value={textareaValue}
          onChange={textareaHandler}
          required
        />
        <button
          type="submit"
          className="box-border w-full text-white shadow-blackA4 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-black px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default CreateHiveForm;
