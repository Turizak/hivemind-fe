import * as Form from "@radix-ui/react-form";

const LoginForm = () => (
  <div className="flex justify-center">
    <Form.Root className="w-[260px]">
      <Form.Field className="grid mb-[10px]" name="username">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
            Username
          </Form.Label>
          <Form.Message
            className="text-[13px] text-black opacity-[0.8]"
            match="valueMissing"
          >
            Please enter your username
          </Form.Message>
          <Form.Message
            className="text-[13px] text-black opacity-[0.8]"
            match="typeMismatch"
          >
            Please provide a valid username
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            type="username"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="email">
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

export default LoginForm;
