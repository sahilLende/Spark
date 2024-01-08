/* understand types */

import { useForm, SubmitHandler } from "react-hook-form";
import { EMAIL_REG, PASSWORD_REG } from "../../constants";
import Button from "../components/Button";
import FormField from "./FormField";
import { useState, useEffect } from "react";
import { FormSuccessInterface } from "./SignInForm";
import clsx from "clsx";

interface SignUpFormInterface {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm = () => {
  const {
    register,
    getValues,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitted },
  } = useForm<SignUpFormInterface>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<FormSuccessInterface | null>(null);
  const password = watch("password");

  /* effects */
  useEffect(() => {
    if (password === getValues("confirmPassword")) {
      clearErrors("confirmPassword");
    }
  }, [password]);

  /* useEffect(() => {
    if (isSubmitSuccessful && isSubmitted)
      reset({
        email: "",
        password: "",
        confirmPassword: "",
      });
  }, [isSubmitSuccessful, isSubmitted]); */
  /* understand the typescript notation behind it  Submit handler*/

  const registerUser: SubmitHandler<SignUpFormInterface> = async (data) => {
    if (data.confirmPassword === data.password) {
      try {
        success && setSuccess(null);
        setLoading(true);
        const result = await new Promise((res, rej) => {
          console.log("started submtting");
          setTimeout(() => {
            if (Math.random() > 0.5) {
              res({
                status: 200,
                message: "user Registered",
              });
            } else {
              rej({
                status: 505,
                message: "server Error",
              });
            }
          }, 1000);
        });
        console.log(result);
        setSuccess(result);
      } catch (err) {
        console.log(err);
        setError("root.serverError", {
          type: "500",
          message: "Somethign went Wrong",
        });
      } finally {
        setLoading(false);
      }
    }

    console.log("async done");
  };

  return (
    <form className="space-y-1 md:space-y-1">
      <FormField
        label="Email"
        name="email"
        placeholder="jhon@example.com"
        error={errors.email ? errors.email : null}
        rhfRegister={register("email", {
          required: " Required",
          pattern: {
            value: EMAIL_REG,
            message: "Enter valid Email",
          },
        })}
      />
      <FormField
        type="password"
        label="Password"
        name="password"
        placeholder="*******"
        error={errors.password ? errors.password : null}
        rhfRegister={register("password", {
          required: "Required",
          pattern: {
            value: PASSWORD_REG,
            message: "Secure? incldue- Num, lc, UC, spcl.",
          },
          minLength: {
            value: 8,
            message: "Enter min 8 characters",
          },
        })}
      />
      <FormField
        type="password"
        label="Confirm Password"
        name="confirmPassword"
        placeholder="*******"
        error={errors.confirmPassword ? errors.confirmPassword : null}
        rhfRegister={register("confirmPassword", {
          required: "Required",
          validate: (value) => {
            return value === password || "Password didn't match";
          },
        })}
      />
      <h4
        role="alert"
        className={clsx(
          " text-center  text-base font-semibold empty:invisible empty:after:content-['*']",
          isSubmitSuccessful ? "text-green-700" : "text-red-600",
        )}
      >
        {(success && success.message) || (errors.root && errors.root.serverError.message)}
      </h4>
      <Button disabled={loading} variant="primary" size="lg" stretch="full" rounded="xl" onClick={handleSubmit(registerUser)}>
        {loading ? "...Loading" : "Sign up"}
      </Button>
    </form>
  );
};

export default SignupForm;
