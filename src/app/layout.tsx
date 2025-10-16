import type { Metadata, Viewport } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';


const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Khoa Le - Intern Developer',
  description: 'Khoa Le - Intern Developer',
  keywords: [
    'Frontend Developer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'Portfolio',
  ],
  authors: [{ name: 'KhoaLe' }],
  creator: 'KhoaLe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    siteName: 'KhoaLe - Intern Developer Portfolio',
    title: 'KhoaLe - Intern Developer',
    images: [
      {
        url: 'https://example.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KhoaLe - Intern Developer',
    description: 'Khoa le - Intern Developer',
    creator: '@yourtwitter',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}