import React from "react";

interface Props {
  imgUrl?: string;
  headline: string;
  desc: string;
  url: string;
  publishedAt: string;
}

const CategoryCard: React.FC<Props> = ({ imgUrl, headline, desc, url, publishedAt }) => {
  function getTimeDifference(isoDateString: string): string {
    const givenDate = new Date(isoDateString);
    const currentDate = new Date();

    const differenceInMs = currentDate.getTime() - givenDate.getTime();

    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;

    const days = Math.floor(differenceInMs / msInDay);
    const hours = Math.floor((differenceInMs % msInDay) / msInHour);
    const minutes = Math.floor((differenceInMs % msInHour) / msInMinute);
    const seconds = Math.floor((differenceInMs % msInMinute) / msInSecond);

    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  }

  return (
    <div className="relative flex  flex-col justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <img
        className=" bg-cover relative mx-4 -mt-6 h-[50%] overflow-hidden rounded-xl bg-clip-bordershadow-lg shadow-blue-gray-500/40"
        src={imgUrl}
      />
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased line-clamp-2">
          {headline}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased line-clamp-4">{desc}</p>
      </div>
      <div className="flex justify-between items-baseline p-6 pt-0 ">
        <a
          data-ripple-light="true"
          type="button"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Read More
        </a>
        <div className="text-gray-400 text-sm">{publishedAt ? getTimeDifference(publishedAt) : "Latest"}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
