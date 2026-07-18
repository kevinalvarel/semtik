import { ReactNode } from "react";
import { SmoothScroll } from "../layouts/smooth-scroll";
import { ThemeProvider } from "@teispace/next-themes";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: ReactNode }): ReactNode {
  return (
    <ThemeProvider defaultTheme="light">
      <SmoothScroll>
        <Toaster richColors position="top-right" />
        {children}
      </SmoothScroll>
    </ThemeProvider>
  );
}
