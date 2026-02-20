import Nope from "nope-validator";

export const registerValidation = Nope.object().shape({
  first_name: Nope.string()
    .required("First name is required")
    .atLeast(3, "Use more than 3 characters")
    .atMost(15, "Use less than 15 characters"),
  last_name: Nope.string()
    .required("Last name is required")
    .atLeast(3, "Use more than 3 characters")
    .atMost(15, "Use less than 15 characters"),
  email: Nope.string()
    .required("Email address is required")
    .email("Fill a valid email address"),
  password: Nope.string()
    .required("Password is required")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Must be at least 8 characters with at least one number and one letter.",
    ),
});
