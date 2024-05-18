import Cake from "@/app/cake/[id]/components/Cake";
import CakesSpier from "@/app/cake/[id]/components/Swiper";

export default async function CakeInfo() {
  return (
    <section>
      <Cake />
      <CakesSpier />
    </section>
  );
}
