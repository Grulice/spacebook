import React from "react";
import { LayoutFooter } from "./LayoutFooter";
import { LayoutHeader } from "./LayoutHeader";

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className='flex flex-col h-full'>
      <LayoutHeader />
      <main className='px-2 md:px-4 lg:px-10 xl:px-20 pt-5 flex-grow'>{children}</main>
      <LayoutFooter />
    </div>
  );
};
