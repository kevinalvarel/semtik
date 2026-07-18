import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        [
          "w-full min-w-0",
          "h-12 px-4",
          "bg-white text-black",
          "font-medium",

          // Neo Brutalism Border
          "border-2 border-black",

          // Shadow Keras
          "shadow-[4px_4px_0px_0px_#000]",

          // Radius
          "rounded-lg",

          // Placeholder
          "placeholder:text-zinc-500",

          // Focus Effect
          "transition-all duration-150",
          "focus:translate-x-[-2px]",
          "focus:translate-y-[-2px]",
          "focus:shadow-[6px_6px_0px_0px_#000]",
          "focus:outline-none",

          // Disabled
          "disabled:cursor-not-allowed",
          "disabled:opacity-50",
          "disabled:bg-zinc-200",

          // File Input
          "file:border-0",
          "file:bg-transparent",
          "file:font-semibold",

          // Error State
          "aria-invalid:border-red-500",
          "aria-invalid:shadow-[4px_4px_0px_0px_#ef4444]",

          "text-sm",
        ].join(" "),
        className,
      )}
      {...props}
    />
  );
}

export { Input };
