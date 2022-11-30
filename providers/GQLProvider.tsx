import React, { useContext, useReducer, createContext, useEffect } from "react";
import { gqlclient } from "../utils/graphql/client";
import {
  getSdkWithHooks,
  SdkWithHooks,
} from "../utils/graphql/generated/client";

export type TGQLContext = {
  gql: SdkWithHooks;
};

const GQLSDKContext = createContext<TGQLContext>({
  gql: null as any,
});

export const useGQL = () => useContext(GQLSDKContext);

export const GQLProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <GQLSDKContext.Provider value={{ gql: getSdkWithHooks(gqlclient) }}>
      {children}
    </GQLSDKContext.Provider>
  );
};
