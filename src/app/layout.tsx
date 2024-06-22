"use server";
import "./style.css";
import ProdHead from "@/components/ProdHead";
import { Metadata } from "next";
import process from "process";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "WATOP",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href={`/logo-circle.png`} rel="icon" type="image/svg+xml" />
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_GOOGLE_KEY}&libraries=places`}
          async
          defer
        />
        <meta
          name="google-site-verification"
          content="xabuFThnzUvomzslN4oDvdyvBKzWhRyUs0_GyVzKK1g"
        />
        <ProdHead />
      </head>
      <body className="font-playfair text-black bg-white border-box overflow-x-hidden m-auto">
        {children}
      </body>
    </html>
  );
}
