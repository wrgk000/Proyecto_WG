import PropTypes from 'prop-types'


const ComponenteServicios = ({listaServicios}) => {
  return (
    <div className='flex flex-wrap justify-around bg-blue-200 text-blue-800'>  
      {listaServicios.map((servicio, index) => (
        <div key={index} className='w-1/3 p-4 justify-between text-center bg-slate-50 border-4 border-slate-300 rounded-md'>
          <img 
          className='w-8 h-8 m-auto mb-6'
          src={servicio.imagen} alt={`Imagen ${servicio.titulo}`} />
          <h1 className='mb-6 uppercase'>{servicio.titulo}</h1>
          <p className='text-justify '>{servicio.descripcion}</p>
        </div>
      ))}
    </div>
  )
}

ComponenteServicios.propTypes = {
    listaServicios: PropTypes.arrayOf(
      PropTypes.shape({
        imagen: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default ComponenteServicios
