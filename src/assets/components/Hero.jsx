import React from 'react';
import Imagen from '../img/herodef.png';
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <>
      <div className="relative px-6 m:px-8 bg-graymetalsoft">
        <section id="Hero">
          <div className="mx-auto pt-20 pb-32 sm:pt-30 sm:pb-30 md:max-w-6xl">
            <div className="md:flex md:justify-center  ">
              {' '}
              {/* controlador centrador de texto e imagen en hero]*/}
              {/*Texto Hero*/}
              <div className="justify-center flex flex-col">
                <p className="text-4xl font-bold tracking-tight sm:text-left sm:text-5xl text-white text-center">
                  SOY
                </p>
                <h1 className="text-4xl font-bold tracking-tight  sm:text-7xl text-white text-center sm:text-left">
                  <span className="text-metal">#</span>LUIS BECERRA
                </h1>
                <div className="mt-6 text-xl leading-8 text-center sm:text-left text-white">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 1000,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString('Diseñador Front End')
                        .callFunction(() => {
                          //console.log('String typed out!');
                        })
                        .pauseFor(1500)
                        .deleteAll()
                        .callFunction(() => {
                          //console.log('All strings were deleted');
                        })
                        .start();
                      typewriter
                        .typeString('Diseñador Back End')
                        .callFunction(() => {
                          //console.log('String typed out!');
                        })
                        .pauseFor(1500)
                        .deleteAll()
                        .callFunction(() => {
                          //console.log('All strings were deleted');
                        })
                        .start();
                      typewriter
                        .typeString('Diseñador Full-Stack')
                        .callFunction(() => {
                          //console.log('String typed out!');
                        })
                        .pauseFor(1500)
                        .deleteAll()
                        .callFunction(() => {
                          //console.log('All strings were deleted');
                        })
                        .start();
                    }}
                  />
                </div>
                <p className="text-lg leading-8 text-graysoft text-center sm:text-left m-0 md:justify-start justify-center">
                  Amante de la tecnología e informática, Pasando por Ing.
                  Electrónico, Diseñador Gráfico y ahora enfoque en el Diseño
                  Web
                </p>
                <div className="mt-8 flex gap-x-4 text-center sm:text-left md:justify-start justify-center">
                  <a
                    href="#proyects"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-softpurpleOpc bg-purpleOpc hover:bg-white hover:text-purpleOpc md:text-sx"
                  >
                    Mis Trabajos
                  </a>

                  <a
                    href="mailto:stvzbernelli@gmail.com"
                    target="_blank"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-softpurpleOpc bg-purpleOpc hover:bg-white hover:text-purpleOpc text-left md:text-sx"
                  >
                    Decir Hola
                  </a>
                </div>
              </div>
              {/*   Imagen Hero */}
              <div
                className="pt-10 md:pt-0 md:ml-24 lg:ml-48"
                data-aos="zoom-in"
              >
                <img
                  className="m-auto pt-10 md:pt-0 heroImg md:max-w-xl "
                  src={Imagen}
                />
              </div>
            </div>
            <div className="flex justify-center pt-8">
              <div>
                <a
                  href="#Aboutme"
                  className=" animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center"
                >
                  <svg
                    className="w-6 h-6 text-violet-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
