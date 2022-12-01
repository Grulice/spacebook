import React from "react";
import { PAGINATION_DEFAULT_PAGE_SIZE } from "../../utils/consts";
import { FindAllPastLaunchesQuery } from "../../utils/graphql/generated/client";
import { useMediaQuery } from "../../utils/hooks/useMediaQuery";
import { EScreenSize } from "../../utils/hooks/useMediaQuery/types";
import { Definitely } from "../../utils/types/definitely";
import { LaunchList } from "../LaunchList";
import { Pagination } from "../Pagination";
import { SIBLING_BOUNDARY_SCREEN_SIZE_MAPPING } from "./consts";

interface IProps {
  data: Definitely<FindAllPastLaunchesQuery>;
  offset: number;
  onOffsetChange: (newOffset: number) => void;
  pageSize?: number;
}

export const LaunchListPaginated: React.FC<IProps> = ({
  data,
  offset,
  pageSize = PAGINATION_DEFAULT_PAGE_SIZE,
  onOffsetChange,
}) => {
  const screen = useMediaQuery();

  if (
    data.launchesPastResult?.data &&
    data.launchesPastResult?.result &&
    data.launchesPastResult?.result?.totalCount
  ) {
    const {
      result: { totalCount },
    } = data.launchesPastResult;
    const siblingBoundaryCounts =
      SIBLING_BOUNDARY_SCREEN_SIZE_MAPPING[screen || EScreenSize.XS];
    return (
      <div>
        <LaunchList launches={data.launchesPastResult.data} />
        <div className='flex justify-end'>
          <Pagination
            className='mt-4'
            currentPage={Math.floor(offset / pageSize) + 1}
            onPageChanged={(page) => {
              onOffsetChange((page - 1) * pageSize);
            }}
            totalPagesCount={Math.floor(totalCount / pageSize)}
            {...siblingBoundaryCounts}
          />
        </div>
      </div>
    );
  }
  return null;
};
