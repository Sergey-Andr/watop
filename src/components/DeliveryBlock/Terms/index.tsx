import { memo, ReactElement } from "react";

const Tersm = (): ReactElement => {
  return (
    <article className="h-fit">
      <h2 className="text-7xl mb-12">Delivery terms</h2>
      <ul className="max-w-lg w-full text-lg font-sans font-medium text-black/60">
        <li className="mb-4">
          — We use the <strong>speediest delivery</strong> methods to ensure
          your goodies arrive in perfect condition to devour
        </li>
        <li className="mb-4">
          — Please allow between <strong>2-3 working</strong> days from placing
          your order
        </li>
        <li className="mb-4">
          — All of our celebration cakes will be delivered to you{" "}
          <strong>on your chosen date</strong>
        </li>
        <li>
          — Cakes can be stored in the fridge <strong>for 5 days</strong> and up
          to two weeks in the freezer
        </li>
      </ul>
    </article>
  );
};

export default memo(Tersm);
