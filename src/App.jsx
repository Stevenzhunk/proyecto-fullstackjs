import './App.css';
import About from './assets/components/About';
import Contacs from './assets/components/Contacs';
import Courses from './assets/components/Courses';
import Hero from './assets/components/Hero';
import Nav from './assets/components/NavbarTwo';
import Projects from './assets/components/Projects';
import Steps from './assets/components/Steps';
import Technology from './assets/components/Technology';
import ImagedocsDark from './assets/img/docs-dark@30.1a9f8cbf.avif';
import ImagedocsDark2 from './assets/img/docs@30.8b9a76a2.avif';

function App() {
  return (
    <div className="App ">
      <div>
        <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
          <div className="w-[108rem] flex-none flex justify-end">
            <picture>
              <source srcSet={ImagedocsDark2} type="image/avif" />
              <img
                src="./assets/img/docs@tinypng.d9e4dcdc.png"
                alt=""
                className="w-[71.75rem] flex-none max-w-none dark:hidden"
                decoding="async"
              />
            </picture>
            <picture>
              <source srcSet={ImagedocsDark} type="image/avif" />
              <img
                src="./assets/img/docs-dark@tinypng.1bbe175e.png"
                alt=""
                className="w-[90rem] flex-none max-w-none hidden dark:block"
                decoding="async"
              />
            </picture>
          </div>
        </div>
        <Nav />
        <Hero />
      </div>
      <About />
      <Steps />
      <Projects />
      <Courses />
      <Technology />
      <Contacs />
    </div>
  );
}

export default App;
