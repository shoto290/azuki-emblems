import { Collection } from "@/lib/emblems/enums";
import { Point } from "@/lib/emblems/types";
import { Token } from '@/lib/services/token/types';
import { EmblemType } from "@/lib/emblems/enums";

interface TokenBadgeProps {
  token: Token;
  points: Point[];
  emblemsType: EmblemType;
}

export default function GreenBeanChecker({ token }: TokenBadgeProps) {
  const isGreenBeanClaimed = token.isGreenBeanClaimed;

  // only show the green bean badge if it is Azuki OG collection. need "toLowerCase" comparison
  // since in token contract the value is "0xed5af388653567af2f388e6224dc7c4b3241c544"
  // and in Collection.Azuki, the value is "0xED5AF388653567Af2F388E6224dC7C4b3241C544"
  return (
    <div>
      {token && token.contract.toLowerCase() === Collection.AZUKI.toString().toLowerCase() && (
        <div className={`result ${isGreenBeanClaimed ? 'claimed' : 'unclaimed'}`}>
          {isGreenBeanClaimed ? 'Y' : 'N'}
        </div>
      )}
      <style jsx>{`
        .result.claimed {
          padding: 0 10px 0 10px ;
          border-radius: 20px;
          background-color: #f44336;
        }
        .result.unclaimed {
          padding: 0 10px 0 10px ;
          border-radius: 10px;
          background-color: #4caf50;
        }
      `}</style>
    </div>
  );
}