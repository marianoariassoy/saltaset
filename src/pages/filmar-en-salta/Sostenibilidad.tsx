import { HeadProvider, Title } from 'react-head'
import { menu } from '../../data/data'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { Line } from '../../icons/icons'
import SostenibilidadItem from './SostenibilidadItem'
import useFetch from '../../hooks/useFetch'
import HTML from '../../hooks/useHTML'
import BeatLoader from 'react-spinners/BeatLoader'

const Sostenibilidad = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/sostenibilidad/${lan}`)
  const { data: dataTexts, loading: loadingTexts } = useFetch(`/textos/${lan}`)

  const texts = {
    ES: {
      title: 'Cómo rodar',
      title2: 'En Salta',
      title3: 'DECALOGO DE BUENAS PRÁCTICAS',
      title4: 'EN LA PRODUCCIÓN AUDIOVISUAL',
      title5: 'CRITERIOS GENERALES',
      text1: 'Fuente'
    },
    EN: {
      title: 'Why filming',
      title2: 'In Salta',
      title3: 'GOOD PRACTICES DECLARATION',
      title4: 'IN THE AUDIO VISUAL PRODUCTION',
      title5: 'GENERAL CRITERIA',
      text1: 'Source'
    },
    FR: {
      title: 'Pourquoi tournage',
      title2: 'à Salta',
      title3: 'DECLARATION DE BUENES PRÁCTICAS',
      title4: 'DANS LA PRODUCTION AUDIOVISUELLE',
      title5: 'CRITERES GENERAUX',
      text1: 'Source'
    }
  }

  return (
    <Layout>
      <section className='mt-12 lg:my-24'>
        <section className='row w-full max-w-6xl m-auto px-6 lg:px-12 flex flex-col items-start gap-y-6'>
          <header className='flex gap-x-6 items-center mb-6'>
            <div className='text-4xl lg:text-5xl'>
              <span className='block font-secondary uppercase'>{texts[lan].title}</span>
              <span className='block font-secondary-black uppercase'>{texts[lan].title2}</span>
            </div>
            <div className='text-primary'>
              <Line />
            </div>
          </header>

          <h2 className='uppercase font-bold text-xl'>{menu[1][lan]['categories'][1]['title']}</h2>

          <div className='text-wrap mb-6'>{!loadingTexts && <HTML text={dataTexts[306].text} />}</div>

          <header className='flex gap-x-6 items-center'>
            <div className='text-2xl lg:text-3xl'>
              <span className='block font-secondary uppercase'>{texts[lan].title3}</span>
              <span className='block font-secondary-black uppercase'>{texts[lan].title4}</span>
            </div>
            <div className='text-primary'>
              <Line />
            </div>
          </header>

          <h2 className='uppercase font-bold text-xl'> {texts[lan].title5}</h2>

          <div className='text-wrap mb-6'>{!loadingTexts && <HTML text={dataTexts[307].text} />}</div>

          <section className='w-full flex flex-col gap-y-3'>
            {loading ? (
              <div>
                <BeatLoader />
              </div>
            ) : (
              data.map((item, index) => (
                <SostenibilidadItem
                  key={item.id}
                  data={item}
                  number={index + 1}
                />
              ))
            )}
          </section>

          <div className='text-right w-full text-sm mt-6'>
            <p>{texts[lan].text1}: Decálogo de Buenas Prácticas en la Producción Audiovisual</p>
            <p>Barcelona Film Commission</p>
          </div>
        </section>
      </section>
      <HeadProvider>
        <Title>Salta Set &bull; {menu[1][lan]['categories'][1]['title']}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Sostenibilidad
