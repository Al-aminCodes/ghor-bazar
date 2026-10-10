import AuthToast from "@/components/authClient";

import HeroSction from "@/components/HeroSction";
import ProductHome from "@/components/Product";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={null}>
        <AuthToast />
      </Suspense>

      <main className="container mx-auto ">
        <HeroSction />

        <ProductHome />
      </main>
    </div>
  );
}
