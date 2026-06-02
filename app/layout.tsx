import type { ReactNode } from 'react';
import '../src/index.css';

export const metadata = {
  title: 'Home',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
