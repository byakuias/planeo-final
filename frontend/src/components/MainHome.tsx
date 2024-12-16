import { RiTeamFill,} from "react-icons/ri";
import { GiFairyWand } from "react-icons/gi";
import { FaCogs } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import {
  Banner,
  Cards,
  Section
} from '.'

import SpinningBoxText from "./SpinningBoxText"
import VotingPoll from "./VotingPoll";

import CompetenciaHome from './CompetenciaHome'



function MainHome() {
    return (
      <>
        <Banner
           title="Ve tu trabajo desde otra perspectiva"
           description="En Planeo, sabemos que cada proyecto es único. Con nuestras vistas personalizables, puedes ver el trabajo de tu equipo desde todos los ángulos y encontrar la perspectiva perfecta para cada tarea."
           buttonText="Descubre todas las vistas de Planeo"
           bgColor="bg-purple-500"
        />

        
        <div className="my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <Cards
              bgColor="bg-teal-400"
              icon={<FaClipboardList size={50} color="#2dd4bf" />}
              title="Organiza tus ideas con claridad"
              description="Con Planeo, puedes estructurar todas tus ideas y tareas en un solo lugar. Olvídate de las listas desordenadas: aquí tendrás una vista clara de todo lo que necesitas hacer para avanzar en cada proyecto."
            />
             <Cards
              bgColor="bg-purple-400"
              icon={<MdAccessTimeFilled size={50} color="#c084fc" />}
              title="Reuniones productivas"
              description="Haz que tus reuniones sean rápidas y eficaces. Con Planeo, los temas importantes están al alcance de todos para que cada sesión sea directa, clara y, por qué no, agradable. Maximiza el tiempo y enfócate en los resultados."
            />
          
            <Cards
              bgColor="bg-blue-400"
              icon={<FaHandshake size={50} color="#60a5fa" />}
              title="Integración de equipo"
              description="Incorporar nuevos miembros a tu proyecto es sencillo y ordenado. Con una interfaz intuitiva, Planeo facilita que todos comprendan su rol y contribuyan desde el primer día. Un equipo bien integrado es un equipo exitoso."
            />
          </div>
        </div>
        

        <div>
          <div className="mx-2 mb-5 flex flex-col md:flex-row mt-20 gap-3 p-4">
      
            <Section
              title="Lleva tu productividad al máximo con Planeo"
              description="Con Planeo, llevar tus proyectos al siguiente nivel es más fácil que nunca. Personaliza tus flujos de trabajo, conecta tus herramientas favoritas y déjanos ayudarte a enfocarte en lo que realmente importa."
              className="bg-white py-10"
            />

            <Section  
              icon={<FaCogs size={80} className="rounded-xl bg-blue-400 p-2"/>}
              title="Automatización sin complicaciones"
              subtitle="Olvídate de las tareas repetitivas."
              description="Planeo se encarga de esas pequeñas tareas que ocupan tiempo innecesario. Configura automatizaciones sin escribir una sola línea de código y permite que Planeo haga el trabajo pesado, mientras tú te concentras en lo importante."
              className=" "
            />

            <Section  
              icon={<GiFairyWand size={80} className="rounded-xl bg-blue-400 p-2"/>}
              title=" Conecta lo que necesitas"
              subtitle="Tus herramientas favoritas, en un solo lugar."
              description=" Con Planeo, puedes integrar todas las aplicaciones que ya usas para trabajar de manera más eficiente. Añade los complementos que necesites y crea un espacio de trabajo que realmente funcione para ti y tu equipo."
              className=" "
            />
            
            <Section  
              icon={<RiTeamFill size={80} className="rounded-xl bg-blue-400 p-2"/>}
              title="Todo para equipos en crecimiento"
              subtitle=" La solución completa y segura para equipos como el tuyo."
              description=" Planeo Enterprise tiene todo lo que necesitas para crecer con tranquilidad. Con funciones avanzadas y seguridad de nivel empresarial, es la herramienta perfecta para equipos que buscan colaborar de manera fluida y escalar sus proyectos."
              className=" "
            />
  
          </div>
        </div>

        <SpinningBoxText />
        <VotingPoll/>
       
        <Banner
           title="Inicia tu viaje con Planeo hoy"
           inputPlaceholder="Correo electrónico"
           bgColor="gradient"
           buttonAction={() => alert("Formulario enviado con éxito")}
        />

        <CompetenciaHome/>
        
       
      </>
  )
  }

  export default MainHome;