"use client";

import { createConfig, mainnet, WagmiConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { CollectionsProvider } from "./contexts/CollectionsContext";

const config = createConfig(
  getDefaultConfig({
    alchemyId: process.env.ALCHEMY_ID,
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID || "",
    appName: "Garden Emblems",
    chains: [mainnet],
  })
);

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider theme="midnight">
        <CollectionsProvider>{children}</CollectionsProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
