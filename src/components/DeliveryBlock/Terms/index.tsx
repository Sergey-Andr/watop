import { memo, ReactElement } from "react";

const Tersm = (): ReactElement => {
  return (
    <article className="h-fit">
      <h2 className="text-5xl mb-8">Условия за доставка</h2>
      <ul className="max-w-lg w-full text-lg font-sans font-medium text-black/60">
        <li className="mb-4">
          —Използваме най-бързите <strong>методи на доставка</strong>, за да
          гарантираме, че вашите вкусотии ще пристигнат в перфектно състояние,
          готови за консумация
        </li>
        <li className="mb-4">
          — Моля, отделете между <strong>2 и 3 работни</strong> дни след
          поставянето на вашата поръчка
        </li>
        <li className="mb-4">
          — Всички наши торти за празненства ще бъдат доставени{" "}
          <strong>на избраната от вас дата</strong>
        </li>
        <li>
          — Тортите могат да се съхраняват в хладилника{" "}
          <strong>до 5 дни</strong> и до две седмици във фризер
        </li>
      </ul>
    </article>
  );
};

export default memo(Tersm);
