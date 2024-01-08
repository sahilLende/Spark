/* typescript fix */
import clsx from "clsx";
interface fromField {
  label: string;
  error: any /* tsx fix */;
  name: string;
  placeholder: string;
  rhfRegister: any;
  type?: "text" | "password";
  disabled?: boolean;
}

const FormField = ({
  label,
  error,
  name,
  placeholder,
  rhfRegister,
  type,
  disabled = false,
}: fromField) => {
  return (
    <div>
      <label
        htmlFor="email"
        className=" block text-sm font-medium text-gray-900 "
      >
        {label}
      </label>

      <input
        {...rhfRegister}
        aria-invalid={error ? "true" : "false"}
        type={type ? type : "text"}
        id={`${name}`}
        disabled={disabled}
        className={clsx(
          "mt-1 block w-full rounded-md border  bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm  focus:outline-none focus:ring-1   disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none",
          error
            ? "border-red-600 text-red-600 focus:border-red-500 focus:ring-red-500"
            : "border-slate-300  focus:border-sky-500 focus:ring-sky-500",
        )}
        placeholder={placeholder}
      />
      <span
        role="alert"
        className="text-sm font-medium text-red-600 empty:invisible empty:after:content-['*'] "
      >
        {error && error.message}
      </span>
    </div>
  );
};

export default FormField;
