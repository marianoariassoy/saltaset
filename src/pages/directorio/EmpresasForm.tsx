import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { useDataContext } from '../../context/useDataContext'
import { menu, iva } from '../../data/data'
import Layout from '../../layout/Layout'
import { Line, Right } from '../../icons/icons'
import ImageComponent from '../../components/Image'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const texts = {
    ES: {
      company: 'Nombre de la empresa o razón social*',
      name: 'Nombre completo de contacto*',
      cp: 'Código postal*',
      location: 'Dirección*',
      municipio: 'Municipio*',
      email: 'Correo electrónico*',
      phone: 'Teléfono*',
      iva: 'Situación ante el IVA*',
      services: 'Describa sus servicios',
      web: 'Sitio web o red social',
      auth: ['Autorizo a publicar mis datos en el Directorio de la web de Salta Set FC', 'Si', 'No'],
      send: 'Enviar',
      thanks: '¡El formulario fue enviado! Muchas gracias por contactarnos.',
      error: 'Se produjo un error al enviar el formulario.'
    },
    EN: {
      company: 'Name of the company or reason social*',
      name: 'Name complete of contact*',
      cp: 'Postal code*',
      location: 'Address*',
      municipio: 'City*',
      email: 'Email*',
      phone: 'Phone*',
      iva: 'State tax*',
      services: 'Describe your services',
      web: 'Website or social network',
      auth: ['I authorize the publication of my data on the Salta Set web directory', 'Yes', 'No'],
      send: 'Send',
      thanks: 'The form was sent! Thank you for contacting us.',
      error: 'An error occurred while sending the form.'
    },
    FR: {
      company: 'Nom de la société ou raison sociale*',
      name: 'Nom complet du contact*',
      cp: 'Code postal*',
      location: 'Adresse*',
      municipio: 'Ville*',
      email: 'Email*',
      phone: 'Telephone*',
      iva: 'Situation fiscale*',
      services: 'Description des services',
      web: 'Site web ou reseau social',
      auth: ["J'autorise la publication de mes données sur le site Web de Salta Set FC", 'Oui', 'Non'],
      send: 'Envoyer',
      thanks: 'Le formulaire a été envoyé. Merci pour votre contact.',
      error: "Une erreur est survenue lors de l'envoi du formulaire."
    }
  }

  return (
    <Layout>
      <section
        className='my-24'
        id='empresas-form'
      >
        <section className='px-6 lg:px-12 pt-20 mb-6 lg:mb-12'>
          <div className='flex items-center gap-x-4'>
            <h1 className='text-3xl lg:text-5xl font-secondary-black uppercase'>{menu[3][lan].categories[0].title}</h1>
            <span className='text-primary'>
              <Line />
            </span>
          </div>
        </section>

        <section className='row w-full aspect-video h-[50vh]'>
          <ImageComponent
            src='http://marianoarias.soy/sites/saltaset-backend/images-statics/formulario.webp'
            alt='Imagen para el formulario'
          />
        </section>

        <form
          action=''
          method='post'
        >
          <section className='m-auto w-full px-6 max-w-6xl mt-12 grid lg:grid-cols-2 gap-x-6 gap-y-3'>
            <div className='flex flex-col gap-y-3'>
              <input
                type='text'
                name='company'
                placeholder={texts[lan].company}
                className='px-2 h-10 border border-black rounded-none'
                required
              />
              <input
                type='text'
                name='name'
                placeholder={texts[lan].name}
                className='w-full px-2 h-10 border border-black rounded-none'
                required
              />
              <input
                type='text'
                name='cp'
                placeholder={texts[lan].cp}
                className='w-full px-2 h-10 border border-black rounded-none'
                required
              />
              <input
                type='text'
                name='location'
                placeholder={texts[lan].location}
                className='w-full px-2 h-10 border border-black rounded-none'
                required
              />
              <input
                type='text'
                name='municipio'
                placeholder={texts[lan].municipio}
                className='w-full px-2 h-10 border border-black rounded-none'
                required
              />
            </div>
            <div className='flex flex-col gap-y-3'>
              <input
                type='email'
                name='email'
                placeholder={texts[lan].email}
                className='px-2 h-10 border border-black rounded-none'
                required
              />
              <input
                type='text'
                name='phone'
                placeholder={texts[lan].phone}
                className='px-2 h-10 border border-black rounded-none'
                required
              />
              <input
                type='text'
                name='web'
                placeholder={texts[lan].web}
                className='px-2 py-2 border border-black rounded-none'
                required
              />

              <textarea
                name='services'
                placeholder={texts[lan].services}
                className='p-2 h-20 border border-black rounded-none'
                required
              ></textarea>

              <select
                name='iva'
                className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
              >
                <option
                  disabled
                  selected
                >
                  {texts[lan].iva}
                </option>
                {iva.map(item => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
              <div className='border-b border-black pb-2 lg:h-10 font-bold'>{texts[lan].auth[0]}</div>
              <div className='flex items-center gap-x-6'>
                <div className='flex items-center gap-x-2'>
                  <input
                    name='auth'
                    type='radio'
                    checked
                    className='h-4 w-4 border-gray-300'
                  />
                  <label>{texts[lan].auth[1]}</label>
                </div>
                <div className='flex items-center gap-x-2'>
                  <input
                    name='auth'
                    type='radio'
                    className='h-4 w-4 border-gray-300'
                  />
                  <label>{texts[lan].auth[2]}</label>
                </div>
              </div>
              <div className='flex justify-end mt-3'>
                <button className='bg-primary py-3 px-12 rounded-full font-bold button-black-hover text-sm flex items-center gap-x-2 uppercase'>
                  {texts[lan].send}
                  <Right />
                </button>
              </div>
            </div>
          </section>
        </form>
      </section>
      <HeadProvider>
        <Title>
          Salta Set &bull; {menu[3][lan].title} {menu[3][lan].categories[0].title}
        </Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
