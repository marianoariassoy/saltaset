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

export const menu = [
  {
    id: 1,
    ES: {
      title: 'Salta Set'
    },
    EN: {
      title: 'Salta Set'
    },
    FR: {
      title: 'Salta Set'
    },
    url: '/'
  },
  {
    id: 2,
    ES: {
      title: 'Filmar en Salta'
    },
    EN: {
      title: 'Filming in Salta'
    },
    FR: {
      title: 'Filming in Salta'
    },
    url: '/filmar-en-salta'
  },
  {
    id: 3,
    ES: {
      title: 'Locaciones'
    },
    EN: {
      title: 'Locations'
    },
    FR: {
      title: 'Locations'
    },
    url: '/locaciones'
  },
  {
    id: 4,
    ES: {
      title: 'Directorio',
      categories: [
        { title: 'Empresas', url: '/directorio/empresas' },
        { title: 'Profesionales', url: '/directorio/profesionales' }
      ]
    },
    EN: {
      title: 'Directory',
      categories: [
        { title: 'Companies', url: '/directorio/empresas' },
        { title: 'Professionals', url: '/directorio/profesionales' }
      ]
    },
    FR: {
      title: 'Directory',
      categories: [
        { title: 'Entreprises', url: '/directorio/empresas' },
        { title: 'Professionnels', url: '/directorio/profesionales' }
      ]
    },
    url: '/directorio/empresas'
  },
  {
    id: 5,
    ES: {
      title: 'Filmografía'
    },
    EN: {
      title: 'Filmography'
    },
    FR: {
      title: 'Filmography'
    },
    url: '/filmografia'
  },
  {
    id: 6,
    ES: {
      title: 'Beneficios'
    },
    EN: {
      title: 'Benefits'
    },
    FR: {
      title: 'Benefits'
    },
    url: '/beneficios'
  },
  {
    id: 7,
    ES: {
      title: 'Novedades'
    },
    EN: {
      title: 'News'
    },
    FR: {
      title: 'News'
    },
    url: '/novedades'
  }
]

export const locacionesMenu = [
  {
    ES: {
      title: 'Catalogo'
    },
    EN: {
      title: 'Catalogue'
    },
    FR: {
      title: 'Catalogue'
    }
  },
  {
    ES: {
      title: 'Regiones'
    },
    EN: {
      title: 'Regions'
    },
    FR: {
      title: 'Régions'
    }
  },
  {
    ES: {
      title: 'Rutas turisticas'
    },
    EN: {
      title: 'Tourist routes'
    },
    FR: {
      title: 'Itinéraires touristiques'
    }
  }
]
export const filmografiaMenu = [
  {
    ES: {
      title: 'Largometrajes'
    },
    EN: {
      title: 'Feature films'
    },
    FR: {
      title: 'Longs métrages'
    }
  },
  {
    ES: {
      title: 'Series'
    },
    EN: {
      title: 'Serie'
    },
    FR: {
      title: 'série'
    }
  },
  {
    ES: {
      title: 'Reality Shows'
    },
    EN: {
      title: 'Reality Shows'
    },
    FR: {
      title: 'Téléréalités'
    }
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

export const texts = {
  ES: {
    hero_title: 'DESLIZA'
  },
  EN: {
    hero_title: 'SLIDE'
  },
  FR: {
    hero_title: 'DIAPO'
  }
}
