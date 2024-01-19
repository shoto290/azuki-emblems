import { useBreakpoints } from "@/hooks/useBreakpoints";
import { TableCell, TableRow } from "@/lib/ui/components/ui/table";

export default function RowTokenSkeleton() {
  const { isMobile } = useBreakpoints();

  return (
    <TableRow>
      <TableCell className="flex gap-4 items-center font-medium">
        <div className="bg-popover h-[50px] w-[50px] rounded-md animate-pulse" />
        {!isMobile && (
          <p className="bg-popover w-[80px] h-[20px] rounded-md animate-pulse" />
        )}
      </TableCell>
      <TableCell className="text-center">
        <p className="bg-popover w-[40px] h-[20px] rounded-md animate-pulse" />
      </TableCell>
      <TableCell>
        <p className="bg-popover w-[140px] h-[24px] rounded-xl animate-pulse" />
      </TableCell>
      <TableCell className="text-center">
        <p className="bg-popover w-[40px] h-[20px] rounded-md animate-pulse" />
      </TableCell>
      {!isMobile && (
        <TableCell className="text-right">
          <p className="bg-popover w-[170px] h-[20px] rounded-md animate-pulse" />
        </TableCell>
      )}
    </TableRow>
  );

  return (
    <div className="w-full flex gap-4 flex-col items-center p-2">
      <div className="bg-popover min-h-[300px] h-full w-full rounded-md animate-pulse" />
      <div className="w-full gap-1 flex flex-col items-center">
        <p className="bg-popover h-[20px] w-3/4  rounded-md animate-pulse" />
        <p className="bg-popover h-[16px] w-2/4  rounded-md animate-pulse" />
      </div>
    </div>
  );
}
