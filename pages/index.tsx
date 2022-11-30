import { NextPage } from "next";
import { LaunchList } from "../components/LaunchList";
import { useGQL } from "../providers/GQLProvider";

const HomePage: NextPage = () => {
  const {
    gql: { useFindAllLaunches },
  } = useGQL();

  const { data, error } = useFindAllLaunches();

  const renderLaunches = () => {
    if (error) return <div>Error: {error.message}</div>;
    if (!data && !error) return <div>Loading...</div>;
    if (data && data.launches) return <LaunchList launches={data.launches} />;
  };
  return <div>{renderLaunches()}</div>;
};

export default HomePage;
