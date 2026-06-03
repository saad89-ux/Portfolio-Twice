import type { ReactNode } from 'react';
import '../src/index.css';
import { ThemeProvider } from '../src/components/ThemeProvider';

export const metadata = {
  title: 'Home',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
