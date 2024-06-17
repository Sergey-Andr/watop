import Image from "next/image";
import logo from "@/../public/logo.jpg";

export default async function SignIn() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <Image src={logo} alt="WATOP logo" className="rounded-full" />
      <form>
        <label>Username or email address</label>
        <input type="text" />
      </form>
    </section>
  );
}
