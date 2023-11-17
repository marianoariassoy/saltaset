import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { useDataContext } from '../../context/useDataContext'
import Layout from '../../layout/Layout'
import { Line, Right } from '../../icons/icons'
import { menu } from '../../data/data'
import ImageComponent from '../../components/Image'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const texts = {
    ES: {
      name: 'Nombre y apellido como figura en DNI*',
      email: 'Correo electrónico*',
      phone: 'Teléfono*',
      date: 'Fecha de nacimiento*',
      location: 'Municipio de residencia*',
      languages: ['Manejo de idiomas*', 'Español', 'Ingles', 'Portugues', 'Francés', 'Otro'],
      activity1: 'Actividad profesional 1*',
      activity2: 'Actividad profesional 2',
      activity3: 'Actividad profesional 3',
      web: 'Sitio web',
      experience: 'Describa su experiencia laboral (Máx 500 caracteres)*',
      cv: 'Adjuntar CV en PDF o word* ',
      auth: ['Autorizo a publicar mis datos en el Directorio de la web de Salta Set FC', 'Si', 'No'],
      messageTitle: 'Otro aporte o comentario',
      message: 'Comentario',
      send: 'Enviar',
      thanks: '¡El formulario fue enviado! Muchas gracias por contactarnos.',
      error: 'Se produjo un error al enviar el formulario.'
    },
    EN: {
      name: 'Name and surname as it appears in DNI*',
      email: 'Email*',
      phone: 'Phone*',
      date: 'Date of birth*',
      location: 'Residence municipality*',
      languages: ['Language skills*', 'Spanish', 'Enlglish', 'Portuguese', 'French', 'Other'],
      activity1: 'Activity 1*',
      activity2: 'Activity 2',
      activity3: 'Activity 3',
      web: 'Website',
      experience: 'Describe your professional experience (Max 500 characters)*',
      cv: 'Attach CV in PDF or word*',
      auth: ['I authorize the publication of my data on the Salta Set web directory', 'Yes', 'No'],
      messageTitle: 'Other contribution or comment',
      message: 'Comment',
      send: 'Send',
      thanks: 'The form was sent! Thank you for contacting us.',
      error: 'An error occurred while sending the form.'
    },
    FR: {
      name: 'Nom et pr dismissing comme figurant dans le DNI*',
      email: 'Courriel*',
      phone: 'Téléphone*',
      date: 'Date de naissance*',
      location: 'Municipalité de résidence*',
      languages: ['Compétences linguistiques*', 'Español', 'Anglais', 'Portugais', 'Français', 'Autre'],
      activity1: 'Activité professionnelle 1*',
      activity2: 'Activité professionnelle 2',
      activity3: 'Activité professionnelle 3',
      web: 'Site Internet',
      experience: 'Décrivez votre expérience professionnelle (Max 500 caractères)*',
      cv: 'Attacher CV en PDF ou word*',
      auth: ["J'autorise la publication de mes données sur le site Web de Salta Set FC", 'Oui', 'Non'],
      messageTitle: 'Autre contribution ou commentaire',
      message: 'Commentaire',
      send: 'Envoyer',
      thanks: 'Le formulaire a été envoyé. Merci pour votre contact.',
      error: "Une erreur est survenue lors de l'envoi du formulaire."
    }
  }

  return (
    <Layout>
      <section
        className='mt-24'
        id='profesionales-form'
      >
        <section className='row w-full px-6 lg:px-12 pt-20 mb-6 lg:mb-12'>
          <div className='flex items-center gap-x-4'>
            <h1 className='text-3xl lg:text-5xl font-secondary-black uppercase'>{menu[3][lan].categories[1].title}</h1>
            <span className='text-primary'>
              <Line />
            </span>
          </div>
        </section>

        <section className='row w-full aspect-video h-[50vh]'>
          <ImageComponent
            src='/images/formulario.webp'
            alt='Imagen para el formulario'
          />
        </section>

        <form
          action=''
          method='post'
        >
          <section className='m-auto w-full px-6 max-w-6xl my-12 grid lg:grid-cols-2 gap-x-6 gap-y-3'>
            <div className='flex flex-col gap-y-3'>
              <input
                type='text'
                name='name'
                placeholder={texts[lan].name}
                className='px-2 h-10 border border-black rounded-none'
                required
              />
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
                type='date'
                name='date'
                placeholder={texts[lan].date}
                className='px-2 h-10 border border-black rounded-none'
                required
              />
              <input
                type='text'
                name='location'
                placeholder={texts[lan].location}
                className='px-2 h-10 border border-black rounded-none'
                required
              />
              <div className='border-b border-black h-10 font-bold'> {texts[lan].languages[0]}</div>
              <div className='flex flex-col gap-y-2'>
                <div className='flex items-center gap-x-2'>
                  <input
                    name='spanish'
                    type='checkbox'
                    className='h-4 w-4 border-gray-300 '
                  />
                  <label> {texts[lan].languages[1]}</label>
                </div>
                <div className='flex items-center gap-x-2'>
                  <input
                    name='english'
                    type='checkbox'
                    className='h-4 w-4 border-gray-300 '
                  />
                  <label>{texts[lan].languages[2]}</label>
                </div>
                <div className='flex items-center gap-x-2'>
                  <input
                    name='portuguese'
                    type='checkbox'
                    className='h-4 w-4 border-gray-300 '
                  />
                  <label>{texts[lan].languages[3]}</label>
                </div>
                <div className='flex items-center gap-x-2'>
                  <input
                    name='french'
                    type='checkbox'
                    className='h-4 w-4 border-gray-300 '
                  />
                  <label>{texts[lan].languages[4]}</label>
                </div>
                <div className='flex items-center gap-x-3 mb-3'>
                  <label>{texts[lan].languages[5]}</label>
                  <input
                    name='other'
                    type='text'
                    className='w-full border-b border-black'
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-y-3'>
              <select
                name='actity1'
                className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
              >
                <option
                  disabled
                  selected
                >
                  {texts[lan].activity1}
                </option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
              <select
                name='actity2'
                className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
              >
                <option
                  disabled
                  selected
                >
                  {texts[lan].activity2}
                </option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
              <select
                name='actity3'
                className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
              >
                <option
                  disabled
                  selected
                >
                  {texts[lan].activity3}
                </option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>

              <input
                type='text'
                name='experience'
                placeholder={texts[lan].experience}
                className='w-full px-2 h-10 border border-black rounded-non'
                required
              />
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
              <div className='border-b border-black h-10 font-bold'>{texts[lan].messageTitle}</div>
              <textarea
                name='message'
                placeholder={texts[lan].message}
                className='p-2 h-20 border border-black rounded-none lg:h-[118px]'
                required
              ></textarea>
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
          Salta Set &bull; {menu[3][lan].title} {menu[3][lan].categories[1].title}
        </Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
