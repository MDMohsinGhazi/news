import React from "react";
import { WiRain, WiCloudy } from "react-icons/wi";
import { LuSunrise, LuSunset } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { RootWeather } from "../types";

interface Props {
  className: string;
  data: RootWeather;
}

const Weather: React.FC<Props> = ({ className, data }) => {
  function fahrenheitToCelsius(K: number | undefined) {
    if (K) {
      return K - 273.15;
    } else {
      return NaN;
    }
  }

  function formatUnixTimestamp(timestamp = 0, locale = "en-US") {
    const date = new Date(timestamp * 1000);
    const formatter = new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return formatter.format(date);
  }

  const iconMapping: Record<any, any> = {
    Clear: MdOutlineWbSunny,
    Rain: WiRain,
    Clouds: WiCloudy,
  };

  const IconComponent = iconMapping[data?.weather[0].main] ?? MdOutlineWbSunny;

  return (
    <figure className={`rounded-lg shadow-md  ${className}`}>
      <div className="flex justify-between bg-gray-100 px-5 py-6 rounded-t-xl">
        <div>
          <IconComponent size={150} />
          <div>{data?.weather[0].description}</div>
        </div>
        <div className="flex flex-col justify-between text-2xl">
          <div>{data?.weather[0].main}</div>
          <div className="flex text-6xl">
            <span>{fahrenheitToCelsius(data?.main.temp).toFixed(0)}°C</span>
          </div>
          <div>{data?.name}</div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-10 text-lg">
        <div className="flex justify-between">
          <div>wind</div>
          <div className="font-semibold">{data?.wind.speed} m/s</div>
        </div>
        <div className="flex justify-between">
          <div>Humidity</div>
          <div className="font-semibold">{data?.main.humidity}%</div>
        </div>
        <div className="flex justify-between">
          <div>Pressure</div>
          <div className="font-semibold">{data?.main.pressure} hPa</div>
        </div>
        {/* sunset sunrise */}
        <div className="hidden justify-between mt-6 border-t-[1px] border-t-border pt-7  2xl:flex">
          <div className="flex flex-col items-center">
            <LuSunrise size={30} />
            <div>{formatUnixTimestamp(data?.sys.sunrise)}</div>
          </div>
          <div className="flex flex-col items-center">
            <LuSunset size={30} />
            <div>{formatUnixTimestamp(data?.sys.sunset)}</div>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default Weather;
