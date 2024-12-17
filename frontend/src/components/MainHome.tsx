import { RiTeamFill } from "react-icons/ri";
import { GiFairyWand } from "react-icons/gi";
import { FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";
import { 
  Banner,  
  Section,
  SpinningBoxText,
  VotingPoll  
} from '../components';

import team_up from '../assets/team_up.svg'
import Resizable from "./Resizable";
import PlaneAnimation from './ScrollPlane/ScrollPlane';
import SvgAnimation from './ScrollPlane/PlaneGsap';
import AdvancedPlaneAnimation from "./AdvancedPlane";
import BoyOnLaptop from './LottieAnimation/BoyOnLaptop'


function MainHome() {
  return (
    <>
      <div className="m-auto">
      <PlaneAnimation/>
      </div> 
      {/*<div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="mx-4 sm:mx-10 md:mx-20 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold py-4 sm:py-6 md:py-8 ml-0 sm:ml-4 lg:ml-10 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            La solución perfecta para tu equipo
            </h1>
          </div>
        </div>
        
        <div className="mx-20">
          <p className="py-2 text-justify text-black sm:text-base md:text-lg lg:text-xl">
          En Planeo entendemos que cada proyecto es único, por eso ofrecemos un sistema flexible y personalizable para adaptarnos a tus necesidades. Nuestro objetivo es simplificar la gestión de tareas, eliminando la incertidumbre y permitiéndote concentrarte en lo que realmente importa. Con herramientas intuitivas, vistas personalizables e integración fluida con tus aplicaciones favoritas, Planeo transforma tus ideas en resultados tangibles, manteniendo a tu equipo alineado y motivado. ¡Lleva tus proyectos al siguiente nivel con Planeo!
          </p>
        </div>*/}
      <SpinningBoxText />
      
      <div className="mx-20">
        <div className="pb-10 mx-auto">
            <p className="py-2 text-justify text-black sm:text-base md:text-lg lg:text-xl">
                Planeo no solo facilita la gestión, sino que también optimiza la colaboración. Ofrecemos una plataforma intuitiva donde los equipos pueden comunicarse, compartir avances y resolver problemas rápidamente. Ya sea que trabajes de forma remota o en una oficina, Planeo te permite mantener el control total de tu proyecto, desde la planificación hasta la ejecución. ¡No esperes más para llevar tu equipo al siguiente nivel!
            </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-8 mx-auto flex items-center justify-center" data-aos="fade-up">
        <img
          src={team_up}
          alt="Equipo Planeo"
          className="w-full h-auto max-w-xs md:max-w-full object-cover"
        />
      </div>

    
      <Banner
      title="Ve tu trabajo desde otra perspectiva"
      description="En Planeo, sabemos que cada proyecto es único. Con nuestras vistas personalizables, puedes ver el trabajo de tu equipo desde todos los ángulos y encontrar la perspectiva perfecta para cada tarea."
      buttonText={
        <Link to="/sobre-nosotros">
          Explora nuestra historia
        </Link>
      }
      bgColor="bg-purple-500"
    >
    <AdvancedPlaneAnimation />

    </Banner>

    <Resizable/>
   
        
      <div>
        <div className="mx-2 mb-5 flex flex-col md:flex-row mt-20 gap-3 p-4">
          <Section
            title="Lleva tu productividad al máximo con Planeo"
            description="Con Planeo, llevar tus proyectos al siguiente nivel es más fácil que nunca. Personaliza tus flujos de trabajo, conecta tus herramientas favoritas y déjanos ayudarte a enfocarte en lo que realmente importa."
            className="bg-white py-10"
          />
          <Section
            icon={<FaCogs size={80} className="rounded-xl bg-blue-400 p-2" />}
            title="Automatización sin complicaciones"
            subtitle="Olvídate de las tareas repetitivas."
            description="Planeo se encarga de esas pequeñas tareas que ocupan tiempo innecesario. Configura automatizaciones sin escribir una sola línea de código y permite que Planeo haga el trabajo pesado, mientras tú te concentras en lo importante."
          />
          <Section
            icon={<GiFairyWand size={80} className="rounded-xl bg-blue-400 p-2" />}
            title="Conecta lo que necesitas"
            subtitle="Tus herramientas favoritas, en un solo lugar."
            description="Con Planeo, puedes integrar todas las aplicaciones que ya usas para trabajar de manera más eficiente. Añade los complementos que necesites y crea un espacio de trabajo que realmente funcione para ti y tu equipo."
          />
          <Section
            icon={<RiTeamFill size={80} className="rounded-xl bg-blue-400 p-2" />}
            title="Todo para equipos en crecimiento"
            subtitle="La solución completa y segura para equipos como el tuyo."
            description="Planeo Enterprise tiene todo lo que necesitas para crecer con tranquilidad. Con funciones avanzadas y seguridad de nivel empresarial, es la herramienta perfecta para equipos que buscan colaborar de manera fluida y escalar sus proyectos."
          />
        </div>
        <BoyOnLaptop/>
      </div>

      <div>
      <SvgAnimation/>
      </div>
      
        
      <VotingPoll />
    </>
  );
}

export default MainHome;
