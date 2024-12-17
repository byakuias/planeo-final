import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import{FaClipboardList} from 'react-icons/fa'
import { MdAccessTimeFilled, MdFlashOn } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
import { BsFillPaletteFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa6";
import {Cards} from '../components'
import LottieAnimation from "./LottieAnimation/LottieAnimation";

interface ArrowProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={`${className} bg-gray-800 p-2 rounded-full cursor-pointer`}
    style={{ ...style, display: "block", zIndex: 20 }}
    onClick={onClick}
  >
    <FaChevronLeft color="red" />
  </div>
);
const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={`${className} bg-gray-800 p-2 rounded-full cursor-pointer`}
    style={{ ...style, display: "block", zIndex: 20 }}
    onClick={onClick}
  >
    <FaChevronRight color="red" />
  </div>
);

const Resizable: React.FC = () =>  {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
        {
          breakpoint: 1024, // tablets
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, //phones
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };
  return (
    <div className="sm:container mx-auto py-20">   

      <div className="mb-24">
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="mx-4 sm:mx-10 md:mx-20 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold py-4 sm:py-6 md:py-8 ml-0 sm:ml-4 lg:ml-10 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              Gestiona proyectos de manera inteligente con Planeo
            </h1>
          </div>
        </div>

        
        <div className="mx-20">
          <p className="py-2 text-justify text-black sm:text-base md:text-lg lg:text-xl">
              Con Planeo, cada aspecto de tu proyecto está diseñado para ser más fácil y efectivo. Organiza tareas, realiza reuniones productivas, y coordina a tu equipo de manera fluida, todo desde un solo lugar. Las herramientas de automatización, seguimiento en tiempo real y personalización te permiten ajustar la plataforma a tus necesidades, mientras mantienes el enfoque en lo que realmente importa: alcanzar tus objetivos con éxito y eficiencia.
          </p>
        </div>
        <LottieAnimation/>

      </div>
      <div
        style={{
          width: "1400 px",
        }}
      >
        <Slider {...settings}>
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
            description="Haz que tus reuniones sean rápidas y eficaces. Con Planeo, los temas importantes están al alcance de todos para que cada sesión sea directa, clara y, por qué no, agradable."
          />
          <Cards
            bgColor="bg-blue-400"
            icon={<FaHandshake size={50} color="#60a5fa" />}
            title="Integración de equipo"
            description="Incorporar nuevos miembros a tu proyecto es sencillo y ordenado. Con una interfaz intuitiva, Planeo facilita que todos comprendan su rol y contribuyan desde el primer día. Un equipo bien integrado es un equipo exitoso."
          />

          <Cards
            bgColor="bg-teal-400"
            icon={<VscGraphLine size={50} color="#2dd4bf" />}
            title="Progreso en tiempo real"
            description="Con gráficos y visualizaciones en tiempo real, Planeo te permite monitorear el progreso de cada tarea. Ajusta recursos, anticipa obstáculos y celebra los logros al ritmo de tu equipo."
          />
          
          <Cards
            bgColor="bg-purple-400"
            icon={<MdFlashOn size={50} color="#c084fc" />}
            title="Automatización que simplifica"
            description=" Libérate de las tareas repetitivas con nuestras funciones de automatización. Configura acciones automáticas y permite que Planeo haga el trabajo tedioso por ti, para que puedas concentrarte en lo que realmente importa."
          />
          <Cards
            bgColor="bg-blue-400"
            icon={<BsFillPaletteFill size={50} color="#60a5fa" />}
            title="Personalización a tu medida"
            description="Planeo se adapta a tus necesidades. Personaliza los tableros, colores y etiquetas según el estilo de tu proyecto. Desde grandes desafíos hasta tareas diarias, construye el entorno perfecto para tus objetivos."
          /> 

        </Slider>
      </div>
    </div>
  );
}

export default Resizable;
