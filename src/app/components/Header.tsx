import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-popover border rounded-b-3xl w-full px-4 pt-4 flex justify-between items-center mb-14 ">
      <img className="w-[120px] h-full" src="/images/logo.png" alt="logo" />
      <ConnectButton />
    </div>
  );
}
