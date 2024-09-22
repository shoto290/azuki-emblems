import { Suspense } from "react";
import Feed from "./components/Feed";

export default function HomePage() {
  return (
    <div className="w-full">
      <Suspense>
        <Feed />
      </Suspense>
    </div>
  );
}
