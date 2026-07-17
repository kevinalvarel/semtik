import { ReactNode } from "react";
import { SmoothScroll } from "../layouts/smooth-scroll";
import { ThemeProvider } from "@teispace/next-themes";

export function Providers({ children }: { children: ReactNode }): ReactNode {
  return (
    <ThemeProvider defaultTheme="light">
      <SmoothScroll>{children}</SmoothScroll>
    </ThemeProvider>
  );
}
