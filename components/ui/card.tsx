import * as React from "react";

import { cn } from "@/lib/utils";

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-(--card-spacing)",
        "overflow-hidden",
        "bg-white text-black",

        "border-4 border-black",
        "rounded-xl",

        "shadow-[4px_4px_0px_0px_#000]",

        "transition-all duration-150",

        "hover:-translate-x-0.5",
        "hover:-translate-y-0.5",
        "hover:shadow-[6px_6px_0px_0px_#000]",

        "py-(--card-spacing)",
        "[--card-spacing:--spacing(4)]",

        "has-data-[slot=card-footer]:pb-0",
        "has-[>img:first-child]:pt-0",
        "data-[size=sm]:[--card-spacing:--spacing(3)]",

        "*:[img:first-child]:rounded-t-lg",
        "*:[img:last-child]:rounded-b-lg",

        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "grid auto-rows-min gap-2",
        "px-(--card-spacing)",
        "border-b-4 border-black",
        "font-bold",
        "bg-neo-yellow",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        "has-data-[slot=card-description]:grid-rows-[auto_auto]",

        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-lg font-black text-black",
        "leading-tight",
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm font-medium text-zinc-700", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing)", "py-4", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center",

        "border-t-4 border-black",

        "bg-white",

        "p-(--card-spacing)",

        className,
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
