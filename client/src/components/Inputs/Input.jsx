import { useState } from "react";
import { useFormContext } from "react-hook-form";

import ErrorMessage from "./ErrorMessage";
import Icon from "../Icon";

export default function Input({
  name,
  icon,
  label,
  rules,
  className,
  type = "text",
  placeholder = "",
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();


  const [showPassword, setShowPassword]= useState(false)

  return (
    <div className="w-full relative">
      <div className="w-full">
        <label
          htmlFor={name}
          className="block text-sm font-medium mb-1 text-black"
        >
          {label}
        </label>
        <div className="relative">
          <input
            id={name}
            type={(type==="password"&&!showPassword)?type:"text"}
            placeholder={placeholder}
            {...register(name, { ...rules })}
            className={`h-11 w-full rounded-lg relative border placeholder:text-gray-500 bg-slate-50 pl-10 text-sm text-gray-500 pr-8 focus:border focus:outline-hidden  ${errors[name] ? "border-red-800 " : "focus:border-green-400 border-slate-200"} ${className}`}
          />
          <Icon
            name={icon}
            className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-500  "
          />
          {type === "password" && <Icon
            onClick={()=>setShowPassword(!showPassword)}
            name={showPassword?"Eye":"EyeClosed"}
            className="absolute cursor-pointer right-3 top-1/2 size-4 -translate-y-1/2 text-indigo-700"
          />}
        </div>
      </div>
      {errors[name] && (
        <ErrorMessage
          className="absolute top-17 font-medium"
          message={errors[name].message}
        />
      )}
    </div>
  );
}
