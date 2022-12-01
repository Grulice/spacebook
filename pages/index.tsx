import { NextPage } from "next";
import React from "react";
import { LaunchListPaginated } from "../components/LaunchListPaginated";
import { useGQL } from "../providers/GQLProvider";
import { PAGINATION_DEFAULT_PAGE_SIZE } from "../utils/consts";
import useDebounce from "../utils/hooks/useDebounce";

const HomePage: NextPage = () => {
  const {
    gql: { useFindAllPastLaunches },
  } = useGQL();

  const [offset, setOffset] = React.useState(0);
  const debouncedOffset = useDebounce(offset, 500);

  const { data, error } = useFindAllPastLaunches({
    offset: debouncedOffset,
    limit: PAGINATION_DEFAULT_PAGE_SIZE,
  });

  const renderLaunches = () => {
    if (error) return <div>Error: {error.message}</div>;
    if (!data && !error) return <div>Loading...</div>;
    if (data) {
      return (
        <LaunchListPaginated
          data={data}
          offset={offset}
          onOffsetChange={setOffset}
        />
      );
    }
  };
  return <div>{renderLaunches()}</div>;
};

export default HomePage;
