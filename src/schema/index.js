import * as yup from "yup";

const passwordRules =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
//   Password must contain at least 8 characters, one uppercase, one number and one special case character

export const validationSchema = yup.object().shape({
  Username: yup
    .string("Please enter your username")
    .required("Required")
    .min(2, "Username must be at least 2 characters")
    .max(12, "Username must not be bigger than 12 characters"),
  Email: yup.string().email("Please enter valid email").required("Required"),
  Password: yup
    .string("Please enter your password")
    .min(8)
    .matches(
      passwordRules,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .required("Required"),
  ConfirmPassword: yup
    .string()
    .oneOf([yup.ref("Password"), null], "Password must match")
    .required("Required"),
  termsAndConditions: yup.boolean().required().isTrue(),
});
