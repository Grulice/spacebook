import React from "react";
import { InfoRow } from "./InfoRow";
import { TLaunchInfo } from "./types";
import dayjs from "dayjs";
import Link from "next/link";
import { ROUTES } from "../../utils/routes/consts";

interface IProps {
  launchInfo: TLaunchInfo;
}

export const LaunchCard: React.FC<IProps> = ({ launchInfo }) => {
  return (
    <article className='rounded-lg border hover:transition-[border] hover:border-gray-400 p-6 min-w-[6rem] max-h-96'>
      <h4 className='font-bold mb-2'>{launchInfo?.mission_name}</h4>
      <div className='grid grid-cols-[minmax(min-content,_120px)_minmax(0,_1fr)] gap-y-2 items-center'>
        <InfoRow
          label='Launch date'
          content={dayjs(launchInfo?.launch_date_utc).format(
            "YYYY-MM-DD, HH:mm:ss"
          )}
        />
        <InfoRow label='Rocket name' content={launchInfo.rocket?.rocket_name} />
        <InfoRow
          label='Launch site'
          content={launchInfo.launch_site?.site_name}
        />
        <InfoRow
          label='Launch successful'
          content={launchInfo.launch_success ? "Yes" : "No"}
        />
        <InfoRow
          label='Details'
          content={
            <div className='overflow-hidden whitespace-nowrap overflow-ellipsis'>
              {launchInfo?.details ?? "—"}
            </div>
          }
        />
      </div>
      <Link
        className='block mt-6 text-blue-500 hover:underline'
        href={ROUTES.LAUNCH_DETAILS.compileUrl?.({ id: launchInfo.id! }) || ""}
      >
        More info →
      </Link>
    </article>
  );
};
