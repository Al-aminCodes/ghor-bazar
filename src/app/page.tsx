import HeadLine from "@/components/HeadLine";
import HeroSction from "@/components/HeroSction";
import ProductHome from "@/components/Product";

export default function Home() {
  return (
    <div>
      <HeadLine />
      <main className="container mx-auto ">
        <HeroSction />

        <ProductHome />
      </main>
    </div>
  );
}
