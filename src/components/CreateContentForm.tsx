import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "react-router-dom";
import validateTitle from "../utils/formValidation/validateTitle";
import useGetHives from "../hooks/useGetHives";

type Content = {
  Hive: string;
  Title: string;
  Message: string;
  Author: string;
};

const CreateContentForm = () => {
  const [buttonText, setButtonText] = useState<string>("Create Content");

  const baseURL = import.meta.env.VITE_BASEURL;
  const navigate = useNavigate();

  // Get All Hives
  const { data, error, isLoading, isFetching, isError } = useGetHives(
    baseURL + "/hive",
  );

  const form = useForm({
    defaultValues: {
      Hive: data?.Name ?? 'Gaming',
      Author: `${localStorage.getItem("username")}`,
      Title: "",
      Message: "",
    },
    onSubmit: async ({ value }) => {
      postContent(value);
    },
  });

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
      setButtonText("There was an error");
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
            htmlFor="hive"
            className="text-[15px] font-normal leading-[35px] text-black"
          >
            Hive
          </label>
        </div>
        <form.Field
          name="Hive"
        >
          {(hive) => (
            <>
                    <select
          name="hive"
          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          value={hive.state.value}
          onChange={(e) => hive.handleChange(e.target.value)}
          data-testid="createContentHive"
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
            </>
          )}
        </form.Field>

        <label
          htmlFor="title"
          className="text-[15px] font-normal leading-[45px] text-black"
        >
          Title
        </label>
        <form.Field
          name="Title"
          validators={{
            onBlur: ({ value }) => {
              const titleValidation = validateTitle(value);
              const errors = [];
              for (const key in titleValidation) {
                if (
                  key !== "input" &&
                  (titleValidation as any)[key].isValid === false
                ) {
                  errors.push((titleValidation as any)[key].errorMsg);
                }
              }
              if (errors.length > 0) {
                return "Title error: " + errors.join(", ");
              }
              return undefined;
            },
          }}
        >
          {(Title) => (
            <>
              <input
                name="Title"
                className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                value={Title.state.value}
                minLength={1}
                maxLength={256}
                onChange={(e) => Title.handleChange(e.target.value)}
                onBlur={Title.handleBlur}
                data-testid="createContentTitle"
                required
              />
              {Title.state.meta.errors ? (
                <em role="alert" className="text-xs text-red-700">
                  {Title.state.meta.errors.join(", ")}
                </em>
              ) : null}
            </>
          )}
        </form.Field>
        <div className="flex items-baseline justify-between">
          <label
            htmlFor="message"
            className="text-[15px] font-normal leading-[45px] text-black"
          >
            Message
          </label>
        </div>
        <form.Field
          name="Message"
          validators={{
            onBlur: ({ value }) => {
              if (!value) {
                return "Message error: message cannot be blank";
              }
              if (value.length > 5000) {
                return "Message error: message cannot be more than 5000 characters";
              }
              return undefined;
            },
          }}
        >
          {(Message) => (
            <>
              <textarea
                name="Message"
                minLength={1}
                maxLength={5000}
                className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[150px] p-2 appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                value={Message.state.value}
                data-testid="createContentMessage"
                onChange={(e) => Message.handleChange(e.target.value)}
                onBlur={Message.handleBlur}
                required
              />
              {Message.state.meta.errors ? (
                <em role="alert" className="text-xs text-red-700">
                  {Message.state.meta.errors.join(", ")}
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
            data-testid="createContentBtn"
            >
              {isSubmitting ? "..." : buttonText}
            </button>
          )}
        />
      </form>
    </div>
  );
};

export default CreateContentForm;
