import { ethers } from 'ethers';
import { NextRequest, NextResponse } from 'next/server';

// ABI for the specific function we need
const abi = [
  'function getCanClaims(uint256[]) public view returns (bool[])'
];

// Contract address for checking green bean status
const contractAddress = "0xdfaa1a2d917df08ea9eae22fec2dd729aa93f97b";

// API Route Handler, return the index for all unclaimed Azukis
export async function GET(request: NextRequest) {
  const allBeansClaimed = await getAllGreenBeanNotClaimed();
  const indexForUnClaimedOGs = getUnclaimedIndices(allBeansClaimed);
  return NextResponse.json({ indexForUnClaimedOGs });
}

async function getAllGreenBeanNotClaimed(): Promise<boolean[]> {
  const rpcUrl = process.env.ETHEREUM_RPC_URL;

  if (!rpcUrl) {
    throw new Error('ETHEREUM_RPC_URL is not defined in environment variables');
  }
  
  try {
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const contract = new ethers.Contract(contractAddress, abi, provider);
  
    const beanIdArray = Array(10000).fill(0).map((_, index)=> index);
    const isClaimedArray = await contract.getCanClaims(beanIdArray);
    return isClaimedArray;
  } catch (error) {
    console.error('Error in checkGreenBeanClaimed:', error);
    throw error;
  }
}
  
function getUnclaimedIndices(boolArray: boolean[]): number[] {
  return boolArray.reduce((indices: number[], currentValue: boolean, index: number) => {
    if (currentValue) {
      indices.push(index);
    }
    return indices;
  }, []);
}