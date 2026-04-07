import { memo, ReactElement } from "react";

const Tersm = (): ReactElement => {
  return (
    <article className="h-fit">
      <h2 className="text-5xl mb-8">Умови доставки</h2>
      <ul className="max-w-lg w-full text-lg font-sans font-medium text-black/60">
        <li className="mb-4">
          — Ми використовуємо найшвидші <strong>способи доставки</strong>, щоб
          гарантувати, що ваші смаколики прибудуть в ідеальному стані, готові до
          споживання
        </li>
        <li className="mb-4">
          — Будь ласка, дозвольте від <strong>2 до 3 робочих</strong> днів після
          розміщення вашого замовлення
        </li>
        <li className="mb-4">
          — Всі наші святкові торти будуть доставлені{" "}
          <strong>у обраний вами день</strong>
        </li>
        <li>
          — Торти можуть зберігатися в холодильнику <strong>до 5 днів</strong>{" "}
          та до двох тижнів у морозильній камері
        </li>
      </ul>
    </article>
  );
};

export default memo(Tersm);
