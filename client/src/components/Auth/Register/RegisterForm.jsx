import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { nopeResolver } from "@hookform/resolvers/nope";

import { BASE_URL } from "../../../consts";

import Input from "../../Inputs/Input";
import { apiFetch } from "../../../helpers/apiFetch";
import { registerValidation } from "../../../../../shared/validations";


export default function RegisterForm() {
  const methods = useForm({ resolver: nopeResolver(registerValidation) });
  const { errors } = methods.formState

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    methods.clearErrors("root")

    apiFetch(BASE_URL + "/auth/register", "POST", data)
      .then(res => {
          if (res.status >= 300) {
            methods.setError("root",{message:res.message||"Registration failed"})
          } else {
            navigate("/auth/login")
          }
    })
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col lg:max-w-md w-full sm:gap-6 gap-8 px-6 items-center justify-center border border-green-200 shadow-md py-6 bg-white rounded-lg"
      >
        <div className="flex flex-col items-center gap-1 w-full">
          {errors?.root && <p className="p-2 bg-red-100 w-full text-center rounded text-red-700 text-base font-semibold">{errors.root.message}</p>}
          <h2 className="font-mono text-lg font-semibold">
            Create Your Account
          </h2>
          <p className="text-gray-500">
            Free forever. No credit card required.
          </p>
        </div>
        <div className="flex flex-col w-full gap-5">
          <div className="flex sm:flex-row flex-col justify-between gap-5 w-full">
            <div className="flex flex-col relative w-full">
              <Input
                icon="User"
                name="first_name"
                label="First Name"
                placeholder="Jane"
              />
            </div>
            <div className="flex flex-col relative w-full">
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
