import Image from "next/image";
import logo from "../../../public/logo.webp";
import Form from "@/app/password-reset/components/Form";

export default async function Page() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <header className="flex flex-col items-center">
        <a href="/" className="mt-16 mb-4">
          <Image
            src={logo}
            alt="Логотип WATOP"
            className="rounded-full w-16 h-16"
          />
        </a>
        <h1 aria-label="Увійдіть у WATOP" className="text-3xl mb-8">
          Змінити пароль
        </h1>
      </header>
      <main>
        <Form />
      </main>
    </section>
  );
}
