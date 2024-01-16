import config from "@/config";
import { useWindowSize } from "usehooks-ts";

export function useBreakpoints(): {
  isMobile: boolean;
  isTablet: boolean;
} {
  const { width } = useWindowSize();

  return {
    isMobile: width <= config.MOBILE_BREAKPOINT,
    isTablet:
      width > config.MOBILE_BREAKPOINT && width <= config.TABLET_BREAKPOINT,
  };
}
