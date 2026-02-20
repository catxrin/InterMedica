import { FormProvider, useForm } from "react-hook-form";

import { nopeResolver } from "@hookform/resolvers/nope";

import Input from "../../Inputs/Input";
import { registerValidation } from "../../../../../shared/validations";

export default function RegisterForm() {
  const methods = useForm({ resolver: nopeResolver(registerValidation) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col lg:max-w-md w-full sm:gap-6 gap-8 px-6 items-center justify-center border border-green-200 shadow-md py-6 bg-white rounded-lg"
      >
        <div className="flex flex-col items-center gap-1">
          <h2 className="font-mono text-lg font-semibold">
            Create Your Account
          </h2>
          <p className="text-gray-500">
            Free forever. No credit card required.
          </p>
        </div>
        <div className="flex flex-col w-full gap-5">
          <div className="flex sm:flex-row flex-col justify-between gap-5 w-full">
            <div className="flex flex-col relative">
              <Input
                icon="User"
                name="first_name"
                label="First Name"
                placeholder="Jane"
              />
            </div>
            <div className="flex flex-col relative">
              <Input
                icon="User"
                name="last_name"
                label="Last Name"
                placeholder="Doe"
              />
            </div>
          </div>
          <Input
            icon="Mail"
            name="email"
            label="Email Address"
            placeholder="you@gmail.com"
          />
          <Input
            icon="Lock"
            type="password"
            name="password"
            label="Password"
            placeholder="Create a strong password"
          />
        </div>
        <button
          type="submit"
          className="button-primary w-full mt-4 text-center"
        >
          Create Account
        </button>
      </form>
    </FormProvider>
  );
}
