import Image from 'next/image';
import Link from 'next/link';

export function NavBar() {
  // const routes = [
  //   {
  //     name: 'Explore',
  //     path: '/explore',
  //   },
  // ];

  return (
    <div className="fixed w-full bg-slate-50 z-10">
      <nav className="navbar container text-xl">
        <Link href="/">
          <Image src="/waves.png" width={50} height={50} alt="logo" />
          <p className="ml-2 font-semibold">Astrorpheus</p>
        </Link>
        {/* <div className="ml-8">
          {routes.map((r) => (
            <a
              className="ml-4 transition duration-300 hover:text-slate-400"
              href={r.path}
              key={r.name}
            >
              {r.name}
            </a>
          ))}
        </div> */}
      </nav>
    </div>
  );
}
