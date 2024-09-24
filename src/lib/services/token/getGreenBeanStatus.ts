import { Collection } from "@/lib/emblems/enums";
import { GreenBeanStatus, Nft } from "./types";
import ky from "ky";
import { getBaseUrl } from "@/utils/getBaseUrl";

export async function getGreenBeanStatus(collections: {
  tokens: Nft[];
}): Promise<GreenBeanStatus> {
  if (collections.tokens[0].token.contract === Collection.AZUKI) {
    return {};
  }

  const searchParams = new URLSearchParams();
  collections.tokens.forEach(({ token }) => {
    searchParams.append("azukiIds[]", token.tokenId);
  });

  const url = new URL(`/api/greenbean`, getBaseUrl());
  url.search = searchParams.toString();

  // fetch all AzukiIds with unclaimed green bean
  const azukiGreenBeanResponse = await ky.get<GreenBeanStatus>(url.toString());
  const unclaimedAzukiIds = await azukiGreenBeanResponse.json();
  return unclaimedAzukiIds;
}
