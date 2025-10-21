import publicClient from "@/lib/publicClient";
import { NextRequest, NextResponse } from "next/server";
import ABI from "../../../abis/GREEN_BEAN_ABI.json";
import { GreenBeanStatus } from "@/lib/services/token/types";

// Contract address for checking green bean status
const CONTRACT_ADDRESS = "0xdfaa1a2d917df08ea9eae22fec2dd729aa93f97b";

// Maximum number of azuki IDs to prevent DoS
const MAX_AZUKI_IDS = 100;

// API Route Handler, return the index for all unclaimed Azukis
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const azukiIds = searchParams.getAll("azukiIds[]");

    // Input validation
    if (!azukiIds || azukiIds.length === 0) {
      return NextResponse.json(
        { error: "No azukiIds provided" },
        { status: 400 }
      );
    }

    if (azukiIds.length > MAX_AZUKI_IDS) {
      return NextResponse.json(
        { error: `Maximum ${MAX_AZUKI_IDS} azukiIds allowed` },
        { status: 400 }
      );
    }

    // Validate each ID is a valid number
    const validatedIds = azukiIds.filter((id) => {
      const num = parseInt(id, 10);
      return !isNaN(num) && num >= 0 && num.toString() === id;
    });

    if (validatedIds.length !== azukiIds.length) {
      return NextResponse.json(
        { error: "Invalid azukiId format. All IDs must be valid positive integers" },
        { status: 400 }
      );
    }

    const indexForUnClaimedOGs = await getAllGreenBeanNotClaimed(validatedIds);
    return NextResponse.json(indexForUnClaimedOGs);
  } catch (error) {
    console.error("Error in greenbean API route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

async function getAllGreenBeanNotClaimed(
  azukiIds: string[]
): Promise<GreenBeanStatus> {
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
}
