import config from "@/config";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(config.ETHEREUM_RPC_URL),
});

export default publicClient;
