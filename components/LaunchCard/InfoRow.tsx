import React from "react";

interface IProps {
  label: string;
  content: React.ReactNode;
}

export const InfoRow: React.FC<IProps> = ({ label, content }) => {
  return (
    <>
      <div className='text-gray-500 self-baseline'>{label}</div>
      <div className='text-left'>{content}</div>
    </>
  );
};
