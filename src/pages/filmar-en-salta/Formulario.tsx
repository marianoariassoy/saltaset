import { useEffect } from 'react'
import { HeadProvider, Title } from 'react-head'
import { useDataContext } from '../../context/useDataContext'
import Layout from '../../layout/Layout'
import { Line, Right } from '../../icons/icons'
import ImageComponent from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import HTML from '../../hooks/useHTML'
import BeatLoader from 'react-spinners/BeatLoader'

const Formulario = () => {
  const { lan } = useDataContext()
  const { data: dataTexts, loading: loadingTexts } = useFetch(`/textos/${lan}`)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const texts = {
    ES: {
      title: 'Registro de',
      title2: 'Producción',
      production: ['Tipo de producción', 'Publicidad', 'Otro'],
      genere: ['Género', 'Ficción', 'Drama', 'Otro'],
      exhibition: ['Exhibición', 'Salas de cine', 'Streaming', 'Otro'],
      location: 'Localidad de origen de la producción',
      country: 'País',
      state: 'Provincia',
      owner: 'Responsable de la producción',
      name: 'Nombre',
      lastname: 'Apellido',
      phone: 'Teléfono',
      email: 'Email',
      referent: 'Referente local de la producción',
      descriptionTitle: 'Describa la propuesta y alcance del rodaje',
      description: 'Descripción',
      dateTitle: 'Fecha de rodaje estimada',
      from: 'Desde',
      to: 'Hasta',
      day: 'Día',
      month: 'Mes',
      year: 'Año',
      peopleArrived: 'Cantidad estimada de personas que arriban a Salta',
      people: 'Cantidad estimada de personas contratadas en Salta',
      messageTitle: 'Consulta y observaciones',
      message: 'Consultas',
      send: 'Enviar',
      thanks: '¡El formulario fue enviado! Muchas gracias por contactarnos.',
      error: 'Se produjo un error al enviar el formulario.'
    },
    EN: {
      title: 'Production',
      title2: 'Record',
      production: ['Production type', 'Advertising', 'Other'],
      genere: ['Genere', 'Fiction', 'Drama', 'Other'],
      exhibition: ['Exhibition', 'Cinema', 'Streaming', 'Other'],
      location: 'Origin city',
      country: 'Country',
      state: 'State',
      owner: 'Owner of production',
      name: 'Name',
      lastname: 'Last name',
      phone: 'Phone',
      email: 'Email',
      referent: 'Local referent',
      descriptionTitle: 'Describe the proposal and scope of the production',
      description: 'Description',
      dateTitle: 'Estimated date of production',
      from: 'From',
      to: 'To',
      day: 'Day',
      month: 'Month',
      year: 'Year',
      peopleArrived: 'Estimated number of people who arrive in Salta',
      people: 'Estimated number of people hired in Salta',
      messageTitle: 'Message and observations',
      message: 'Message',
      send: 'Send',
      thanks: 'The form was sent! Thank you for contacting us.',
      error: 'An error occurred while sending the form.'
    },
    FR: {
      title: 'Dossier de',
      title2: 'production',
      production: ['Production type', 'Advertising', 'Other'],
      genere: ['Genere', 'Fiction', 'Drama', 'Other'],
      exhibition: ['Exhibition', 'Cinema', 'Streaming', 'Other'],
      location: 'Origin city',
      country: 'Country',
      state: 'State',
      owner: 'Owner of production',
      name: 'Name',
      lastname: 'Last name',
      phone: 'Phone',
      email: 'Email',
      referent: 'Local referent',
      descriptionTitle: 'Describe the proposal and scope of the production',
      description: 'Description',
      dateTitle: 'Estimated date of production',
      from: 'From',
      to: 'To',
      day: 'Day',
      month: 'Month',
      year: 'Year',
      peopleArrived: 'Estimated number of people who arrive in Salta',
      people: 'Estimated number of people hired in Salta',
      messageTitle: 'Message and observations',
      message: 'Message',
      send: 'Envoyer',
      thanks: 'Le formulaire a été envoyé. Merci pour votre contact.',
      error: "Une erreur est survenue lors de l'envoi du formulaire."
    }
  }

  const people = []
  for (let i = 1; i <= 1000; i++) {
    people.push(i)
  }
  const days = []
  for (let i = 1; i <= 31; i++) {
    days.push(i)
  }
  const months = []
  for (let i = 1; i <= 12; i++) {
    months.push(i)
  }
  const years = []
  for (let i = 2023; i <= 2030; i++) {
    years.push(i)
  }

  return (
    <Layout>
      <section
        className='my-24 max-w-6xl m-auto px-6 pt-20 grid lg:grid-cols-2 gap-12'
        id='registro-produccion'
      >
        <div className='col flex flex-col gap-y-6 lg:pr-12'>
          <div className='flex gap-x-6 items-center'>
            <div className='text-3xl lg:text-5xl'>
              <span className='block font-secondary uppercase'>{texts[lan].title}</span>
              <span className='block font-secondary-black uppercase'>{texts[lan].title2}</span>
            </div>
            <div className='text-primary'>
              <Line />
            </div>
          </div>
          <p className='text-wrap mb-6'>{loadingTexts ? <BeatLoader /> : <HTML text={dataTexts[83].text} />}</p>
          <div className='aspect-[5/7]'>
            <ImageComponent
              src='http://marianoarias.soy/sites/saltaset-backend/images-statics/registro-produccion.webp'
              alt='Imagen de camaras de video'
            />
          </div>
        </div>
        <div className='col flex flex-col gap-y-3'>
          <select
            name='production'
            className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
          >
            <option
              disabled
              selected
            >
              {texts[lan].production[0]}
            </option>
            {texts[lan].production.slice(1).map((item, index) => {
              return <option key={index}>{item}</option>
            })}
          </select>
          <select
            name='genere'
            className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
          >
            <option
              disabled
              selected
            >
              {texts[lan].genere[0]}
            </option>
            {texts[lan].genere.slice(1).map((item, index) => {
              return <option key={index}>{item}</option>
            })}
          </select>
          <select
            name='exhibition'
            className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
          >
            <option
              disabled
              selected
            >
              {texts[lan].exhibition[0]}
            </option>
            {texts[lan].exhibition.slice(1).map((item, index) => {
              return <option key={index}>{item}</option>
            })}
          </select>
          <div className='border-b border-black h-10 font-bold'>{texts[lan].location}</div>
          <div className='grid grid-cols-2 gap-3'>
            <input
              type='text'
              name='country'
              className='w-full border border-black h-10 px-2 rounded-none'
              placeholder={texts[lan].country}
            />
            <input
              type='text'
              name='state'
              className='w-full border border-black h-10 px-2 rounded-none'
              placeholder={texts[lan].state}
            />
          </div>
          <div className='border-b border-black h-10 font-bold'>{texts[lan].owner}</div>
          <div className='grid grid-cols-2 gap-3'>
            <input
              type='text'
              name='name'
              className='w-full border border-black h-10 px-2 rounded-none'
              placeholder={texts[lan].name}
            />
            <input
              type='text'
              name='lastname'
              className='w-full border border-black h-10 px-2 rounded-none'
              placeholder={texts[lan].lastname}
            />
            <input
              type='text'
              name='phone'
              className='w-full border border-black h-10 px-2 rounded-none'
              placeholder={texts[lan].phone}
            />
            <input
              type='email'
              name='email'
              className='w-full border border-black h-10 px-2 rounded-none'
              placeholder={texts[lan].email}
            />
          </div>
          <div className='border-b border-black h-10 font-bold'>{texts[lan].referent}</div>
          <div className='grid grid-cols-2 gap-3'>
            <input
              type='text'
              name='name_referent'
              className='w-full border border-black h-10 px-2 rounded-none'
              placeholder={texts[lan].name}
            />
            <input
              type='text'
              name='lastname_referent'
              className='w-full border border-black h-10 px-2 rounded-none'
              placeholder={texts[lan].lastname}
            />
            <input
              type='text'
              name='phone_referent'
              className='w-full border border-black h-10 px-2 rounded-none'
              placeholder={texts[lan].phone}
            />
            <input
              type='email'
              name='email_referent'
              className='w-full border border-black h-10 px-2 rounded-none'
              placeholder={texts[lan].email}
            />
          </div>

          <div className='border-b border-black h-10 font-bold'>{texts[lan].descriptionTitle}</div>
          <textarea
            name='description'
            className='border border-black h-32 p-2 rounded-none'
            placeholder={texts[lan].description}
          ></textarea>
          <div className='border-b border-black h-10 font-bold'>{texts[lan].dateTitle}</div>
          <div className='grid grid-cols-4 gap-3 items-center'>
            <div>{texts[lan].from}</div>
            <select
              name='day_from'
              className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
            >
              <option
                disabled
                selected
              >
                {texts[lan].day}
              </option>
              {days.map((item, index) => {
                return <option key={index}>{item}</option>
              })}
            </select>
            <select
              name='month_from'
              className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
            >
              <option
                disabled
                selected
              >
                {texts[lan].month}
              </option>
              {months.map((item, index) => {
                return <option key={index}>{item}</option>
              })}
            </select>
            <select
              name='year_from'
              className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
            >
              <option
                disabled
                selected
              >
                {texts[lan].year}
              </option>
              {years.map((item, index) => {
                return <option key={index}>{item}</option>
              })}
            </select>
          </div>
          <div className='grid grid-cols-4 gap-3 items-center'>
            <div>{texts[lan].to}</div>
            <select
              name='day_to'
              className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
            >
              <option
                disabled
                selected
              >
                {texts[lan].day}
              </option>
              {days.map((item, index) => {
                return <option key={index}>{item}</option>
              })}
            </select>
            <select
              name='month_to'
              className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
            >
              <option
                disabled
                selected
              >
                {texts[lan].month}
              </option>
              {months.map((item, index) => {
                return <option key={index}>{item}</option>
              })}
            </select>
            <select
              name='year_to'
              className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
            >
              <option
                disabled
                selected
              >
                {texts[lan].year}
              </option>
              {years.map((item, index) => {
                return <option key={index}>{item}</option>
              })}
            </select>
          </div>
          <select
            name='peopleArrived'
            className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
          >
            <option
              disabled
              selected
            >
              {texts[lan].peopleArrived}
            </option>
            {people.map((item, index) => {
              return <option key={index}>{item}</option>
            })}
          </select>
          <select
            name='people'
            className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
          >
            <option
              disabled
              selected
            >
              {texts[lan].people}
            </option>
            {people.map((item, index) => {
              return <option key={index}>{item}</option>
            })}
          </select>
          <div className='border-b border-black h-10 font-bold'>{texts[lan].messageTitle}</div>
          <textarea
            name='message'
            className='border border-black h-32 p-2 rounded-none'
            placeholder={texts[lan].message}
          ></textarea>
          <div className='flex justify-end mt-3'>
            <button className='bg-primary py-3 px-12 rounded-full font-bold button-black-hover text-sm flex items-center gap-x-2 uppercase'>
              {texts[lan].send}
              <Right />
            </button>
          </div>
        </div>
      </section>
      <HeadProvider>
        <Title>
          Salta Set &bull; {texts[lan].title} {texts[lan].title2}
        </Title>
      </HeadProvider>
    </Layout>
  )
}

export default Formulario
