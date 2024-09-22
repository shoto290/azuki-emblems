import publicClient from "@/lib/publicClient";
import { NextRequest, NextResponse } from "next/server";
import ABI from "../../../abis/GREEN_BEAN_ABI.json";

// Contract address for checking green bean status
const CONTRACT_ADDRESS = "0xdfaa1a2d917df08ea9eae22fec2dd729aa93f97b";

// API Route Handler, return the index for all unclaimed Azukis
export async function GET(request: NextRequest) {
  const allBeansClaimed = await getAllGreenBeanNotClaimed();
  const indexForUnClaimedOGs = getUnclaimedIndices(allBeansClaimed);
  return NextResponse.json({ indexForUnClaimedOGs });
}

const cache = new Map<
  string,
  {
    value: any;
    expiry: number;
  }
>();

async function getAllGreenBeanNotClaimed(): Promise<boolean[]> {
  const cacheValue = cache.get("allBeansClaimed");
  if (cacheValue && cacheValue.expiry > Date.now()) {
    return cacheValue.value;
  }

  try {
    const isClaimedArray = [];
    const promises = [];

    for (let i = 0; i < 10; i++) {
      const beanIdArray = Array(1000)
        .fill(0)
        .map((_, index) => index + i * 1000);

      promises.push(
        publicClient.readContract({
          address: CONTRACT_ADDRESS as `0x${string}`,
          abi: ABI,
          functionName: "getCanClaims",
          args: [beanIdArray],
        }) as Promise<boolean[]>
      );
    }

    const results = await Promise.all(promises);
    for (const result of results) {
      isClaimedArray.push(...result);
    }

    cache.set("allBeansClaimed", {
      value: isClaimedArray,
      expiry: Date.now() + 1000 * 60 * 5,
    });

    return isClaimedArray as boolean[];
  } catch (error) {
    console.error("Error in checkGreenBeanClaimed:", error);
    throw error;
  }
}

function getUnclaimedIndices(boolArray: boolean[]): number[] {
  return boolArray.reduce(
    (indices: number[], currentValue: boolean, index: number) => {
      if (currentValue) {
        indices.push(index);
      }
      return indices;
    },
    []
  );
}
