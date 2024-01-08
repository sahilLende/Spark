import clsx from "clsx";

/* Prop Types */

interface buttonProps {
  variant?: "primary" | "secondary" | "ternary";
  size?: "sm" | "base" | "md" | "lg" | "xl";
  stretch?: "half" | "full" | "max";
  rounded?: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void; //  fix typescript
}
/* Theme Object type */
interface btnTheme {
  base: string;
  variants: {
    primary: string;
    secondary: string;
    ternary: string;
  };
  stretch: {
    half: "w-1/2";
    full: "w-full";
    max: "w-max";
  };
  rounded: {
    xs: "rounded-xs";
    sm: "rounded-sm";
    md: "rounded-md";
    lg: "rounded-lg";
    xl: "rounded-xl";
  };
  sizes: {
    sm: string;
    md: string;
    base: string;
    lg: string;
    xl: string;
  };
  defaults: {
    variant: "primary";
    size: "base";
    stretch: "max";
  };
}

const Button = ({
  variant,
  size,
  rounded,
  stretch,
  children,
  onClick,
  disabled = false,
}: buttonProps) => {
  const btnTheme: btnTheme = {
    base: `inline-flex items-center mb-2 justify-center leading-none font-semibold `,
    variants: {
      primary:
        "text-white bg-primary hover:bg-white hover:outline hover:outline-2 hover:outline-green-400 hover:text-black focus:outline-none focus:ring-4 focus:ring-green-500 hover:scale-105 transition-transform duration-300 transition-colors  duration-700 ",
      secondary:
        "text-white bg-black hover:bg-white hover:outline hover:outline-2 hover:outline-black hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-500 hover:scale-105 transition-transform duration-300 transition-colors  duration-700",
      ternary:
        "text-black bg-primaryAscent hover:bg-white hover:outline hover:outline-2 hover:outline-yellow-500 hover:text-black focus:outline-none focus:ring-4 focus:ring-yellow-500 hover:scale-105 transition-transform duration-300 transition-colors  duration-700",
    },
    rounded: {
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    stretch: {
      half: "w-1/2",
      full: "w-full",
      max: "w-max",
    },

    sizes: {
      sm: "text-sm px-3 py-1.5",
      base: "text-base px-4 py-2",
      md: "text-md px-5 py-3",
      lg: "text-lg px-6 py-3",
      xl: "text-xl px-6 py-3",
    },
    defaults: {
      variant: "primary",
      size: "base",
      stretch: "max",
    },
  };

  return (
    //type outlined contained //white or black depending upon dark mode
    //variant -primary secondary-ternary
    //text corlor choose contrasting
    //size - sm  md large stretch
    //rounded sm md xl
    //custom style from scratch

    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        btnTheme.base,

        stretch && btnTheme.stretch[stretch]
          ? btnTheme.stretch[stretch]
          : btnTheme.stretch[btnTheme.defaults.stretch],
        variant && btnTheme.variants[variant]
          ? btnTheme.variants[variant]
          : btnTheme.variants[btnTheme.defaults.variant],
        size && btnTheme.sizes[size]
          ? btnTheme.sizes[size]
          : btnTheme.sizes[btnTheme.defaults.size],
        rounded && btnTheme.rounded[rounded] ? btnTheme.rounded[rounded] : null,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
