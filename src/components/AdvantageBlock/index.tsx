import quality from "@/../public/advantage-quality.jpg";
import gift from "@/../public/advantage-gift.jpg";
import delivery from "@/../public/advantage-delivery.jpg";
import Article from "@/components/AdvantageBlock/components/Article";

export default async function AdvantageBlock() {
  return (
    <section className="flex flex-col items-center w-full mb-40">
      <h2 className="text-6xl mb-24">Our advantages</h2>
      <div className="flex items-end font-sans">
        <Article
          text="High quality"
          image={quality}
          alt="High quality ingredients and handmade cake preparation"
          subText="Handmade cake & natural ingredients"
        />
        <Article
          text="Sweet gift"
          image={gift}
          alt="Sweet gift in the form of a delicious macaron box"
          subText="Delicious macaron gift box for each client"
          isMain={true}
        />
        <Article
          text="Fast delivery"
          image={delivery}
          alt="Fast delivery ensuring same-day cake delivery in Kyiv"
          subText="Same-day cake delivery in Kyiv"
        />
      </div>
    </section>
  );
}
