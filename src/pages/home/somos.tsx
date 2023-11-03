import { Line, Pin, Film } from '../../icons/icons'
// import { useDataContext } from '../../context/useDataContext'

const Somos = () => {
  // const { lan } = useDataContext()

  return (
    <section id='somos-salta-set'>
      <div className='row mb-8'>
        <img src='/assets/social-bottom.svg' />
      </div>
      <div className='row w-full max-w-6xl m-auto px-6 grid lg:grid-cols-2 gap-6'>
        <div className='text-4xl lg:text-5xl'>
          <span className='text-primary font-secondary-black mb-4 flex items-center gap-x-4'>
            01 <Line />
          </span>
          <span className='block font-secondary'>SOMOS</span>
          <span className='block font-secondary-black'>SALTA SET</span>
        </div>
        <div className='pt-6'>
          <div className='row'>
            <p className='text-wrap'>
              Somos un pro grama del <strong>Gobierno de la Provincia</strong> que tiene la misión de promocionar Salta
              como escenario ideal para el rodaje de <strong>producciones audiovisuales.</strong>
              <br /> <br />
              Brindamos un <strong>servicio público</strong> a la industria, asistiendo a las productoras, apoyando al
              sector local y estimulando la inversión en todas las regiones de la <strong>provincia.</strong>
            </p>
          </div>
          <div className='row flex lg:gap-x-12 mt-12 lg:mt-24 mb-24'>
            <article className='flex gap-x-3 items-center'>
              <div className='w-14 h-14 aspect-square flex justify-center items-center bg-primary rounded-full'>
                <Film />
              </div>
              <div>
                <a
                  href='#'
                  className='font-bold hover:underline underline-offset-4 leading-5 inline-block'
                >
                  Registra tu producción
                </a>
              </div>
            </article>
            <article className='flex gap-x-3 items-center'>
              <div className='w-14 h-14 aspect-square flex justify-center items-center bg-primary rounded-full'>
                <Pin />
              </div>
              <div>
                <a
                  href='#'
                  className='font-bold hover:underline underline-offset-4 leading-5 inline-block'
                >
                  Sugiere una localización
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Somos
