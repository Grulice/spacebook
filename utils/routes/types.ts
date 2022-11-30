import { ROUTES } from "./consts";

export interface IRoute {
  path: string;

  /** Should be defined for paths conainig dynamic slugs (ex. /details/[id]). Use this when generating a URL for <Link /> */
  compileUrl?: (params: Record<string, string>) => string;

  /** Indicates if the general app layout should be omitted for the route */
  layoutExcluded?: boolean;

  /** Page title (browser tab name) */
  pageTitle?: string;

  /** Title in the nav list. Won't render into navbar if falsy */
  navTitle?: string;
}

export type TRoutesDict = Record<keyof typeof ROUTES, IRoute>;
