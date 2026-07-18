import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group/button inline-flex shrink-0 items-center justify-center",
    "whitespace-nowrap font-bold",
    "transition-all duration-150",
    "outline-none select-none",
    "border-2 border-black",
    "focus-visible:outline-none",
    "disabled:pointer-events-none disabled:opacity-50",

    // Neo Brutalism Shadow
    "shadow-[4px_4px_0px_0px_#000]",

    //Hover Effect
    "hover:-translate-x-0.5",
    "hover:-translate-y-0.5",
    "hover:shadow-[6px_6px_0px_0px_#000]",

    // Press Effect
    "active:translate-x-[4px]",
    "active:translate-y-[4px]",
    "active:shadow-none",

    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default: ["bg-neo-yellow", "text-black", "hover:bg-yellow-400"].join(
          " ",
        ),

        secondary: ["bg-neo-blue", "text-black", "hover:bg-cyan-400"].join(" "),

        outline: ["bg-white", "text-black", "hover:bg-zinc-100"].join(" "),

        ghost: [
          "bg-transparent",
          "text-black",
          "shadow-none",
          "border-none",
          "hover:bg-zinc-100",
        ].join(" "),

        destructive: ["bg-neo-red", "text-black", "hover:bg-red-500"].join(" "),

        link: [
          "border-none",
          "shadow-none",
          "bg-transparent",
          "underline underline-offset-4",
        ].join(" "),
      },

      size: {
        xs: "h-8 px-3 text-xs rounded-md",
        sm: "h-10 px-4 text-sm rounded-md",
        default: "h-12 px-6 text-sm rounded-lg",
        lg: "h-14 px-8 text-base rounded-lg",

        icon: "size-12 rounded-lg",
        "icon-xs": "size-8 rounded-md",
        "icon-sm": "size-10 rounded-md",
        "icon-lg": "size-14 rounded-lg",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
