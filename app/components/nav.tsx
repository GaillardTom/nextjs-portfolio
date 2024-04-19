import Link from 'next/link';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/work': {
    name: 'Projects',
  },
  '/blog': {
    name: 'Blog',
  },
  '/writeups': {
    name: 'HTB',
  },
  '/guestbook': {
    name: 'Guestbook',
  },
  
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row max-h-28 min-h-14  items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="text-xl transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 focus:bg-green-900 rounded-lg"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
