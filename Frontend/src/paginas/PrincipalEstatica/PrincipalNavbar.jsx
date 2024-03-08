import { Link } from 'react-router-dom'
import LogoWG from '../../img/LogoWG.png'
import LogoFondo from '../../img/LogoFondo.jpeg'
import PrincipalCentro from './PrincipalCentro'

const PrincipalNavbar = () => {

  const handleServiciosClick = () => {
    // Encuentra el elemento "servicios" y realiza el desplazamiento suave
    const serviciosElement = document.getElementById('servicios');
    serviciosElement.scrollIntoView({ behavior: 'smooth' });
  };
    
  const handleCulturaClick = () => {
    // Encuentra el elemento "Nuestra Cultura" y realiza el desplazamiento suave
    const serviciosElement = document.getElementById('cultura');
    serviciosElement.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAcercaClick = () => {
    // Encuentra el elemento "Nuestra Cultura" y realiza el desplazamiento suave
    const serviciosElement = document.getElementById('acerca');
    serviciosElement.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactanosClick = () => {
    // Encuentra el elemento "Nuestra Cultura" y realiza el desplazamiento suave
    const serviciosElement = document.getElementById('contactanos');
    serviciosElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <nav className='flex items-center justify-between bg-slate-100 p-2'>
        <div className=''>
          <img 
            className='w-32 h-31  ml-10'
            src={LogoWG} alt='Logo WG'
          />
        </div>
        <div id='inicio' className='ml-4 flex flex-col justify-center'>
          <div className="text-center mb-10 mt-6 text-blue-700 text-2xl">
            <span className="underline decoration-red-600 decoration-4  "> 
            Contabilidad - Impuestos -  Seguridad Social
            </span>
          </div>
          <div className="text flex mb-4">
            <button 
            onClick={handleServiciosClick}
            className='w-36 h-8 mr-4 bg-blue-700 hover:bg-blue-800 rounded-md ring-offset-2 ring-2 text-sm text-white p-1'>
              Servicios</button>
            <button 
            onClick={handleCulturaClick}
            className='w-36 h-8 mr-4 bg-blue-700 hover:bg-blue-800 rounded-md ring-offset-2 ring-2 text-sm text-white p-1'>Nuestra Cultura</button>
            <button 
            onClick={handleAcercaClick}
            className='w-36 h-8 mr-4 bg-blue-700 hover:bg-blue-800 rounded-md ring-offset-2 ring-2 text-sm text-white p-1'>Acerca de nosotros</button>
            <button 
            onClick={handleContactanosClick}
            className='w-36 h-8 mr-4 bg-blue-700 hover:bg-blue-800 rounded-md ring-offset-2 ring-2 text-sm text-white p-1'>Contáctanos</button>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="ring-offset-2 ring-2 text-sm relative px-7 h-8 py-4 bg-blue-700 rounded-md leading-none flex items-center divide-x divide-gray-600">
                  <Link to="/login">
                    <span className="text-white">Iniciar Sesion</span>
                  </Link>
                </button>
              </div>

          </div>
        </div>
      </nav>
      <div>
          <img 
          src={LogoFondo} alt='Logo Fondo'
          />
      </div>
      < PrincipalCentro />
    </div>
  )
}

export default PrincipalNavbar


