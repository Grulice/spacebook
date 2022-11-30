import { IRoute, TRoutesDict } from "./types";

// TODO: use `satisfies Record<string, IRoute>` whenever TS 4.9 arrives
// for now just typecast values to `IRoute` manually
export const ROUTES = {
  // this route list must be exhaustive
  ERROR: {
    path: "/_error",
  } as IRoute,
  HOME: {
    path: "/",
    pageTitle: "Spacebook - Home",
    navTitle: "Home",
  } as IRoute,
  ABOUT: {
    path: "/about",
    pageTitle: "Spacebook - About",
    navTitle: "About",
  } as IRoute,
  CONTACT: {
    path: "/contact-us",
    pageTitle: "Spacebook - Contact us",
    navTitle: "Contact us",
  } as IRoute,
  LAUNCH_DETAILS: {
    path: "/launches/[id]",
    compileUrl: ({ id }) => `/launches/${id}`,
  } as IRoute,
};

export const DEFAULT_PAGE_TITLE = "Spacebook";
