"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "light" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "!border-4 !border-black !bg-white !text-black !rounded-none !font-bold !shadow-[6px_6px_0px_0px_#000]",

          title: "!font-black !text-black",

          description: "!text-black/80 !font-medium",

          success: "!bg-neo-green !border-black",

          error: "!bg-neo-red !border-black",

          warning: "!bg-neo-yellow !border-black",

          info: "!bg-neo-blue !border-black",

          loading: "!bg-white !border-black",

          actionButton:
            "!border-4 !border-black !bg-black !text-white !rounded-none !font-bold",

          cancelButton:
            "!border-4 !border-black !bg-white !text-black !rounded-none !font-bold",

          closeButton: "!border-4 !border-black !bg-white !text-black",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
