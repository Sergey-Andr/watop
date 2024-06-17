import Image from "next/image";
import logo from "@/../public/logo.jpg";
import Form from "@/app/registration/components/Form";

export default async function Registration() {
  return (
    <section className="w-4/5 m-auto flex flex-col justify-center items-center mt-8">
      <header className="flex justify-between items-center w-full mb-16">
        <a href="/" className="mb-4">
          <Image
            src={logo}
            alt="WATOP logo"
            className="rounded-full w-16 h-16"
          />
        </a>
        <h3 aria-label="Already have an account?" className="text-2xl mb-8">
          Already have an account?{" "}
          <a href="/login" className="hover:underline text-rose-600">
            Sign in
          </a>
        </h3>
      </header>
      <main>
        <Form />
      </main>
    </section>
  );
}
