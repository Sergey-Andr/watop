import quality from "@/../public/advantage-quality.webp";
import gift from "@/../public/advantage-gift.webp";
import delivery from "@/../public/advantage-delivery.webp";
import Article from "@/components/AdvantageBlock/components/Article";

export default async function AdvantageBlock() {
  return (
    <section className="flex flex-col items-center w-full mb-40">
      <h2 className="text-6xl mb-24">Наші переваги</h2>
      <div className="flex items-end font-sans">
        <Article
          text="Висока якість"
          image={quality}
          alt="Високоякісні інгредієнти та ручне приготування торта"
          subText="Торт ручної роботи та натуральні інгредієнти"
        />
        <Article
          text="Солодкий подарунок"
          image={gift}
          alt="Солодкий подарунок у формі смачної коробки з макарунами"
          subText="Смачна коробка з макарунами для кожного клієнта"
          isMain={true}
        />
        <Article
          text="Швидка доставка"
          image={delivery}
          alt="Швидка доставка, що гарантує доставку торта в той же день у Софії"
          subText="Доставка тортів в той же день у Софії забезпечує зручність"
        />
      </div>
    </section>
  );
}
