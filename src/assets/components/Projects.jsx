import React from 'react';
import Ray3 from '../img/3ray.png';
import Movietrailer from '../img/movietrailer.png';
import smartstore from '../img/smartstore.png';
import temperature from '../img/temperature.png';
import { UilGithub, UilGlobe } from '@iconscout/react-unicons';

const Projects = () => {
  return (
    <div>
      <section className="bg-futurePurple dark:bg-gray-900" id="proyects">
        <div className="container px-6 md:px-16 py-10 mx-auto lg:py-20">
          <h1 className="text-3xl font-semibold capitalize lg:text-4xl  dark:text-black flex justify-center text-white">
            Últimos Proyectos
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex" data-aos="zoom-in">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-72 hover:scale-125"
                src={temperature}
                alt="Aplicación temperatura"
              />

              <div className="flex flex-col  py-6 lg:mx-6 text-white">
                <a
                  href="https://weather-app-stvnz.s3.amazonaws.com/index.html"
                  target="_blank"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-dark "
                >
                  App temperatura
                </a>
                <p className="py-8 font-light text-sm">
                  Humedad, velocidad de viento, máxima, mínima temperatura y las
                  temperaturas de las próximas horas.
                </p>
                <div className="flex ">
                  {' '}
                  {/* Contenedor Iconos Git y Deploy */}
                  <a
                    href="https://github.com/Stevenzhunk/my-weather-app"
                    target="_blank"
                    className=" rounded-lg  text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-softpurpleOpc bg-darkpurple hover:bg-white hover:text-darkpurple text-left md:text-sx flex w-full pr-0 pl-0"
                  >
                    <UilGithub
                      size="2rem"
                      className="text-white mx-auto hover:text-purpleOpc flex w-full"
                    />
                  </a>
                  <a
                    href="https://weather-app-stvnz.s3.amazonaws.com/index.html"
                    target="_blank"
                    className=" rounded-lg  text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-softpurpleOpc bg-darkpurple hover:bg-white hover:text-darkpurple text-left md:text-sx flex w-full pr-0 pl-0 ml-2"
                  >
                    <UilGlobe
                      size="2rem"
                      className="text-white mx-auto hover:text-purpleOpc flex w-full"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:flex" data-aos="zoom-in">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-72 hover:scale-125"
                src={smartstore}
                alt="Carrito de compras imagen"
              />

              <div className="flex flex-col  py-6 lg:mx-6 text-white">
                <a
                  href="https://myshoppingcartsmartstore.s3.amazonaws.com/index.html"
                  target="_blank"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-dark "
                >
                  Carrito de compras
                </a>

                <p className="py-8 font-light text-sm">
                  Detalle de productos, con funciones de agregar, eliminar
                  elementos, ver el total en el carrito, con versión móvil.
                </p>
                <div className="flex ">
                  {' '}
                  {/* Contenedor Iconos Git y Deploy */}
                  <a
                    href="https://github.com/Stevenzhunk/MyShoppingCart"
                    target="_blank"
                    className=" rounded-lg  text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-softpurpleOpc bg-darkpurple hover:bg-white hover:text-darkpurple text-left md:text-sx flex w-full pr-0 pl-0"
                  >
                    <UilGithub
                      size="2rem"
                      className="text-white mx-auto hover:text-purpleOpc flex w-full"
                    />
                  </a>
                  <a
                    href="https://myshoppingcartsmartstore.s3.amazonaws.com/index.html"
                    target="_blank"
                    className=" rounded-lg  text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-softpurpleOpc bg-darkpurple hover:bg-white hover:text-darkpurple text-left md:text-sx flex w-full pr-0 pl-0 ml-2"
                  >
                    <UilGlobe
                      size="2rem"
                      className="text-white mx-auto hover:text-purpleOpc flex w-full"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:flex" data-aos="zoom-in">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-72 hover:scale-125 "
                src={Movietrailer}
                alt="Trailer app imagen"
              />

              <div className="flex flex-col  py-6 lg:mx-6 text-white">
                <a
                  href="https://stevenzhunk-react.s3.amazonaws.com/index.html"
                  target="_blank"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-dark "
                >
                  Aplicación tráilers
                </a>
                <p className="py-8 font-light text-sm">
                  Aplicación que muestra 20 películas en tendencia, con su
                  descripción
                </p>
                <div className="flex ">
                  {' '}
                  {/* Contenedor Iconos Git y Deploy */}
                  <a
                    href="https://github.com/Stevenzhunk/webTrailer"
                    target="_blank"
                    className=" rounded-lg  text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-softpurpleOpc bg-darkpurple hover:bg-white hover:text-darkpurple text-left md:text-sx flex w-full pr-0 pl-0"
                  >
                    <UilGithub
                      size="2rem"
                      className="text-white mx-auto hover:text-purpleOpc flex w-full"
                    />
                  </a>
                  <a
                    href="https://stevenzhunk-react.s3.amazonaws.com/index.html"
                    target="_blank"
                    className=" rounded-lg  text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-softpurpleOpc bg-darkpurple hover:bg-white hover:text-darkpurple text-left md:text-sx flex w-full pr-0 pl-0 ml-2"
                  >
                    <UilGlobe
                      size="2rem"
                      className="text-white mx-auto hover:text-purpleOpc flex w-full"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:flex" data-aos="zoom-in">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-72 hover:scale-125"
                src={Ray3}
                alt="3 en Raya juego imagen"
              />

              <div className="flex flex-col  py-6 lg:mx-6 text-white">
                <a
                  href="https://stevenz-react-3enlinea.s3.amazonaws.com/index.html"
                  target="_blank"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-dark "
                >
                  Aplicación jugar el 3 en linea
                </a>
                <p className="py-8 font-light text-sm">
                  Juego clasico adaptado al explorador de internet
                </p>
                <div className="flex ">
                  {' '}
                  {/* Contenedor Iconos Git y Deploy */}
                  <a
                    href="https://github.com/Stevenzhunk/3RayGame"
                    target="_blank"
                    className=" rounded-lg  text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-softpurpleOpc bg-darkpurple hover:bg-white hover:text-darkpurple text-left md:text-sx flex w-full pr-0 pl-0"
                  >
                    <UilGithub
                      size="2rem"
                      className="text-white mx-auto hover:text-purpleOpc flex w-full"
                    />
                  </a>
                  <a
                    href="https://stevenz-react-3enlinea.s3.amazonaws.com/index.html"
                    target="_blank"
                    className=" rounded-lg  text-base font-semibold leading-7 text-white hover:ring-gray-900/20 bg-softpurpleOpc bg-darkpurple hover:bg-white hover:text-darkpurple text-left md:text-sx flex w-full pr-0 pl-0 ml-2"
                  >
                    <UilGlobe
                      size="2rem"
                      className="text-white mx-auto hover:text-purpleOpc flex w-full"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
