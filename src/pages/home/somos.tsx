import { Link } from 'wouter'
import { Line, Pin, Film, Address } from '../../icons/icons'
import useFetch from '../../hooks/useFetch'
import HTML from '../../hooks/useHTML'

const Somos = ({ lan }) => {
  const { data: dataTexts, loading: loadingTexts } = useFetch(`/textos/${lan}`)

  const texts = {
    ES: {
      title: 'Somos',
      link1: 'Registra tu producción',
      link2: 'Sugiere una localización',
      link3: 'Sumate al directorio'
    },
    EN: {
      title: 'We are',
      link1: 'Register your company',
      link2: 'Suggest a location',
      link3: 'Join the directory'
    },
    FR: {
      title: 'Nous sommes',
      link1: 'Enregistrez votre entreprise',
      link2: 'Sugère une localisation',
      link3: 'Rejoignez le répertoire'
    }
  }

  return (
    <section id='somos-salta-set'>
      <div className='row mb-8 '>
        <img src='/assets/social-bottom.svg' />
      </div>
      <section className='row w-full max-w-6xl m-auto px-6 grid lg:grid-cols-2 gap-6'>
        <header className='col text-4xl lg:text-5xl reveal-on-scroll'>
          <span className='text-primary font-secondary-black mb-4 flex items-center gap-x-4'>
            01 <Line />
          </span>
          <span className='block font-secondary uppercase'>{texts[lan].title}</span>
          <span className='block font-secondary-black'>SALTA SET</span>
        </header>
        <div className='col lg:pt-6 reveal-on-scroll'>
          <div className='row'>{!loadingTexts && <HTML text={dataTexts[23].text} />}</div>
          <div className='row grid grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:gap-x-6 lg:mt-20 mb-24'>
            <article className='flex gap-x-3 items-center'>
              <div className='w-12 h-12 lg:w-14 lg:h-14 aspect-square flex justify-center items-center bg-primary rounded-full text-xl'>
                <Film />
              </div>
              <Link href='/filmar-en-salta/formulario'>
                <a className='font-bold hover:underline underline-offset-4 leading-5 inline-block'>
                  {texts[lan].link1}
                </a>
              </Link>
            </article>
            <article className='flex gap-x-3 items-center'>
              <div className='w-12 h-12 lg:w-14 lg:h-14 aspect-square flex justify-center items-center bg-primary rounded-full text-xl'>
                <Pin />
              </div>
              <a
                href='mailto:saltaset@edusalta.gov.ar'
                className='font-bold hover:underline underline-offset-4 leading-5 inline-block'
              >
                {texts[lan].link2}
              </a>
            </article>
            <article className='flex gap-x-3 items-center'>
              <div className='w-12 h-12 lg:w-14 lg:h-14 aspect-square flex justify-center items-center bg-primary rounded-full text-xl'>
                <Address />
              </div>
              <Link href='/directorio/empresas/formulario'>
                <a className='font-bold hover:underline underline-offset-4 leading-5 inline-block'>
                  {texts[lan].link3}
                </a>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Somos
