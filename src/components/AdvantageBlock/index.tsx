import quality from "@/../public/advantage-quality.jpg";
import gift from "@/../public/advantage-gift.jpg";
import delivery from "@/../public/advantage-delivery.jpg";
import Article from "@/components/AdvantageBlock/components/Article";

export default async function AdvantageBlock() {
  return (
    <section className="flex flex-col items-center w-full mb-40">
      <h2 className="text-6xl mb-24">Наши предимущества</h2>
      <div className="flex items-end font-sans">
        <Article
          text="Високо качество"
          image={quality}
          alt="Висококачествени съставки и ръчна подготовка на торта"
          subText="Ръчно изработена торта и естествени съставки"
        />
        <Article
          text="Сладък подарък"
          image={gift}
          alt="Сладък подарък във формата на вкусна кутия с макарони"
          subText="Вкусна кутия с макарони за всеки клиент"
          isMain={true}
        />
        <Article
          text="Бърза доставка"
          image={delivery}
          alt="Бърза доставка, гарантираща доставка на торта в същия ден в София"
          subText="Доставка на торти в същия ден в София осигурява удобство"
        />
      </div>
    </section>
  );
}
