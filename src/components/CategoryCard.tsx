import React from 'react';
import { fallback } from '../assets';

interface Props {
  imgUrl?: string;
  headline: string;
  desc: string;
  url: string;
  publishedAt: string;
}

const CategoryCard: React.FC<Props> = ({
  imgUrl,
  headline,
  desc,
  url,
  publishedAt,
}) => {
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
    <div className='relative flex flex-col justify-between text-gray-700 bg-white shadow-md rounded-xl bg-clip-border'>
      <img
        className='bg-contain relative mx-4 -mt-6 h-[50%] aspect-[5/3] overflow-hidden rounded-xl bg-clip-bordershadow-lg shadow-blue-gray-500/40'
        src={imgUrl || fallback}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = fallback;
        }}
      />
      <div className='p-6'>
        <h5 className='block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 line-clamp-2'>
          {headline}
        </h5>
        <p className='flex-1 font-sans text-base antialiased font-light leading-relaxed text-inherit line-clamp-4'>
          {desc}
        </p>
      </div>
      <div className='flex items-baseline justify-between p-6 pt-0 '>
        <a
          data-ripple-light='true'
          type='button'
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
        >
          Read More
        </a>
        <div className='text-sm text-gray-400'>
          {publishedAt ? getTimeDifference(publishedAt) : 'Latest'}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
