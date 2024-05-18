import { useContext, useState } from "react";
import useGetAccount from "../hooks/useGetAccount";
import { useForm } from "@tanstack/react-form";
import SessionContext from "../context/SessionProvider";

const UserProfile = () => {
  const [buttonText, setButtonText] = useState("Change Password")
  const baseURL = import.meta.env.VITE_BASEURL;
  const { session }: any = useContext(SessionContext)

  const form = useForm({
    defaultValues: {
      password: "",
    },
    onSubmit: async ({ value }) => {
      changePassword(value);
    },
  });

  const { data, error, isLoading, isFetching, isError } = useGetAccount(
    baseURL + "/account",
  );

  async function changePassword<T>(body: T) {
  const token = session.accessToken;
    try {
      const response = await fetch(baseURL + "/account/change-password", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        setButtonText(`Error: ${response.status}`)
        throw new Error(`${response.status}`);
      }
      if (response.ok) {
        setButtonText('Password Updated')
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>
        {isLoading ? (
          <span className="flex justify-center p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md">
            Loading...
          </span>
        ) : isFetching ? (
          <span className="flex justify-center p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md">
            Loading...
          </span>
        ) : isError ? (
          <span className="flex justify-center p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md">
            Error: {error?.message}
          </span>
        ) : (
          data && (
            <p className="flex justify-center p-3 mx-auto my-2 max-w-xl bg-gray-300 xs:rounded-none sm:rounded-md">
              {"Email:  " + data.Email}
            </p>
          )
        )}
      </div>
      <div className="flex justify-center">
        <form
          className="w-[260px]"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <div>
            <label className="text-[15px] font-medium leading-[35px] text-black">
             New Password
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
            data-testid="userProfileBtn1"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </>
  );
};

export default UserProfile;
