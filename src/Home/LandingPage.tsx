import { Today, ImageCursor, Loader, Source } from '../components';
import Weather from '../components/Weather';
import { useGetheadlinesQuery } from './store/apiSlice';
import { useGetWeatherQuery } from '../Home/store/apiSlice';
import useGeolocation from '../utils/seGeolocation';

const LandingPage = () => {
  const { latitude, longitude } = useGeolocation();

  const { data: newsData, isError, error } = useGetheadlinesQuery({});

  const {
    data: weatherData,
    isError: isError2,
    error: error2,
  } = useGetWeatherQuery({ latitude, longitude });

  if (isError || isError2) {
    return <div>{JSON.stringify(error || error2)}</div>;
  }

  if (newsData && weatherData) {
    return (
      <div className='flex flex-col gap-16 px-16 py-10'>
        <div className='grid grid-cols-11 gap-8'>
          <div className='col-span-8'>
            <ImageCursor data={newsData} />
          </div>
          <Weather className={'col-span-3'} data={weatherData} />
        </div>
        <div className='flex flex-col gap-16'>
          <Today count={3} />
          <Source name='BBC News' sources='bbc-news' count={3} />
          <Source name='CNN News' sources='cnn' count={3} />
          <Source
            name='Al-Jazeera News'
            sources='al-jazeera-english'
            count={3}
          />
          <Source name='Google news' sources='google-news' count={3} />
        </div>
      </div>
    );
  }
  return <Loader />;
};

export default LandingPage;
