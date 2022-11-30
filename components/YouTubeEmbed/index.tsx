import React from "react";
import styles from "./styles.module.css";

interface IProps {
  videoId: string;
  className?: string;
}

export const YouTubeEmbed: React.FC<IProps> = ({ videoId, className }) => {
  return (
    <iframe
      className={`w-full aspect-video ${className}`}
      src={`https://www.youtube.com/embed/${videoId}`}
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  );
};
