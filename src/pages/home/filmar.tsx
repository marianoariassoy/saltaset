import { Line, Pin, Superficie, User, Time, Idioma, Historia } from '../../icons/icons'
// import { useDataContext } from '../../context/useDataContext'

const Filmar = () => {
  // const { lan } = useDataContext()

  const data = [
    {
      title: 'Ubicación',
      text: 'Ubicada al Norte de Argentina, Salta se destaca por su heterogeneidad geográfica y cultural..',
      icon: <Pin />
    },
    {
      title: 'Superficie',
      text: '155.488 Km²  (4,1% del total nacional)',
      icon: <Superficie />
    },
    {
      title: 'Población',
      text: ' 1.440.672 habitantes (Censo 2022)',
      icon: <User />
    },
    {
      title: 'Huso Horario',
      text: '- UTC -3',
      icon: <Time />
    },
    {
      title: 'Idioma Oficial',
      text: 'Español - Wichi',
      icon: <Idioma />
    },
    {
      title: 'Historia',
      text: 'Tiempos prehispánicos, la época colonial y la guerra independentista dejaron un imborrable legado en el patrimonio cultural y arquitectónico de la provincia de Salta. Bastión en la guerra de la Independencia latinoamericana, el territorio fue invadido reiteradas veces por los españoles, a quienes Martín Miguel de Güemes opuso férrea resistencia. Con la decisiva Batalla de Salta, el 20 de febrero de 1813, Belgrano logró que todo el Norte Argentino quedase libre.',
      icon: <Historia />
    }
  ]
  return (
    <section
      className='bg-secondary text-white'
      id='filmar-en-salta'
    >
      <div className='w-full max-w-6xl m-auto px-6 py-20 grid grid-cols-2 gap-6 items-center'>
        <div className='col text-6xl'>
          <span className='text-primary font-secondary-black mb-4 flex items-center gap-x-4'>
            02 <Line />
          </span>
          <span className='block font-secondary'>FILMAR</span>
          <span className='block font-secondary-black'>EN SALTA</span>
        </div>
        <div className='col lg:pl-12 flex flex-col gap-y-6'>
          {data.map(({ title, text, icon }, index) => (
            <article key={index}>
              <div className='text-primary mb-3 flex items-center gap-x-3 text-xl'>
                {icon}
                <span className='uppercase whitespace-nowrap text-sm font-bold'>{title}</span>
                <hr className='w-full border-primary' />
              </div>
              <p className='text-wrap'>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Filmar
