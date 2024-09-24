import publicClient from "@/lib/publicClient";
import { NextRequest, NextResponse } from "next/server";
import ABI from "../../../abis/GREEN_BEAN_ABI.json";
import { GreenBeanStatus } from "@/lib/services/token/types";

// Contract address for checking green bean status
const CONTRACT_ADDRESS = "0xdfaa1a2d917df08ea9eae22fec2dd729aa93f97b";

// API Route Handler, return the index for all unclaimed Azukis
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const azukiIds = searchParams.getAll("azukiIds[]");

  const indexForUnClaimedOGs = await getAllGreenBeanNotClaimed(azukiIds || []);
  return NextResponse.json(indexForUnClaimedOGs);
}

async function getAllGreenBeanNotClaimed(
  azukiIds: string[]
): Promise<GreenBeanStatus> {
  try {
    const isClaimableArray = (await publicClient.readContract({
      address: CONTRACT_ADDRESS as `0x${string}`,
      abi: ABI,
      functionName: "getCanClaims",
      args: [azukiIds],
    })) as boolean[];

    const claimableAzuki = azukiIds.reduce((acc, azukiId, index) => {
      acc[azukiId] = isClaimableArray[index];
      return acc;
    }, {} as GreenBeanStatus);

    return claimableAzuki;
  } catch (error) {
    console.error("Error in checkGreenBeanClaimed:", error);
    throw error;
  }
}
