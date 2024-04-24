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
    <aside className="-ml-[38px] mb-16 tracking-tight">
      <div className="fixed top-10 z-10">
        <nav
          className="glass-nav overflow-x-hidden relative flex flex-row max-h-28 min-h-14 items-center  fade md:overflow-auto  md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10  md:gap-2 ">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="wave-effect ml-8 text-xl transition-all hover:scale-105 dark:text-neutral-200 text-neutral-800 dark:hover:text-neutral-50 flex align-middle relative py-1 px-2 rounded-lg"
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
