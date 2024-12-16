import imagen1 from '../assets/imagen1.png';
import Button from './Button';
import FormEmailPage from './FormEmailPage'


function HeaderHome() {
    return (
      <>
        
        <main className="mx-auto py-5 px-4 sm:px-6 lg:px-6 text-center gradient">
          <div className="container mx-auto  rounded my-10 p-4 flex flex-col md:flex-row items-center gap-4 max-w-screen-lg">
            <div className="text-center p-6 w-full md:w-1/2">
              <h1 className="text-4xl pt-20 font-bold mb-4  text-white">
                Potencia la Productividad de tu Equipo
              </h1>
              <p className="text-lg mb-4 ">
                Organiza, prioriza y colabora eficientemente con nuestro sistema de gestión de tareas diseñado para optimizar el flujo de trabajo de tu equipo. ¡Lleva tus proyectos al siguiente nivel!
              </p>
              <p className="text-sm md:text-base lg:text-lg mb-6 ">
                  Regístrate para obtener acceso al sistema.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center mt-4">
                <FormEmailPage className="hidden sm:block py-5" />   
                <div className="sm:ml-2">
                  <Button className="bg-blue-900 hover:bg-white m-2 hover:text-blue-900 text-white font-bold">
                    Regístrate
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-6 md:w-1/2 flex justify-center">
              <img src={imagen1} alt="imagen productividad" className="w-full h-auto max-w-xs md:max-w-full object-cover" />
            </div>
          </div> 
        </main>
       
      </>
    );
}

export default HeaderHome;