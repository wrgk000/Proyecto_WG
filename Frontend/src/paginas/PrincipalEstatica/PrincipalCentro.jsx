import imgContabilidad from '../../img/Contabilidad.png'
import imgImpuestos from '../../img/Impuestos.png'
import imgSeguridadSocial from '../../img/SeguridadSocial.png'
import imgAtestiguamiento from '../../img/Atestiguamiento.png'
import imgReestructuras from '../../img/Reestructuras.png'
import imgNominas from '../../img/Nominas.png'
import imgmision from '../../img/mision.jpeg'
import imgvision from '../../img/vision.jpeg'
import imgvalores from '../../img/valores.jpeg'
import imgAcercaNosotros from '../../img/AcercaNosotros.jpeg'

import ComponenteServicios from './ComponenteServicios';
import ComponenteCultura from './ComponenteCultura'
import AcercaNosotros from './AcercaNosotros'
import FormContactanos from './FormContactanos'

const PrincipalCentro = () => {

  const handleInicioClick = () => {
    // Encuentra el elemento "servicios" y realiza el desplazamiento suave
    const serviciosElement = document.getElementById('inicio');
    serviciosElement.scrollIntoView({ behavior: 'smooth' });
  };  

    const listaServicios =  [
        {
          imagen: imgContabilidad,
          titulo: 'Contabilidad',
          descripcion: 'Prestamos servicios de compilación contable, elaboración de estados financieros e implementación de controles internos de acuerdo a las necesidades de tu empresa. De igual manera ofrecemos paquetes de facturación electrónica CFDI acorde al volumen de facturación de tu negocio',
        },   
        {
            imagen: imgImpuestos,
            titulo: 'Impuestos',
            descripcion: 'Calculamos pagos provisionales, elaboramos declaraciones anuales, realizamos solicitudes de devolución de impuestos y contabilidad electrónica para personas físicas y morales. Te asesoramos en la inscripción de tu negocio ante el SAT en el régimen fiscal que mejor se adecue a tus necesidades.'
          },
          {
            imagen: imgSeguridadSocial,
            titulo: 'SeguridadSocial',
            descripcion: 'Te apoyamos en la inscripción de tu negocio ante el IMSS, calculamos las cuotas obrero patronales y te asesoramos en la determinación del salario base de cotización de tus trabajadores. También ofrecemos el servicio de movimientos de altas, bajas y modificaciones de salario a través del IDSE.',
          },
          {
            imagen: imgAtestiguamiento,
            titulo: 'Atestiguamientos',
            descripcion: 'Llevamos a cabo auditorias en materia de Seguridad Social e Infonavit para cumplir con los requerimientos solicitados por la autoridad, lo que permitirá que tu negocio cuente con un soporte de un especialista que valida que los pagos realizados ante el IMSS e INFONAVIT son adecuados.',
          },
          {
            imagen: imgReestructuras,
            titulo: 'Reestructuras Corporativas',
            descripcion: 'Ofrecemos asesoría para llevar a cabo fusiones, escisiones, ventas de acciones y reducciones de capital. Así como la elaboración de dictámenes por enajenación de acciones para optimizar el pago del impuesto sobre la renta que genera esta operación',
          },
          {
            imagen: imgNominas,
            titulo: 'Nominas',
            descripcion: 'Te apoyamos en la elaboración, timbrado y manejo de nomina con el adecuado cálculo de los pagos por salarios a tus trabajadores y las retenciones que conllevan.Realizamos reestructuraciones de nomina para optimizar el pago de las cuotas obrero-patronales y de ISR de los trabajadores.',
          },
        ];

        const listaCultura =  [
          {
            imagen: imgmision,
            titulo: 'Misión',
            descripcion: 'Otorgar asesoría y servicios personalizados en las áreas contables y fiscales brindando las mejores soluciones  a los contribuyentes a traves la optimización de sus recursos, siempre con apego a los marcos legales.'
          },
          {
            imagen: imgvision,
            titulo: 'Visión',
            descripcion: 'Otorgar asesoría y servicios personalizados en las áreas contables y fiscales brindando las mejores soluciones  a los contribuyentes a traves la optimización de sus recursos, siempre con apego a los marcos legales.'
          },
          {
            imagen: imgvalores,
            titulo: 'Valores',
            descripcion:'Confidencialidad , Respeto, Trabajo en equipo, Atención oportuna, Capacitación constante, Legalidad' 
          },   
        ]

  return (
    <div className='bg-slate-50'>
      
      
      <div id='servicios' className='text-center'>
        <h1 className='uppercase text-blue-700 text-3xl p-8 mb-8 relative'>
            Servicios
            <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/6 h-0.5  bg-gray-500 mb-7'></span>
        </h1>
         <ComponenteServicios listaServicios={listaServicios} />
        <button 
        onClick={handleInicioClick}
        className='w-20 h-8 mb-28 mt-4  bg-blue-700 hover:bg-blue-800 rounded-md ring-offset-2 ring-2 text-white p-1'>
          Inicio
        </button>
      </div>
      
      <div id='cultura' className='text-center'>
        <h1 className='uppercase text-blue-700 text-3xl p-8 mb-8 relative'>
            Cultura
            <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/6 h-0.5  bg-gray-500 mb-7'></span>
        </h1>
         <ComponenteCultura listaCultura={listaCultura} />
        <button 
        onClick={handleInicioClick}
        className='w-20 h-8 mb-28 mt-4  bg-blue-700 hover:bg-blue-800 rounded-md ring-offset-2 ring-2 text-white p-1'>
          Inicio
        </button>
      </div>

      <div className="flex items-center justify-center h-screen" style={{ backgroundImage: `url(${imgAcercaNosotros})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div
          id='acerca'
          className='w-3/4 md:w-1/2 h-52 p-4 text-justify bg-slate-50 border-4 border-slate-300 rounded-md text-blue-800 mx-auto flex flex-col items-center relative'
          >
          <div className="bg-black absolute inset-0 opacity-30"></div>
          <h1 className='text-center uppercase mb-4 z-10'>Acerca de nosotros</h1>
          <AcercaNosotros />
          <button
          onClick={handleInicioClick}
          className='w-20 h-8 mt-8 bg-blue-700 hover:bg-blue-800 rounded-md ring-offset-2 ring-2 text-white p-1 z-10'>
          Inicio
          </button>
          </div>
      </div>

      <div id='contactanos'>
       <FormContactanos handleInicioClick={handleInicioClick}/>
      
      </div>

    </div>
  )
}

export default PrincipalCentro
