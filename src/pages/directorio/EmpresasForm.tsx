import { useState } from 'react'
import { HeadProvider, Title } from 'react-head'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import ImageComponent from '../../components/Image'
import { useDataContext } from '../../context/useDataContext'
import Layout from '../../layout/Layout'
import { menu, iva, production, servicesList, complementarieServices, otherServices } from '../../data/data'
import { Line, Right } from '../../icons/icons'
import BeatLoader from 'react-spinners/BeatLoader'
import { Input, Select, Textarea, ButtonForm } from '../../ui/index'

const Index = () => {
  const { lan } = useDataContext()
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    setSending(true)
    const sender = {
      to: 'saltaset@edusalta.gov.ar',
      from: 'no-reply@saltaset.gob.ar',
      from_name: 'Salta Set',
      subject: 'Registro de empresas'
    }

    axios
      .post('https://api.saltaset.gob.ar/send-email-companies.php', {
        ...data,
        ...sender
      })
      .then(data => {
        if (data.data === 'success') {
          setSended(true)
          setSending(false)
        } else {
          setError(true)
          setSending(false)
        }
      })
  }

  const texts = {
    ES: {
      company: 'Nombre de la empresa o razón social*',
      name: 'Nombre completo de contacto*',
      cp: 'Código postal*',
      location: 'Dirección*',
      municipio: 'Municipio*',
      email: 'Correo electrónico*',
      phone: 'Teléfono*',
      web: 'Sitio web o red social',
      iva: 'Situación ante el IVA*',
      auth: ['Autorizo a publicar mis datos en el Directorio de la web de Salta Set FC', 'Si', 'No'],
      services: 'Describa sus servicios, el texto que usted escriba se verá en la página web',
      send: 'Enviar',
      thanks: 'El formulario fue enviado con éxito.',
      error: 'Se produjo un error al enviar el formulario.',
      production: 'Producción y postproducción audiovisual',
      servicesList: 'Servicios para la producción',
      complementarieServices: 'Servicios complementarios',
      otherServices: 'Otros servicios',
      required: 'Este campo es obligatorio'
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
      thanks: 'The form was sent. Thank you for contacting us.',
      error: 'An error occurred while sending the form.',
      production: 'Production and postproduction audiovisual',
      servicesList: 'Services for the production',
      complementarieServices: 'Services complementaries',
      otherServices: 'Other services',
      required: 'This field is required'
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
      error: "Une erreur est survenue lors de l'envoi du formulaire.",
      production: 'Production et postproduction audiovisuelle',
      servicesList: 'Services pour la production',
      complementarieServices: 'Services complementaires',
      otherServices: 'Autres services',
      required: 'Ce champ est obligatoire'
    }
  }

  const Error = () => {
    return <div className='text-primary mt-1'>{texts[lan].required}</div>
  }

  return (
    <Layout>
      <section className='my-12 lg:my-24'>
        <header className='px-6 lg:px-12 mb-6 lg:mb-12'>
          <div className='flex items-center gap-x-4'>
            <h1 className='text-3xl lg:text-5xl font-secondary-black uppercase'>{menu[3][lan].categories[0].title}</h1>
            <span className='text-primary'>
              <Line />
            </span>
          </div>
        </header>

        <div className='w-full aspect-video h-[50vh]'>
          <ImageComponent
            src='https://api.saltaset.gob.ar/images-statics/formulario.webp'
            alt='Imagen para el formulario'
          />
        </div>

        {error && <div className='p-6 lg:p-12 text-4xl font-bold'>{texts[lan].error}</div>}
        {sended && <div className='p-6 lg:p-12 text-4xl font-bold'>{texts[lan].thanks}</div>}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${error || sended ? 'hidden' : 'block'}`}
        >
          <section className='m-auto w-full px-6 max-w-6xl mt-12 grid lg:grid-cols-2 gap-x-6 gap-y-3'>
            <div className='flex flex-col gap-y-3'>
              <div>
                <Input
                  type='text'
                  placeholder={texts[lan].company}
                  register={register('company', { required: true })}
                />
                {errors.company && <Error />}
              </div>
              <div>
                <Input
                  type='text'
                  placeholder={texts[lan].name}
                  register={register('name', { required: true })}
                />
                {errors.name && <Error />}
              </div>

              <div>
                <Input
                  type='text'
                  placeholder={texts[lan].location}
                  register={register('location', { required: true })}
                />
                {errors.location && <Error />}
              </div>
              <div>
                <Input
                  type='text'
                  placeholder={texts[lan].municipio}
                  register={register('municipio', { required: true })}
                />
                {errors.municipio && <Error />}
              </div>
              <div>
                <Input
                  type='text'
                  placeholder={texts[lan].cp}
                  register={register('cp', { required: true })}
                />
                {errors.cp && <Error />}
              </div>
              <div>
                <Input
                  type='email'
                  placeholder={texts[lan].email}
                  register={register('email', { required: true })}
                />
                {errors.email && <Error />}
              </div>
              <div>
                <Input
                  type='text'
                  placeholder={texts[lan].phone}
                  register={register('phone', { required: true })}
                />
                {errors.phone && <Error />}
              </div>
              <div>
                <Input
                  type='text'
                  placeholder={texts[lan].web}
                  register={register('web')}
                />
              </div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <div>
                <Select
                  register={register('iva', { required: true })}
                  name={texts[lan].iva}
                  options={iva}
                  lan=''
                />
                {errors.iva && <Error />}
              </div>
              <div className='border-b border-black pb-2 lg:h-10 font-bold'>{texts[lan].auth[0]}</div>
              <div className='flex items-center gap-x-6'>
                <div className='flex items-center gap-x-2'>
                  <input
                    type='radio'
                    checked
                    value='Si'
                    className='h-4 w-4 border-gray-300'
                    {...register('auth')}
                  />
                  <label>{texts[lan].auth[1]}</label>
                </div>
                <div className='flex items-center gap-x-2'>
                  <input
                    type='radio'
                    value='No'
                    className='h-4 w-4 border-gray-300'
                    {...register('auth')}
                  />
                  <label>{texts[lan].auth[2]}</label>
                </div>
              </div>
              <div>
                <Select
                  register={register('production', { required: true })}
                  name={texts[lan].production}
                  options={production}
                  lan=''
                />
                {errors.production && <Error />}
              </div>
              <div>
                <Select
                  register={register('servicesList', { required: true })}
                  name={texts[lan].servicesList}
                  options={servicesList}
                  lan=''
                />
                {errors.servicesList && <Error />}
              </div>
              <div>
                <Select
                  register={register('complementarieServices', { required: true })}
                  name={texts[lan].complementarieServices}
                  options={complementarieServices}
                  lan=''
                />
                {errors.complementarieServices && <Error />}
              </div>
              <div>
                <Select
                  register={register('otherServices', { required: true })}
                  name={texts[lan].otherServices}
                  options={otherServices}
                  lan=''
                />
                {errors.otherServices && <Error />}
              </div>
              <div>
                <Textarea
                  placeholder={texts[lan].services}
                  register={register('services', { required: true })}
                />
                {errors.services && <Error />}
              </div>

              <div className='flex justify-end mt-3'>
                {sending ? (
                  <BeatLoader />
                ) : (
                  <ButtonForm>
                    {texts[lan].send}
                    <Right />
                  </ButtonForm>
                )}
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
