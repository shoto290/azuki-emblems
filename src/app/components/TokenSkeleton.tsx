export default function TokenSkeleton() {
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
