import React from "react";
import { RxExternalLink } from "react-icons/rx";
import { Article } from "../types";
import { puppy } from "../assets";

interface Props {
  artical: Article;
}

const MainCard: React.FC<Props> = ({ artical }) => {
  return (
    <div className="relative w-[100%] aspect-video border-[1px] border-gray-200 select-none">
      <img className="absolute w-[100%] bg-cover aspect-video" src={artical.urlToImage || puppy} alt="img" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute p-4 text-white bottom-4 left-4">
        <h1 className="text-2xl font-bold line-clamp-2">{artical.title}</h1>
        <p className="text-lg line-clamp-2">{artical.description}</p>
        <a href={artical.url} target="_blank" className="flex items-center gap-1 font-semibold text-red-400">
          <span>Read post</span>
          <RxExternalLink />
        </a>
      </div>
    </div>
  );
};

export default MainCard;
