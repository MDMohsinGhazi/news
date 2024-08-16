export interface ArticleRes {
  status: string;
  totalResults: number;
  articles: Article[];
}
export interface Article {
  source: Source;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}

interface Source {
  id: string;
  name: string;
}

export interface RootWeather {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export type Videos = Video[];

export interface Video {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  duration: number;
  videos: VideosType;
  views: number;
  downloads: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

export interface VideosType {
  large: Large;
  medium: Medium;
  small: Small;
  tiny: Tiny;
}

export interface Large {
  url: string;
  width: number;
  height: number;
  size: number;
  thumbnail: string;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
  size: number;
  thumbnail: string;
}

export interface Small {
  url: string;
  width: number;
  height: number;
  size: number;
  thumbnail: string;
}

export interface Tiny {
  url: string;
  width: number;
  height: number;
  size: number;
  thumbnail: string;
}
