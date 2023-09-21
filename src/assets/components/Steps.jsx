import React from 'react';

const Steps = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100  bg-darkpurple">
      <div className="container max-w-5xl px-4 py-16 lg:py-36 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div
            className="col-span-12 sm:col-span-3"
            data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
              <h3 className="text-3xl font-semibold text-white">TIMELINE</h3>
              <span className="text-sm font-light tracking-wider uppercase text-graysoft  ">
                Solo programacion{' '}
              </span>
            </div>
          </div>
          <div
            className="relative col-span-12 px-0 md:px-4 space-y-6 sm:col-span-9"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="col-span-12 space-y-12 relative px-0 md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-2xl font-semibold tracking-wide text-white">
                  Desarrollador Web Front-End como Freelancer
                </h3>
                <time className="text-xs tracking-wide uppercase text-graysoft py-2 ">
                  {' '}
                  2022 - actualidad
                </time>
                <p className="mt-3 text-white font-light">
                  Desarrollo web SPA con Framework
                </p>
                <p className="mt-3 text-white font-light text-sm">
                  Desarrollo de páginas webs con Html, JavaScript, React.js,
                  Tailwind CSS, styled-components, AOS, Frame Motion, Express,
                  AWS Cloud, vercel, NODEJS, Github, Adobe Photoshop, Adobe
                  Illustrator.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400 pt-8 md:pt-16">
                <h3 className="text-2xl font-semibold tracking-wide text-white ">
                  Desarrollador Web Front-End (Siweb España remoto)
                </h3>
                <time className="text-xs tracking-wide uppercase text-graysoft py-2">
                  Jul 2015 - Dic 2016
                </time>
                <p className="mt-3 text-white font-light">
                  Creación de paginas web usando HTML, CSS y JavaScript
                </p>
                <p className="mt-3 text-white font-light text-sm">
                  Realización diseño web con CSS,HTMLy JavaScript vanilla,
                  usando plantillas y estilos CSS con JS, manejo de metodología
                  SCRUM con la herramienta trello, edición y creación de logos e
                  imágenes con Photoshop
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
