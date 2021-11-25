import { ReactNode } from 'react';

import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="flex flex-col h-screen antialiased">
    {props.meta}

    <header className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
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
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-screen-md mx-auto container">{props.children}</div>
    </main>
    <footer className="py-5 footer text-base-content flex items-center justify-center">
      © Copyright {new Date().getFullYear()} {AppConfig.title}.
      <div className="flex flex-row">
        Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
      </div>
    </footer>
  </div>
);

export { Main };
