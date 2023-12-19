import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import BeatLoader from 'react-spinners/BeatLoader'
import { productionTypes, gender, exhibition } from '../../data/data'
import { Right } from '../../icons/icons'
import { Input, Select, Textarea, ButtonForm } from '../../ui/index'

const Form = ({ lan }) => {
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
      subject: 'Registro de producción'
    }

    axios
      .post('https://api.saltaset.gob.ar/send-email-production.php', {
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
      title: 'Registro de',
      title2: 'Producción',
      production: 'Tipo de producción',
      gender: 'Género',
      exhibition: 'Exhibición',
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
      thanks: 'El formulario fue enviado correctamente.',
      error: 'Se produjo un error al enviar el formulario.',
      required: 'Este campo es obligatorio'
    },
    EN: {
      title: 'Production',
      title2: 'Record',
      production: 'Production type',
      gender: 'Genere',
      exhibition: 'Exhibition',
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
      thanks: 'The form was sent. Thank you for contacting us.',
      error: 'An error occurred while sending the form.',
      required: 'This field is required'
    },
    FR: {
      title: 'Dossier de',
      title2: 'production',
      production: 'Type de production',
      gender: 'Género',
      exhibition: 'Exhibition',
      location: "Ville d'origine",
      country: 'Pays',
      state: 'Province',
      owner: 'Responsable de la production',
      name: 'Name',
      lastname: 'Last name',
      phone: 'Phone',
      email: 'Email',
      referent: 'Local referent',
      descriptionTitle: 'Description de la proposition et du scénario de la production',
      description: 'Description',
      dateTitle: 'Date de production estimee',
      from: 'From',
      to: 'To',
      day: 'Day',
      month: 'Month',
      year: 'Year',
      peopleArrived: "Nombre d'habitants estimé en Salta",
      people: "Nombre d'habitants contratés en Salta",
      messageTitle: 'Message et observations',
      message: 'Message',
      send: 'Envoyer',
      thanks: 'Le formulaire a été envoyé. Merci pour votre contact.',
      error: "Une erreur est survenue lors de l'envoi du formulaire.",
      required: 'Ce champ est obligatoire'
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

  const Error = () => {
    return <div className='text-primary mt-1'>{texts[lan].required}</div>
  }

  return (
    <section>
      {error && <span className='text-4xl font-bold'>{texts[lan].error}</span>}
      {sended && <span className='text-4xl font-bold'>{texts[lan].thanks}</span>}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${error || sended ? 'hidden' : 'block'}`}
      >
        <div className='flex flex-col gap-y-3'>
          <div>
            <Select
              register={register('production', { required: true })}
              name={texts[lan].production}
              options={productionTypes}
              lan={lan}
            />
            {errors.production && <Error />}
          </div>
          <div>
            <Select
              register={register('gender', { required: true })}
              name={texts[lan].gender}
              options={gender}
              lan={lan}
            />
            {errors.gender && <Error />}
          </div>
          <div>
            <Select
              register={register('exhibition', { required: true })}
              name={texts[lan].exhibition}
              options={exhibition}
              lan={lan}
            />
            {errors.exhibition && <Error />}
          </div>
          <div className='border-b border-black h-10 font-bold'>{texts[lan].location}</div>
          <div className='grid grid-cols-2 gap-3'>
            <div>
              <Input
                type='text'
                placeholder={texts[lan].country}
                register={register('country', { required: true })}
              />
              {errors.country && <Error />}
            </div>
            <div>
              <Input
                type='text'
                placeholder={texts[lan].state}
                register={register('state', { required: true })}
              />
              {errors.state && <Error />}
            </div>
          </div>
          <div className='border-b border-black h-10 font-bold'>{texts[lan].owner}</div>
          <div className='grid grid-cols-2 gap-3'>
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
                placeholder={texts[lan].lastname}
                register={register('lastname', { required: true })}
              />
              {errors.lastname && <Error />}
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
                type='email'
                placeholder={texts[lan].email}
                register={register('email', { required: true })}
              />
              {errors.email && <Error />}
            </div>
          </div>
          <div className='border-b border-black h-10 font-bold'>{texts[lan].referent}</div>
          <div className='grid grid-cols-2 gap-3'>
            <Input
              type='text'
              placeholder={texts[lan].name}
              register={register('name_referent', { required: true })}
            />
            <Input
              type='text'
              placeholder={texts[lan].lastname}
              register={register('lastname_referent', { required: true })}
            />
            <Input
              type='text'
              placeholder={texts[lan].phone}
              register={register('phone_referent', { required: true })}
            />
            <Input
              type='text'
              placeholder={texts[lan].email}
              register={register('email_referent', { required: true })}
            />
          </div>
          <div className='border-b border-black h-10 font-bold'>{texts[lan].descriptionTitle}</div>
          <div>
            <Textarea
              placeholder={texts[lan].description}
              register={register('description', { required: true })}
            />
            {errors.description && <Error />}
          </div>
          <div className='border-b border-black h-10 font-bold'>{texts[lan].dateTitle}</div>
          <div className='flex gap-6 items-center'>
            <div>{texts[lan].from}</div>
            <Input
              type='datetime-local'
              placeholder=''
              register={register('date_from')}
            />
            <div>{texts[lan].to}</div>
            <Input
              type='datetime-local'
              placeholder=''
              register={register('date_to')}
            />
          </div>
          <div>
            <Select
              register={register('peopleArrived')}
              name={texts[lan].peopleArrived}
              options={people}
              lan=''
            />
            {errors.description && <Error />}
          </div>
          <div>
            <Select
              register={register('people', { required: true })}
              name={texts[lan].people}
              options={people}
              lan=''
            />
            {errors.description && <Error />}
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
      </form>
    </section>
  )
}

export default Form
