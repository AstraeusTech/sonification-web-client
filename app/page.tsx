/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { useState } from 'react';
import FileSelection from './_components/FileSelection';
import { ChevronDown } from './_components/icons';

export default function Home() {
  const [showFileSelection, setShowFileSelection] = useState(false);

  return (
    <main>
      <div className="hero min-h-screen hero-pattern">
        <div className="hero-content text-center">
          {showFileSelection ? (
            <FileSelection />
          ) : (
            <div className="max-w-lg">
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
              <p className="py-6 text-lg">
                Explore space in way you have never experienced before.
                Astrorpheus is a space odyssey in sound. Explore the cosmos
                through the sounds of the planets, stars, and other celestial
                bodies.
              </p>
              <div className="space-x-4">
                <button
                  onClick={() => setShowFileSelection(true)}
                  className="btn text-slate-50 transition-all duration-500 bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  Get Started
                </button>
                <a className="btn btn-outline" href="/explore">
                  Explore
                </a>
              </div>
            </div>
          )}
        </div>
        <a href="#features" className="absolute bottom-8">
          <ChevronDown className="animate-bounce" size={'lg'} />
        </a>
      </div>

      {/* Features */}

      <div
        className="bg-slate-950 min-h-screen pt-32 feature-pattern flex flex-col justify-center"
        id="features"
      >
        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="font-semibold leading-7 text-3xl tracking-tight text-fuchsia-400">
                    Explore the cosmos
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-slate-400">
                    Embark on an otherworldly journey like never before with our
                    cutting-edge feature! Upload your 2D space images and watch
                    as they transcend into stunning 3D models. Dive into the
                    cosmos with immersive soundscapes and explore the universe
                    in a whole new dimension.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-300 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-slate-50">
                        <svg
                          className="absolute left-1 top-1 h-5 w-5 text-fuchsia-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Upload your images.
                      </dt>
                      <dd className="inline">
                        {' '}
                        Space is vast and so are the possibilities. Upload your
                        2D images to get started.
                      </dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-slate-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="absolute left-1 top-1 h-5 w-5 text-fuchsia-600"
                        >
                          <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                        </svg>
                        Immerse yourself.
                      </dt>
                      <dd className="inline">
                        {' '}
                        Transcend into immersive 3D models and twinkling,
                        melodic soundscapes.
                      </dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-slate-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="absolute left-1 top-1 h-5 w-5 text-fuchsia-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Explore.
                      </dt>
                      <dd className="inline">
                        {' '}
                        Share your creations with the world and explore what
                        others have created.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <img
                src="/features-image.png"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width="2432"
                height="1442"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
