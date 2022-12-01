import dayjs from "dayjs";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { InfoRow } from "../../components/LaunchCard/InfoRow";
import { PageHeading } from "../../components/PageHeading";
import { YouTubeEmbed } from "../../components/YouTubeEmbed";
import { sdkSSR } from "../../utils/graphql/client";
import { FindOneLaunchQuery } from "../../utils/graphql/generated/client";
import { ROUTES } from "../../utils/routes/consts";
import { Definitely } from "../../utils/types/definitely";

interface IProps {
  details: Definitely<FindOneLaunchQuery>;
  error?: unknown;
}

export const getServerSideProps: GetServerSideProps<IProps> = async (ctx) => {
  const { findOneLaunch } = sdkSSR;
  try {
    const result = await findOneLaunch({ launchId: ctx.query.id as string });
    return {
      notFound: !result.launch,
      props: {
        details: result,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
        details: {},
      },
    };
  }
};

const LaunchDetails: NextPage<IProps> = ({ details }) => {
  const renderVideoOrImage = ({
    videoId,
    imageUrl,
  }: {
    videoId?: string;
    imageUrl?: string | null;
  }) => {
    if (videoId) {
      return <YouTubeEmbed className='mt-4 lg:mt-0' videoId={videoId} />;
    }
    if (imageUrl) {
      return (
        <div className='relative min-h-[500px] -z-10'>
          <Image className='object-cover' src={imageUrl} alt='' fill />
        </div>
      );
    }
    return (
      <p className='grid place-items-center mt-4 lg:mt-0 h-full text-gray-400'>
        No images/video
      </p>
    );
  };

  if (details.launch) {
    const {
      mission_name,
      details: missionDetails,
      links,
      launch_date_utc,
      rocket,
      launch_site,
      launch_success,
    } = details.launch;

    const videoId = links?.video_link?.split("v=")?.[1];
    return (
      <div>
        <Head>
          <title>{mission_name}</title>
        </Head>
        <Link
          className='block mb-4 text-blue-500 hover:underline'
          href={ROUTES.HOME.path}
        >
          ← Back to Home
        </Link>
        <PageHeading title={mission_name || ""} />
        <div className='mt-4 grid grid-cols-1 lg:grid-cols-2'>
          <div className='mr-0 lg:mr-20'>
            <div>
              <h4 className='text-xl font-bold mb-2'>Details</h4>
              {missionDetails ? (
                <p>{missionDetails}</p>
              ) : (
                <p className='text-gray-400'>No description</p>
              )}
            </div>
            <div className='mt-4'>
              <h4 className='text-xl font-bold mb-2'>Stats</h4>
              <div className='grid grid-cols-[minmax(min-content,_120px)_minmax(0,_1fr)] gap-y-2 items-center'>
                <InfoRow
                  label='Launch date'
                  content={dayjs(launch_date_utc).format(
                    "YYYY-MM-DD, HH:mm:ss"
                  )}
                />
                <InfoRow label='Rocket name' content={rocket?.rocket_name} />
                <InfoRow
                  label='Launch site'
                  content={launch_site?.site_name_long}
                />
                <InfoRow
                  label='Launch successful'
                  content={launch_success ? "Yes" : "No"}
                />
              </div>
            </div>
          </div>
          <div className='relative'>
            {renderVideoOrImage({
              videoId,
              imageUrl: links?.flickr_images?.[0],
            })}
          </div>
        </div>
      </div>
    );
  }
  return <div>Launch not found :(</div>;
};

export default LaunchDetails;
