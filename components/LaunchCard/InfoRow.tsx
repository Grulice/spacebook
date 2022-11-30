import React from "react";

interface IProps {
  label: string;
  content: React.ReactNode;
}

export const InfoRow: React.FC<IProps> = ({ label, content }) => {
  return (
    <>
      <p className='text-gray-500'>{label}</p>
      <p className='text-left'>{content}</p>
    </>
  );
};
