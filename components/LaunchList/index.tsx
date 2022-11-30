import React from "react";
import { LaunchCard } from "../LaunchCard";
import { TLaunches } from "./types";

interface IProps {
  launches: TLaunches;
}

export const LaunchList: React.FC<IProps> = ({ launches }) => {
  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 flex-wrap justify-between'>
      {launches.map((l) => l && <LaunchCard key={l?.id} launchInfo={l} />)}
    </div>
  );
};
