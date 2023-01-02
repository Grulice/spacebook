import React from "react";

interface IProps {
  message: string | null;
}

export const RenderMsg: React.FC<IProps> = ({ message }) => {
  return <div className="text-xs text-red-500">{message}</div>;
};
