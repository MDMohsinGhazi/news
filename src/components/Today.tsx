import React from "react";
import CategoryCard from "./CategoryCard";
import { useGetTodayNewsQuery } from "../Home/store/apiSlice";

interface Props {
  count: number;
}

const Today: React.FC<Props> = ({ count }) => {
  const { data, isError, isFetching, isLoading } = useGetTodayNewsQuery({ count: count });

  if (isError || isFetching || isLoading) {
    return <div>loading</div>;
  }

  if (data) {
    return (
      <main>
        <div className="flex items-center">
          <div className="mx-4 font-semibold text-3xl ">Today News</div>
          <div className="flex-1 border-t bg-border"></div>
          <div className="mx-4">See more</div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-12 px-5">
          {data?.map((artical, ind) => (
            <CategoryCard
              key={ind}
              imgUrl={artical.urlToImage}
              headline={artical.title}
              desc={artical.description}
              url={artical.url}
              publishedAt={artical.publishedAt}
            />
          ))}
        </div>
      </main>
    );
  }
  return <div>loding..</div>;
};

export default Today;
