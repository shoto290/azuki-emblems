"use client";

import { CollectionsProvider } from "./contexts/CollectionsContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <CollectionsProvider>{children}</CollectionsProvider>;
}
