import { FindAllPastLaunchesQuery } from "../../utils/graphql/generated/client";
import { Definitely } from "../../utils/types/definitely";

export type TLaunches = Definitely<
  Definitely<FindAllPastLaunchesQuery["launchesPastResult"]>["data"]
>;
