import React from "react";

interface IProps {
  title: string;
}

export const PageHeading: React.FC<IProps> = ({ title }) => {
  return <h1 className='text-3xl font-bold'>{title}</h1>;
};
