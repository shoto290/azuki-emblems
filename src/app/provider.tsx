"use client";

import { createConfig, mainnet, WagmiConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { CollectionsProvider } from "./contexts/CollectionsContext";
import config from "../config";

const providerConfig = createConfig(
  getDefaultConfig({
    alchemyId: config.ALCHEMY_ID,
    walletConnectProjectId: config.WALLETCONNECT_PROJECT_ID || "",
    appName: "Garden Emblems",
    chains: [mainnet],
  })
);

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={providerConfig}>
      <ConnectKitProvider theme="midnight">
        <CollectionsProvider>{children}</CollectionsProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
