import Image from 'next/image';

export function NavBar() {
  const routes = [
    {
      name: 'Explore',
      path: '/explore',
    },
  ];

  return (
    <div className="fixed w-full bg-slate-50">
      <nav className="navbar container text-xl">
        <a className="" href="/">
          <Image src="/waves.png" width={50} height={50} alt="logo" />
          <p className="ml-2 font-semibold">Astrorpheus</p>
        </a>
        <div className="ml-8">
          {routes.map((r) => (
            <a
              className="ml-4 transition duration-300 hover:text-slate-400"
              href={r.path}
              key={r.name}
            >
              {r.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
