import PropTypes from 'prop-types';
import LogoWG from '../../img/LogoWG.png'

const FormContactanos = ({handleInicioClick}) => {
  return (
    <>

    <div className="flex h-screen">
    <div className="ml-10 mt-36  w-full md:w-2/3 p-8">
        <h1 className="text-3xl text-center font-bold mb-6">Contactanos</h1>
        <form className=" ml-24 w-1/2 flex flex-col items-end   ">
        <div className="mb-4">
            <label htmlFor="nombre" className="text-sm font-semibold mb-2">Tu nombre:</label>
            <input type="text" id="nombre" name="nombre" className="border border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
            <label htmlFor="telefono" className="text-sm font-semibold mb-2">Tu teléfono:</label>
            <input type="tel" id="telefono" name="telefono" className="border border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="text-sm font-semibold mb-2">Tu email:</label>
            <input type="email" id="email" name="email" className="border border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
            <label htmlFor="comentarios" className="text-sm font-semibold mb-2 ">Tus comentarios:</label>
            <textarea id="comentarios" name="comentarios" rows="4" className="border border-gray-300 rounded-md p-2"></textarea>
        </div>
        <button type="submit" className="w-40 h-10 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Enviar</button>
        </form>
    </div>
    <div className="text-blue-700 hidden md:block md:w-1/3 bg-gray-200 text-center">
  <div className='ml-8'>
  <img 
            className='w-20 h-21 mt-20 ml-32'
            src={LogoWG} alt='Logo WG'
          />
 
 <div className="mb-10 mt-3">
  <div className="grid gap-8 items-start justify-center">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
        <span className="flex items-center space-x-5">
          <span className=" text-gray-50">WG CONSULTORES</span>
        </span>
      </button>
    </div>
  </div>
</div>


    <div className="flex items-center text-sm mb-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
    <p>Sitio Oficial <span className='text-red-700'>www.wgconsultores.com.mx</span></p>
    </div>

    <div className="flex items-center text-sm mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
      <p>Teléfono: <span className='text-red-700'>9993319980</span></p>
    </div>

    <div className="flex items-center text-sm mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
      <p>e-mail: <span className='text-red-700'>wgamboa@wgconsultores.com.mx</span></p>
    </div>

    <div className="flex items-center text-sm mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      <p>Horario: <span className='text-red-700'>Lun - Vie de 9 am a 5 pm</span></p>
    </div>

    <div className="flex items-center text-sm mb-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
      <p>Oficina: <span className='text-red-700'>Mérida, Yucatán</span></p>
    </div>
    
    <button
      onClick={handleInicioClick}
      className='w-20 h-8 mt-8 bg-blue-700 hover:bg-blue-800 rounded-md ring-offset-2 ring-2 text-white p-1 z-10'>
      Inicio
    </button>
  </div>
</div>
</div>

    </>
  )
}

FormContactanos.propTypes = {
    handleInicioClick: PropTypes.func.isRequired,
  };


export default FormContactanos
