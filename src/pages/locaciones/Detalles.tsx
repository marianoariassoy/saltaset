import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'wouter'
import Layout from '../../layout/Layout'
// import { useDataContext } from '../../context/useDataContext'
import { Line } from '../../icons/icons'
import ImageComponent from '../../components/Image'

const Detalles = () => {
  // const { lan } = useDataContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section
        className='my-24'
        id='locaciones-detalles'
      >
        <section className='row w-full max-w-6xl m-auto px-6 pt-20 flex flex-col gap-y-12'>
          <div className='row'>
            <div className='text-primary font-bold text-sm mb-3'>
              <Link href='/locaciones'>
                <a className='hover:underline mr-1'>LOCACIONES</a>
              </Link>
              / CATALOGO
            </div>
            <div className='flex gap-x-6 items-center'>
              <div className='text-4xl lg:text-4xl'>
                <span className='block font-secondary uppercase'>CAMPING</span>
                <span className='block font-secondary-black uppercase'>EL ANGOSTO</span>
              </div>
              <div className='text-primary'>
                <Line />
              </div>
            </div>
          </div>
          <div className='row w-full'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=W_n6DyZD2oI'
              playing={true}
              controls={true}
              width='100%'
              height='100%'
              className='aspect-video block'
            />
          </div>

          <div className='row'>
            <p className='text-wrap'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
              hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
              eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            </p>
          </div>

          <div className='row grid grid-cols-3'>
            <div className='aspect-square'>
              <ImageComponent
                src='https://images.pexels.com/photos/13146458/pexels-photo-13146458.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt='image'
              />
            </div>
            <div className='aspect-square'>
              <ImageComponent
                src='https://images.pexels.com/photos/18845781/pexels-photo-18845781/free-photo-of-punto-de-referencia-iglesia-catedral-catolico.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt='image'
              />
            </div>
            <div className='aspect-square'>
              <ImageComponent
                src='https://images.pexels.com/photos/13430634/pexels-photo-13430634.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt='image'
              />
            </div>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default Detalles
