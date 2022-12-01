import { useWindowSize } from "../useWindowSize";
import { SCREEN_BREAKPOINTS } from "./consts";
import { EScreenSize } from "./types";

export function useMediaQuery(): EScreenSize | undefined {
  const { width } = useWindowSize();

  if (width) {
    return Object.values(EScreenSize)
      .reverse()
      .find((size) => width >= SCREEN_BREAKPOINTS[size])!;
  }
}
