import { useState } from 'react'
import { HeadProvider, Title } from 'react-head'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { Line, Right } from '../../icons/icons'
import { menu, activities } from '../../data/data'
import ImageComponent from '../../components/Image'
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
      subject: 'Registro de profesionales'
    }

    axios
      .post('https://api.saltaset.gob.ar/send-email-profesionals.php', {
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
      thanks: 'El formulario fue enviado con éxito.',
      error: 'Se produjo un error al enviar el formulario.',
      required: 'Este campo es obligatorio'
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
      thanks: 'The form was sent. Thank you for contacting us.',
      error: 'An error occurred while sending the form.',
      required: 'This field is required'
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
      error: "Une erreur est survenue lors de l'envoi du formulaire.",
      required: 'Ce champ est obligatoire'
    }
  }

  const Error = () => {
    return <div className='text-primary mt-1'>{texts[lan].required}</div>
  }

  return (
    <Layout>
      <section className='my-12 lg:my-24'>
        <header className='row w-full px-6 lg:px-12 mb-6 lg:mb-12'>
          <div className='flex items-center gap-x-4'>
            <h1 className='text-3xl lg:text-5xl font-secondary-black uppercase'>{menu[3][lan].categories[1].title}</h1>
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
                  placeholder={texts[lan].name}
                  register={register('name', { required: true })}
                />
                {errors.name && <Error />}
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
                  type='date'
                  placeholder={texts[lan].date}
                  register={register('date', { required: true })}
                />
                {errors.date && <Error />}
              </div>
              <div>
                <Input
                  type='text'
                  placeholder={texts[lan].location}
                  register={register('location', { required: true })}
                />
                {errors.location && <Error />}
              </div>
              <div className='border-b border-black h-10 font-bold'> {texts[lan].languages[0]}</div>
              <div className='flex flex-col gap-y-2'>
                <div className='flex items-center gap-x-2'>
                  <input
                    type='checkbox'
                    className='h-4 w-4 border-gray-300'
                    {...register('spanish')}
                  />
                  <label> {texts[lan].languages[1]}</label>
                </div>
                <div className='flex items-center gap-x-2'>
                  <input
                    type='checkbox'
                    className='h-4 w-4 border-gray-300'
                    {...register('english')}
                  />
                  <label>{texts[lan].languages[2]}</label>
                </div>
                <div className='flex items-center gap-x-2'>
                  <input
                    type='checkbox'
                    className='h-4 w-4 border-gray-300'
                    {...register('portuguese')}
                  />
                  <label>{texts[lan].languages[3]}</label>
                </div>
                <div className='flex items-center gap-x-2'>
                  <input
                    type='checkbox'
                    className='h-4 w-4 border-gray-300'
                    {...register('french')}
                  />
                  <label>{texts[lan].languages[4]}</label>
                </div>
                <div className='flex items-center gap-x-3 mb-3'>
                  <label>{texts[lan].languages[5]}</label>
                  <input
                    type='text'
                    className='w-full border-b border-black'
                    {...register('other')}
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-y-3'>
              <div>
                <Select
                  register={register('actity1', { required: true })}
                  name={texts[lan].activity1}
                  options={activities}
                  lan=''
                />
                {errors.actity1 && <Error />}
              </div>
              <div>
                <Select
                  register={register('actity2', { required: true })}
                  name={texts[lan].activity2}
                  options={activities}
                  lan=''
                />
                {errors.actity2 && <Error />}
              </div>
              <div>
                <Select
                  register={register('actity3', { required: true })}
                  name={texts[lan].activity3}
                  options={activities}
                  lan=''
                />
                {errors.actity3 && <Error />}
              </div>

              <div>
                <Textarea
                  placeholder={texts[lan].experience}
                  register={register('experience', { required: true })}
                />
                {errors.experience && <Error />}
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
              <div className='border-b border-black h-10 font-bold'>{texts[lan].messageTitle}</div>
              <Textarea
                placeholder={texts[lan].message}
                register={register('message')}
              />
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
          Salta Set &bull; {menu[3][lan].title} {menu[3][lan].categories[1].title}
        </Title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
