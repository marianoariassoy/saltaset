import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { menu } from '../../data/data'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { Line } from '../../icons/icons'
import FilmarItem from './FilmarItem'
import useFetch from '../../hooks/useFetch'
import HTML from '../../hooks/useHTML'
import BeatLoader from 'react-spinners/BeatLoader'

const Permisos = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/filmarensalta/${lan}`)
  const { data: dataTexts, loading: loadingTexts } = useFetch(`/textos/${lan}`)

  const texts = {
    ES: {
      title: 'Cómo rodar',
      title2: 'En Salta',
      link: 'Condiciones generales'
    },
    EN: {
      title: 'Why filming',
      title2: 'In Salta',
      link: 'Terms and conditions'
    },
    FR: {
      title: 'Pourquoi tournage',
      title2: 'à Salta',
      link: 'Termes et conditions'
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section
        className='my-24'
        id='filmar-en-salta'
      >
        <section className='row w-full max-w-6xl m-auto px-6 lg:px-12 flex flex-col items-start gap-y-6'>
          <div className='flex gap-x-6 items-center'>
            <div className='text-4xl lg:text-5xl'>
              <span className='block font-secondary uppercase'>{texts[lan].title}</span>
              <span className='block font-secondary-black uppercase'>{texts[lan].title2}</span>
            </div>
            <div className='text-primary'>
              <Line />
            </div>
          </div>

          <div className='text-wrap mb-3'>{!loadingTexts && <HTML text={dataTexts[25].text} />}</div>

          <h2 className='uppercase font-bold text-xl'>{texts[lan].link}</h2>

          <div className='text-wrap mb-6'>{!loadingTexts && <HTML text={dataTexts[84].text} />}</div>

          <section className='w-full flex flex-col gap-y-3'>
            {loading ? (
              <div>
                <BeatLoader />
              </div>
            ) : (
              data.map(item => (
                <FilmarItem
                  key={item.id}
                  data={item}
                />
              ))
            )}
          </section>
        </section>
      </section>
      <HeadProvider>
        <Title>Salta Set &bull; {menu[1][lan]['categories'][0]['title']}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Permisos
