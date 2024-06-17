import { memo, ReactElement } from "react";
import { CgArrowsExchangeAltV } from "react-icons/cg";

const Login = (): ReactElement => {
  return (
    <section className="text-xl flex items-center">
      <div className="mr-8">
        <h3 className="mb-2">qukviktv@gmail.com</h3>
        <div className="flex items-center text-lg text-rose-600 hover:underline font-medium cursor-pointer">
          <CgArrowsExchangeAltV />
          <p>change email</p>
        </div>
      </div>
      <div>
        <span className="mb-2">*******</span>
        <div className="flex items-center text-lg text-rose-600 hover:underline font-medium cursor-pointer">
          <CgArrowsExchangeAltV />
          <p>change password</p>
        </div>
      </div>
    </section>
  );
};

export default memo(Login);
