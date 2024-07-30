import React from "react";
import { RxExternalLink } from "react-icons/rx";
import { Article } from "../types";

interface Props {
  artical: Article;
}

const MainCard: React.FC<Props> = ({ artical }) => {
  return (
    <div className="relative w-[100%] aspect-video border-[1px] border-gray-200 select-none">
      <img className="absolute w-[100%] h-[100%] bg-cover" src={artical.urlToImage} alt="img" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute bottom-4 left-4 text-white p-4">
        <h1 className="text-2xl font-bold line-clamp-2">{artical.title}</h1>
        <p className="text-lg line-clamp-2">{artical.description}</p>
        <button className="flex gap-1 items-center text-red-400 font-semibold">
          <span>Read post</span>
          <RxExternalLink />
        </button>
      </div>
    </div>
  );
};

export default MainCard;
