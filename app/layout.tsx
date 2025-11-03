import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://figr-out.com"),
  title: "FigrOut — Simple ERP & Accounting for Small Businesses",
  description: "Pre-register for FigrOut — simplified ERP and accounting software for small business and contractors.",
  keywords: ["ERP", "accounting", "small business", "contractors", "BildOut", "financial software"],
  authors: [{ name: "FigrOut" }],
  openGraph: {
    title: "FigrOut — Simple ERP & Accounting for Small Businesses",
    description: "Pre-register for FigrOut — simplified ERP and accounting software for small business and contractors.",
    url: "https://figr-out.com",
    siteName: "FigrOut",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FigrOut - Your figures, figured out",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FigrOut — Simple ERP & Accounting for Small Businesses",
    description: "Pre-register for FigrOut — simplified ERP and accounting software for small business and contractors.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://figr-out.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FigrOut",
              "url": "https://figr-out.com",
              "logo": "https://figr-out.com/logo.png",
              "description": "Simplified ERP and accounting software for small business and contractors",
              "sameAs": [
                "https://bildout.com"
              ],
              "parentOrganization": {
                "@type": "Organization",
                "name": "BildOut",
                "url": "https://bildout.com"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
