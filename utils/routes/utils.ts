import { IRoute, TRoutesDict } from "./types";

export function findRouteByPathname(
  routes: TRoutesDict,
  pathname: string
): IRoute {
  const foundRoute = Object.values(routes).find((r) => r.path === pathname);
  if (!foundRoute) {
    throw new Error(`No route information found for pathname ${pathname}.`);
  }
  return foundRoute;
}
