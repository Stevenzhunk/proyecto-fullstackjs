import React from 'react';
import {
  UilLinkedin,
  UilWhatsapp,
  UilImport,
  UilGithub,
  UilDownloadAlt,
} from '@iconscout/react-unicons';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};

const Contacs = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <h2 className="mb-0 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto justify-center grid">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            ></svg>
            <span className="relative text-white md:grid md:justify-center md:my-4">
              Trabajemos Juntos
            </span>
          </span>{' '}
        </h2>
        <nav className="grid grid-flow-col gap-4">
          <a href="#Aboutme" className="link link-hover">
            Acerca de Mi
          </a>
          <a href="mailto:stvzbernelli@gmail.com" className="link link-hover">
            Correo
          </a>
          <a href="#proyects" className="link link-hover">
            Proyectos
          </a>
        </nav>
        <div className="mt-4 flex gap-x-4 text-center sm:text-left md:justify-start justify-center">
          <a
            href="https://stevenzhunkporfolio.s3.amazonaws.com/LuisBecerrarEsCV.pdf"
            target="_blank"
            className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-softpurpleOpc bg-purpleOpc hover:bg-white hover:text-purpleOpc md:text-sx"
          >
            <p className="mr-1 items-center flex">Descargar CV</p>
            <UilDownloadAlt className="text-current hover:text-purpleOpc mx-auto" />
          </a>
        </div>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/luis-enrique-becerra-gonzalez-a80201266/"
            >
              <UilLinkedin />
            </a>
            <a
              href="https://github.com/Stevenzhunk?tab=repositories"
              target="_blank"
            >
              <UilGithub />
            </a>
          </div>
        </nav>
        <aside>
          <p>Porfolio Luis Becerra © 2023</p>
        </aside>
      </footer>
    </div>
  );
};

export default Contacs;
