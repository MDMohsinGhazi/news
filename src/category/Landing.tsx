import { useState } from "react";
import { useGetByCategoryQuery } from "./store/apiSlice";
import { Loader, NotFound } from "../components";
import { useParams } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

const Landing = () => {
  const { category = "" } = useParams();

  const [count, setCount] = useState(10);
  const { data, isError, error, refetch, isFetching } = useGetByCategoryQuery({ category, count });

  const loadMoreHandler = () => {
    setCount((prev) => prev + 10);
    refetch();
  };

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  if (data) {
    return (
      <div className="flex flex-col gap-16 px-16 py-10">
        <div className="flex items-center">
          <div className="mx-4 text-3xl font-semibold ">{category}</div>
          <div className="flex-1 border-t bg-border"></div>
        </div>
        <div>
          {data?.length === 0 ? (
            <NotFound />
          ) : (
            <ul className="grid grid-cols-3 px-5 mt-12 gap-x-4 gap-y-16">
              {data?.map((artical, i) => (
                <CategoryCard
                  key={i}
                  headline={artical.title}
                  desc={artical.description}
                  url={artical.url}
                  imgUrl={artical.urlToImage}
                  publishedAt={artical.publishedAt}
                />
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
