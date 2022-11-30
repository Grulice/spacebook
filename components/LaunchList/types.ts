import { FindAllLaunchesQuery } from "../../utils/graphql/generated/client";
import { Definitely } from "../../utils/types/definitely";

export type TLaunches = Definitely<FindAllLaunchesQuery["launches"]>;
