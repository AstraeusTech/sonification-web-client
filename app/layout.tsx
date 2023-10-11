import type { Metadata } from 'next';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});


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
    <html lang="en" className={`bg-slate-50 scroll-smooth ` + inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
