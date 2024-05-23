import TextFormater from "@/lib/TextFormater";
import { TypographyInterface } from "@/lib/interface";
import { TypographyVariant } from "@/lib/type";
import { cn } from "@/lib/utils";

const buttonStyles: Record<TypographyVariant, string> = {
  h1: "lg:text-8xl text-6xl font-medium",
  h2: "lg:text-6xl text-4xl font-semibold",
  h3: "lg:text-5xl text-3xl font-semibold",
  h4: "lg:text-[34px] text-2xl font-semibold",
  h5: "lg:text-2xl text-xl font-semibold",
  h6: "lg:text-xl text-lg font-semibold",
  title: "lg:text-2xl text-xl font-bold capitalize tracking-wider leading",
  body1: "text-base align-middle hyphens-auto font-medium text-slate-600",
  body2: "text-sm text-slate-600 font-semibold",
  button: "text-xs uppercase font-semibold tracking-widest",
  caption: "text-sm font-normal",
  overline: "text-xs font-semibold uppercase tracking-widest",
  subtitle1: "text-[18px] font-medium text-slate-600 tracking-wider",
  subtitle2: "text-base font-medium",
};

export const Typography = ({
  children,
  className,
  variant = "subtitle2",
  italic,
}: TypographyInterface) => {
  return (
    <p
      className={cn(
        "text-slate-800 tracking-wide" ,
        italic && "italic",
        buttonStyles[variant],
        className
      )}
    >
      <TextFormater text={children} />
    </p>
  );
};
