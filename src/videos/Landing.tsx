import { useState } from "react";
import { useGetVideosQuery } from "./store/apiSlice";
import { Loader, NotFound } from "../components";
import { VideoPlayer } from "../components";

const Landing = () => {
  const [count, setCount] = useState(10);
  const { data, isError, error, refetch, isFetching } = useGetVideosQuery({ count });

  const loadMoreHandler = () => {
    setCount((prev) => prev + 10);
    refetch();
  };

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  if (data) {
    return (
      <div className="flex flex-col gap-4 px-16 py-10">
        <div className="flex items-center">
          <div className="mx-4 text-3xl font-semibold ">Videos</div>
          <div className="flex-1 border-t bg-border"></div>
        </div>
        <div>
          {data?.length === 0 ? (
            <NotFound />
          ) : (
            <ul className="grid grid-cols-3 gap-8">
              {data?.map((video, i) => (
                <div key={i}>
                  <VideoPlayer url={video.videos.tiny.url} />
                </div>
              ))}
            </ul>
          )}
        </div>
        {data?.length !== 0 ? (
          <div className="flex justify-center">
            <button
              className="relative z-30 px-6 py-3 overflow-hidden font-semibold tracking-wider text-white transition-all duration-500 rounded bg-Primary/75 group hover:bg-Primary"
              onClick={loadMoreHandler}
            >
              {isFetching ? "Loading" : "Load more"}
            </button>
          </div>
        ) : null}
      </div>
    );
  }

  return <Loader />;
};

export default Landing;
