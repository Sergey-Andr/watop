"use server";
import "./style.css";
import Header from "@/components/Header";
import ProdHead from "@/components/ProdHead";

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
        <title>WATOP</title>
        <ProdHead />
      </head>
      <body className="font-playfair text-black bg-white border-box w-4/5 m-auto overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
