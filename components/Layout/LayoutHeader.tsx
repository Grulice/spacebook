import Link from "next/link";
import React from "react";
import { ROUTES } from "../../utils/routes/consts";
import { Logo } from "../Logo";

export const LayoutHeader: React.FC = () => {
  return (
    <header className='sticky top-0 bg-white dark:bg-black flex items-center justify-between px-5 lg:px-10 py-5 border-b border-b-gray-200'>
      <div className='min-w-min mr-4'>
        <Logo size={36} />
      </div>
      <nav className='flex-grow'>
        <ul className='flex justify-end gap-6 md:gap-12 list-none text-sm'>
          {Object.values(ROUTES).map(
            (r) =>
              r.navTitle && (
                <li key={r.path}>
                  <Link
                    className='block whitespace-nowrap transition-all hover:translate-y-[-2px] active:underline'
                    href={r.path}
                  >
                    {r.navTitle}
                  </Link>
                </li>
              )
          )}
        </ul>
      </nav>
    </header>
  );
};
