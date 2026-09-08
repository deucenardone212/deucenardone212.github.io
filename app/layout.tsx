import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
export const metadata: Metadata = {
  metadataBase: new URL('https://deucenardone212.github.io'),
  icons: { icon: '/favicon.svg' },
  title: {
    default: 'Thomas Nardone | Mechanical Engineering',
    template: '%s | Thomas Nardone',
  },
  description:
    'Mechanical design, testing, and analysis by Thomas Nardone, Virginia Tech Mechanical Engineering, Class of 2027. Explore CameraPlane CAD, MATLAB-driven CFD, and mechanism design.',
  openGraph: {
    title: 'Thomas Nardone | Mechanical Engineering',
    description:
      'Native CAD. Reproducible analysis. Practical design decisions.',
    type: 'website',
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geistSans.variable + ' ' + geistMono.variable}>
        {children}
      </body>
    </html>
  );
}
