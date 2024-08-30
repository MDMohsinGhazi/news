import React from 'react';
import CategoryCard from './CategoryCard';
import { useGetBysourcesQuery } from '../Home/store/apiSlice';

interface Props {
  name: string;
  count: number;
  sources: string;
}

const Source: React.FC<Props> = ({ name, count, sources }) => {
  const { data, isError } = useGetBysourcesQuery({ sources, count });

  if (isError) {
    return <div>loading</div>;
  }

  if (data) {
    return (
      <main>
        <div className='flex items-center'>
          <div className='mx-4 font-semibold text-3xl '>{name}</div>
          <div className='flex-1 border-t bg-border'></div>
          <div className='mx-4'>See more</div>
        </div>
        <div className='grid grid-cols-3 gap-8 mt-12 px-5'>
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

export default Source;
