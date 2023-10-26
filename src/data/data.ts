export const menu = [
  {
    ES: {
      title: 'Salta Set'
    },
    EN: {
      title: 'Salta Set'
    },
    FR: {
      title: 'Salta Set'
    },
    path: '#salta-set',
    url: '/'
  },
  {
    ES: {
      title: 'Filmar en Salta'
    },
    EN: {
      title: 'Filming in Salta'
    },
    FR: {
      title: 'Filming in Salta'
    },
    path: '#filmar-en-salta',
    url: '/'
  },
  {
    ES: {
      title: 'Locaciones'
    },
    EN: {
      title: 'Locations'
    },
    FR: {
      title: 'Locations'
    },
    path: '#locaciones',
    url: '/'
  },
  {
    ES: {
      title: 'Directorio'
    },
    EN: {
      title: 'Directory'
    },
    FR: {
      title: 'Directory'
    },
    path: '',
    url: ''
  },
  {
    ES: {
      title: 'Filmografía'
    },
    EN: {
      title: 'Filmography'
    },
    FR: {
      title: 'Filmography'
    },
    path: '',
    url: ''
  },
  {
    ES: {
      title: 'Beneficios'
    },
    EN: {
      title: 'Benefits'
    },
    FR: {
      title: 'Benefits'
    },
    path: '',
    url: ''
  },
  {
    ES: {
      title: 'Novedades'
    },
    EN: {
      title: 'News'
    },
    FR: {
      title: 'News'
    },
    path: '#novedades',
    url: '/'
  }
]

export const languages = [
  {
    title: 'ES'
  },
  {
    title: 'EN'
  },
  {
    title: 'FR'
  }
]

interface dataContactProps {
  [key: string]: {
    name: string
    city: string
    email: string
    location: string
    phone: string
    country: string
    message: string
    send: string
    thanks: string
    error: string
    required: string
  }
}

export const dataContact: dataContactProps = {
  ES: {
    name: 'Nombre y apellido*',
    city: 'Ciudad',
    email: 'E-Mail*',
    location: 'Localidad',
    phone: 'Teléfono*',
    country: 'País',
    message: 'Mensaje',
    send: 'Enviar',
    thanks: '¡Su mensaje fue enviado! Gracias por contactarte con nosotros.',
    error: 'Se produjo un error al enviar el mensaje.',
    required: 'Por favor complete este campo.'
  },
  EN: {
    name: 'Name and surname*',
    city: 'City',
    email: 'E-Mail*',
    location: 'Location',
    phone: 'Phone*',
    country: 'Country',
    message: 'Message',
    send: 'Send',
    thanks: 'Your message was sent! Thank you for contacting us.',
    error: 'An error occurred while sending the message.',
    required: 'Please complete this field.'
  },
  FR: {
    name: 'Nom et prénom*',
    city: 'Ville',
    email: 'E-Mail*',
    location: 'Localisation',
    phone: 'Téléphone*',
    country: 'Pays',
    message: 'Message',
    send: 'Envoyer',
    thanks: 'Votre message a été envoyé ! Merci de nous avoir contactés.',
    error: 'Une erreur sest produite lors de lenvoi du message.',
    required: 'Veuillez remplir ce champ.'
  }
}
