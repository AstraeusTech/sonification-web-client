import Image from 'next/image';
import { ChevronDown } from './_components/icons';

export default function Home() {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <Image
            src="/waves.png"
            className="m-auto"
            width={125}
            height={100}
            alt="logo"
          />
          <h1 className="text-7xl font-bold text-slate-800">Astrorpheus</h1>
          <h2 className="text-2xl text-slate-500 font-semibold mt-2">
            A Space Odyssey in Sound
          </h2>
          <p className="py-6">
            Explore space in way you have never experienced before. Astrorpheus
            is a space odyssey in sound. Explore the cosmos through the sounds
            of the planets, stars, and other celestial bodies.
          </p>
          <button className="btn text-slate-50 transition-all duration-500 bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
            Get Started
          </button>
        </div>
      </div>
      <ChevronDown className="animate-bounce absolute bottom-8" size={'lg'} />
    </div>
  );
}
