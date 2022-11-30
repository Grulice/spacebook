import { getSdk, getSdkWithHooks } from "./generated/client";
import { GraphQLClient } from "graphql-request";

export const gqlclient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_URL || ""
);
export const sdk = getSdkWithHooks(gqlclient);
export const sdkSSR = getSdk(gqlclient);
