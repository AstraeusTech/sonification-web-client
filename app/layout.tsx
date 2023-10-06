import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sonification',
  description: 'Sonification web app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-50">
      <body>{children}</body>
    </html>
  );
}
