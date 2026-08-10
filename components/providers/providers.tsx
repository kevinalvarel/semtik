import { ReactNode } from 'react';
import { ThemeProvider } from '@teispace/next-themes';
import { Toaster } from '@/components/ui/sonner';
import { SmoothScroll } from '../layouts/smooth-scroll';

export function Providers({ children }: { children: ReactNode }): ReactNode {
  return (
    <ThemeProvider defaultTheme='light'>
      <SmoothScroll>
        <Toaster richColors position='top-right' />
        {children}
      </SmoothScroll>
    </ThemeProvider>
  );
}
