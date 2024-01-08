import Button from "../components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { EMAIL_REG } from "../../constants";
import FormField from "./FormField";
import { useState } from "react";
import clsx from "clsx";

export interface SinginFormInterface {
  email: string;
  password: string;
}

export interface FormSuccessInterface {
  statusCode: number | null;
  message: string;
}
const SignInForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitSuccessful },
  } = useForm<SinginFormInterface>({
    defaultValues: { email: "", password: "" },
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<FormSuccessInterface | null>(null);

  /* Handle Events */
  const onSubmit: SubmitHandler<SinginFormInterface> = async (data) => {
    success && setSuccess(null);
    setLoading(true);
    try {
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve({
              status: 200,
              message: "User Registered",
            });
          }
          reject({
            status: 500,
            message: "Somthign Went Wrong try again",
          });
        }, 2000);
      });
      setSuccess({ statusCode: 200, message: result.message });
      console.log(result);
    } catch (err) {
      setError("root.serverError", {
        type: err.status.toString(),
        message: err.message,
      });
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <form className="space-y-1 md:space-y-2">
      {/* fix the email type issue wheather to give type as email or text */}
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
          minLength: {
            value: 8,
            message: "Enter min 8 characters",
          },
        })}
      />

      <div className="flex items-center justify-end">
        <Link to="forgotpassword" className="text-primary dark:text-primary-500 text-sm font-medium hover:underline">
          Forgot password?
        </Link>
      </div>

      <h4
        role="alert"
        className={clsx(" text-center text-base font-semibold empty:after:content-['*']", isSubmitSuccessful ? "text-green-700" : "text-red-600")}
      >
        {(success && success.message) || (errors.root && errors.root.serverError.message)}
      </h4>

      <Button disabled={loading} variant="primary" size="lg" stretch="full" rounded="xl" onClick={handleSubmit(onSubmit)}>
        {loading ? "Loading..." : "Sign in"}
      </Button>
    </form>
  );
};

export default SignInForm;
