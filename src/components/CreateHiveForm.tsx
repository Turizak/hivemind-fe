import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "@tanstack/react-form";
import validateHive from "../utils/formValidation/validateHive";

type Hive = {
  Name: string;
  Creator: string;
  Description: string;
};

const CreateHiveForm = () => {
  const [buttonText, setButtonText] = useState<string>("Submit");

  const baseURL = import.meta.env.VITE_BASEURL;
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      Name: "",
      Creator: `${localStorage.getItem("username")}`,
      Description: "",
    },
    onSubmit: async ({ value }) => {
      postHive(value);
    },
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
          htmlFor="title"
          className="text-[15px] font-normal leading-[45px] text-black"
        >
          Hive Name
        </label>
        <form.Field
          name="Name"
          validators={{
            onBlur: ({ value }) => {
              const hiveValidation = validateHive(value);
              const errors = [];
              for (const key in hiveValidation) {
                if (
                  key !== "input" &&
                  (hiveValidation as any)[key].isValid === false
                ) {
                  errors.push((hiveValidation as any)[key].errorMsg);
                }
              }
              if (errors.length > 0) {
                return "Hive Name error: " + errors.join(", ");
              }
              return undefined;
            },
          }}
        >
          {(Name) => (
            <>
              <input
                name="Name"
                className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                value={Name.state.value}
                minLength={1}
                maxLength={30}
                pattern="^[a-zA-Z]+$"
                onChange={(e) => Name.handleChange(e.target.value)}
                onBlur={Name.handleBlur}
                data-testid="createHiveName"
                required
              />
              {Name.state.meta.errors ? (
                <em role="alert" className="text-xs text-red-700">
                  {Name.state.meta.errors.join(", ")}
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
            Description
          </label>
        </div>
        <form.Field
          name="Description"
          validators={{
            onBlur: ({ value }) => {
              if (!value) {
                return "Description cannot be blank";
              }
              if (value.length > 256) {
                return "Description cannot be more than 256 characters";
              }
              return undefined;
            },
          }}
        >
          {(Description) => (
            <>
              <textarea
                name="description"
                minLength={1}
                maxLength={256}
                className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[150px] p-2 appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                value={Description.state.value}
                required
                onChange={(e) => Description.handleChange(e.target.value)}
                onBlur={Description.handleBlur}
                data-testid="createHiveDescription"
              />
              {Description.state.meta.errors ? (
                <em role="alert" className="text-xs text-red-700">
                  {Description.state.meta.errors.join(", ")}
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
              data-testid="createHiveBtn"
            >
              {isSubmitting ? "..." : buttonText}
            </button>
          )}
        />
      </form>
    </div>
  );
};

export default CreateHiveForm;
