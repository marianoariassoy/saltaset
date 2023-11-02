import ImageComponent from '../../components/Image'
import { Line } from '../../icons/icons'

const BeneficiosItem = () => {
  return (
    <article className='row flex flex-col lg:flex-row gap-12 mb-16'>
      <div className='col lg:w-2/5 flex flex-col gap-y-6 items-start'>
        <div className='flex gap-x-6 items-center'>
          <div className='text-4xl lg:text-4xl'>
            <span className='block font-secondary uppercase'>Cash</span>
            <span className='block font-secondary-black uppercase'>REBATE</span>
          </div>
          <div className='text-primary'>
            <Line />
          </div>
        </div>
        <p className='text-wrap text-sm'>
          Salta Set es un programa que permite consolidar sectores incluidos en la Ley Nacional 27.506 de Régimen de
          Promoción de la Economía del Conocimiento, a la cual la provincia de Salta adhiere mediante la Ley provincial
          8302. En este sentido, establecemos un Programa de reembolso a producciones nacionales e internacionales que
          filmen en provincia de Salta. El Cash Rebate tiene por objeto estimular y apoyar las producciones
          audiovisuales que se desarrollen en todo el territorio salteño y que generen un impacto no solo en la
          actividad local, sino también en sectores asociados, tales como el turismo, la gastronomía, la innovación
          tecnológica, los servicios logísticos, entre otros. De esta manera incentivamos la contratación de mano de
          obra local y contribuimos con la promoción de la provincia a través de la difusión nacional e internacional.
        </p>
        <a
          href='#'
          className='rounded-full px-6 py-2 uppercase font-bold bg-primary text-sm button-black-hover text-center'
        >
          Bases y condiciones
        </a>
      </div>
      <div className='col lg:w-3/5'>
        <div className='aspect-[6/4]'>
          <ImageComponent
            src='https://images.pexels.com/photos/2865263/pexels-photo-2865263.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt='beneficios'
          />
        </div>
      </div>
    </article>
  )
}

export default BeneficiosItem
