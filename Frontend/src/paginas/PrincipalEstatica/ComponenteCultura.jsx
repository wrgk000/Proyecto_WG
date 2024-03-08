import PropTypes from 'prop-types'

const ComponenteCultura = ({listaCultura}) => {
  return (
    <div className='flex flex-wrap justify-around bg-blue-200 text-blue-800'>  
    {listaCultura.map((cultura, index) => (
      <div key={index} className='w-1/3 p-4 justify-between text-center bg-slate-50 border-4 border-slate-300 rounded-md'>
        <img 
        className='w-56 h-36 m-auto mb-6'
        src={cultura.imagen} alt={`Imagen ${cultura.titulo}`} />
        <h1 className='mb-6 uppercase'>{cultura.titulo}</h1>
        <p className='text-justify '>{cultura.descripcion}</p>
      </div>
    ))}
  </div>
  )
}

ComponenteCultura.propTypes = {
    listaCultura: PropTypes.arrayOf(
      PropTypes.shape({
        imagen: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
      })
    ).isRequired,
  };


export default ComponenteCultura


