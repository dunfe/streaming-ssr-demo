import Mock from "@/components/Mock";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Streaming SSR demo</h1>
      <Suspense fallback={<Loading />}>
        <Mock />
      </Suspense>
    </div>
  );
}
