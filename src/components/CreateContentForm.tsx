import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "react-router-dom";
import useGetHives from "../hooks/useGetHives";

type Content = {
  Hive: string;
  Title: string;
  Message: string;
  Author: string;
};

const CreateContentForm = () => {
  const [selectValue, setSelectValue] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("Create Content");

  const baseURL = import.meta.env.VITE_BASEURL;
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      Hive: selectValue,
      Author: `${localStorage.getItem("username")}`,
      Title: "",
      Message: "",
    },
    onSubmit: async ({ value }) => {
      postContent(value);
    },
  });

  // Get All Hives
  const { data, error, isLoading, isFetching, isError } = useGetHives(
    baseURL + "/hive",
  );

  // POST Content
  async function postContent(body: Content) {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await fetch(baseURL + "/content", {
        method: "POST",
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      setButtonText("Success!");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      setButtonText("There was an error")
      console.error(error);
    }
  }

  function selectHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectValue(e.target.value);
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
        <label
          htmlFor="hive"
          className="text-[15px] font-normal leading-[35px] text-black"
        >
          Hive
        </label>
        <select
          name="hive"
          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          value={selectValue}
          onChange={selectHandler}
        >
          {isLoading ? (
            <option value="">Loading...</option>
          ) : isFetching ? (
            <option value="">Loading...</option>
          ) : isError ? (
            <option value="">Error: {error?.message}</option>
          ) : (
            data &&
            data.map((item: any) => (
              <option value={item.Name} key={item.Id}>
                {item.Name}
              </option>
            ))
          )}
        </select>
        <label
          htmlFor="title"
          className="text-[15px] font-normal leading-[45px] text-black"
        >
          Title
        </label>
        <form.Field
          name="Title"
          children={(Title) => (
            <input
              name="Title"
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              value={Title.state.value}
              minLength={1}
              maxLength={256}
              onChange={(e) => Title.handleChange(e.target.value)}
              required
            />
          )}
        />
        <label
          htmlFor="message"
          className="text-[15px] font-normal leading-[45px] text-black"
        >
          Message
        </label>
        <form.Field
          name="Message"
          children={(Message) => (
            <textarea
              name="Message"
              minLength={1}
              maxLength={5000}
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[150px] p-2 appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
              value={Message.state.value}
              required
              onChange={(e) => Message.handleChange(e.target.value)}
            />
          )}
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

export default CreateContentForm;
