import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { ROUTES } from "../utils/routes/consts";
import Head from "next/head";
import { findRouteByPathname } from "../utils/routes/utils";
import { GQLProvider } from "../providers/GQLProvider";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps, router }: AppProps) {
  const { pathname } = router;
  const currentPathInfo = findRouteByPathname(ROUTES, pathname);
  const shouldRenderLayout = !currentPathInfo?.layoutExcluded;

  const componentElement = (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
      }}
    >
      <GQLProvider>
        <Head>
          {/* Allow pages to define pageTitle dynamically, if needed */}
          {currentPathInfo.pageTitle && (
            <title>{currentPathInfo.pageTitle}</title>
          )}
        </Head>
        <Component {...pageProps} />
      </GQLProvider>
    </SWRConfig>
  );

  return shouldRenderLayout ? (
    <Layout>{componentElement}</Layout>
  ) : (
    componentElement
  );
}
