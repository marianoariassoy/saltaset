import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { menu } from '../../data/data'
import { useDataContext } from '../../context/useDataContext'
import Layout from '../../layout/Layout'
import ImageComponent from '../../components/Image'
import { Line } from '../../icons/icons'
import PorqueItem from './PorqueItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/porquesalta/${lan}`)

  const texts = {
    ES: {
      title: 'Por qué',
      title2: 'Salta'
    },
    EN: {
      title: 'Why',
      title2: 'Salta'
    },
    FR: {
      title: 'Pourquoi',
      title2: 'Salta'
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section
        className='my-24'
        id='porque-salta'
      >
        <section className='row w-full max-w-6xl m-auto px-6 pt-20 mb-12 flex gap-x-6 items-center'>
          <div className='text-4xl lg:text-5xl'>
            <span className='block font-secondary uppercase'>{texts[lan].title}</span>
            <span className='block font-secondary-black uppercase'>{texts[lan].title2}</span>
          </div>
          <div className='text-primary'>
            <Line />
          </div>
        </section>

        <section className='row w-full aspect-video h-[50vh]'>
          <ImageComponent
            src='/images/porque-salta.webp'
            alt='Porque Salta'
          />
        </section>

        <section className='row px-6 pt-20 flex flex-col gap-y-6 [&>article:last-child]:border-0'>
          {loading ? (
            <div>
              <Loader />
            </div>
          ) : (
            data.map(item => (
              <PorqueItem
                key={item.id}
                data={item}
              />
            ))
          )}
        </section>
      </section>
      <HeadProvider>
        <Title>{menu[0][lan].title}</Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
