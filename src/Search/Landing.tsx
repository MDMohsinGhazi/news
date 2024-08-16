import React, { useState } from "react";
import { useGetByQQuery } from "./store/apiSlice";
import { Loader } from "../components";
import { useSearchParams } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

const Landing = () => {
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q");

  const [count, setCount] = useState(10);
  const { data, isError, error, isSuccess, refetch, isFetching } = useGetByQQuery({ q: q || "", count });

  const loadMoreHandler = () => {
    setCount((prev) => prev + 10);
    refetch();
  };

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }
  if (isSuccess) {
    return (
      <div className="flex flex-col gap-16 px-16 py-10">
        <div className="flex items-center">
          <div className="mx-4 text-3xl font-semibold ">You have searched for {q}</div>
          <div className="flex-1 border-t bg-border"></div>
        </div>
        <div>
          <ul className="grid grid-cols-3 px-5 mt-12 gap-x-4 gap-y-16">
            {data.map((artical, i) => (
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
        </div>
        <div className="flex justify-center">
          <button
            className="relative z-30 px-6 py-3 overflow-hidden font-semibold tracking-wider text-white transition-all duration-500 rounded bg-Primary/75 group hover:bg-Primary"
            onClick={loadMoreHandler}
          >
            {isFetching ? "Loading" : "Load more"}
          </button>
        </div>
      </div>
    );
  }

  return <Loader />;
};

export default Landing;
