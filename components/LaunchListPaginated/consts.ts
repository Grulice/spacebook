import { EScreenSize } from "../../utils/hooks/useMediaQuery/types";
import { IPaginationProps } from "../Pagination";

export const SIBLING_BOUNDARY_SCREEN_SIZE_MAPPING: {
  [size in EScreenSize]?: Pick<
    IPaginationProps,
    "boundaryCount" | "siblingCount"
  >;
} = {
  [EScreenSize.SM]: {
    boundaryCount: 1,
    siblingCount: 1,
  },
  [EScreenSize.XS]: {
    boundaryCount: 0,
    siblingCount: 0,
  },
  // for all other screen sizes - use defaults
};
