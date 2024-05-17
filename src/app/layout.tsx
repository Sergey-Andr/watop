"use server";
import "./style.css";
import Header from "@/components/Header";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-playfair text-black bg-white border-box w-4/5 m-auto overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
