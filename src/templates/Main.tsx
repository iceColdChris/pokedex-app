import { ReactNode } from 'react';

import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div id="container" className="flex flex-col">
    {props.meta}
    <header className=" sticky top-0 navbar mb-2 shadow-lg bg-neutral text-neutral-content">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">{AppConfig.title}</span>
      </div>
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <Link href={'/'}>
            <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
          </Link>
          <Link href={'/about/'}>
            <a className="btn btn-ghost btn-sm rounded-btn">About</a>
          </Link>
        </div>
      </div>
    </header>
    <main className="antialiased w-full relative text-gray-700">
      <div className="max-w-screen-md mx-auto container">
        <div className="py-5 text-xl content">{props.children}</div>
      </div>
    </main>
    <footer className="sticky bottom-0 p-4 footer text-base-content">
      © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
      <span role="img" aria-label="Love">
        ♥
      </span>{' '}
      by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
    </footer>
  </div>
);

export { Main };
