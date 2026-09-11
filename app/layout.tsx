import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'devbyvojin | Premium Websites & Real Estate Sales Apps',
  description:
    'Premium B2B websites, real estate sales applications and monthly care by devbyvojin in Novi Sad, Serbia.',
  openGraph: {
    title: 'devbyvojin | Digital sales systems for serious companies',
    description:
      'Premium websites and real estate sales applications built around clarity, proof and qualified project inquiries.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'devbyvojin | Premium B2B Digital Products',
    description:
      'Websites, real estate sales apps and care for serious companies.',
  },
};

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-config" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
