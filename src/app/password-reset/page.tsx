import Image from "next/image";
import logo from "../../../public/logo.jpg";
import Form from "@/app/password-reset/components/Form";

export default async function Page() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <header className="flex flex-col items-center">
        <a href="/" className="mt-16 mb-4">
          <Image
            src={logo}
            alt="WATOP logo"
            className="rounded-full w-16 h-16"
          />
        </a>
        <h1 aria-label="Sign in to WATOP" className="text-3xl mb-8">
          Промени парола
        </h1>
      </header>
      <main>
        <Form />
      </main>
    </section>
  );
}
