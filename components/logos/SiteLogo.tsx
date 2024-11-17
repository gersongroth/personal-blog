import Link from 'next/link';
import { GlobalData } from '../../lib/types';
import BlogLogo from './BlogLogo';

export default function SiteLogo({
  siteData,
}: {
  siteData: GlobalData;
}): JSX.Element {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-between px-4 py-4 md:flex-row lg:px-0">
      <h1 className="flex space-x-2 items-center">
        <BlogLogo className="h-auto w-16" />
        <Link
          href="/"
          className="text-4xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100"
        >
          {siteData.metadata.site_title}
        </Link>
      </h1>
      <span className="relative hidden text-lg tracking-wide text-zinc-500 dark:text-zinc-200 md:flex">
        {siteData.metadata.site_tag}
      </span>
    </div>
  );
}
