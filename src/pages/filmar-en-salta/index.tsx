import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { menu } from '../../data/data'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { Line } from '../../icons/icons'
import FilmarItem from './FilmarItem'
import useFetch from '../../hooks/useFetch'
import HTML from '../../hooks/useHTML'
import Loader from '../../components/Loader'

const Index = () => {
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
        <section className='row w-full px-6 lg:px-12 pt-20 flex flex-col items-start gap-y-6'>
          <div className='flex gap-x-6 items-center'>
            <div className='text-4xl lg:text-5xl'>
              <span className='block font-secondary uppercase'>{texts[lan].title}</span>
              <span className='block font-secondary-black uppercase'>{texts[lan].title2}</span>
            </div>
            <div className='text-primary'>
              <Line />
            </div>
          </div>

          <p className='text-wrap max-w-4xl mb-3'>{loadingTexts ? <Loader /> : <HTML text={dataTexts[25].text} />}</p>

          <span className='rounded-full text-sm px-6 py-[.65rem] uppercase font-bold bg-primary text-center inline-block'>
            {texts[lan].link}
          </span>

          <p className='text-wrap max-w-4xl mb-6'>{loadingTexts ? <Loader /> : <HTML text={dataTexts[84].text} />}</p>

          <section className='w-full flex flex-col gap-y-6 max-w-6xl'>
            {loading ? (
              <div className='w-full flex items-center justify-center'>
                <Loader />
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
        <Title>{menu[1][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
