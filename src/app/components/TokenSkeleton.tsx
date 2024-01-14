import Image from "next/image";

export default function TokenSkeleton() {
  return (
    <div className="w-full flex gap-2 flex-col items-center p-2">
      <div className="bg-popover h-[200px] w-full rounded-md animate-pulse" />
      <div className="w-full gap-1 flex flex-col items-center">
        <p className="bg-popover h-[20px] w-3/4  rounded-md animate-pulse" />
        <p className="bg-popover h-[16px] w-2/4  rounded-md animate-pulse" />
      </div>
    </div>
  );
}
