import { Line, Pin, Superficie, User, Time, Idioma, Historia } from '../../icons/icons'

const Filmar = ({ lan }) => {
  const texts = {
    ES: {
      title: 'FILMAR',
      title2: 'EN SALTA'
    },
    EN: {
      title: 'Filming',
      title2: 'in Salta'
    },
    FR: {
      title: 'Tournage',
      title2: 'à salta'
    }
  }
  const data = {
    ES: [
      {
        title: 'Ubicación',
        text: 'Ubicada al Norte de Argentina, Salta se destaca por su heterogeneidad geográfica y cultural.',
        icon: <Pin />
      },
      {
        title: 'Superficie',
        text: '155.488 Km²  (4,1% del total nacional)',
        icon: <Superficie />
      },
      {
        title: 'Población',
        text: ' 1.440.672 habitantes (Censo 2022)',
        icon: <User />
      },
      {
        title: 'Huso Horario',
        text: '- UTC -3',
        icon: <Time />
      },
      {
        title: 'Idioma Oficial',
        text: 'Español - Wichi',
        icon: <Idioma />
      },
      {
        title: 'Historia',
        text: 'Tiempos prehispánicos, la época colonial y la guerra independentista dejaron un imborrable legado en el patrimonio cultural y arquitectónico de la provincia de Salta. Bastión en la guerra de la Independencia latinoamericana, el territorio fue invadido reiteradas veces por los españoles, a quienes Martín Miguel de Güemes opuso férrea resistencia. Con la decisiva Batalla de Salta, el 20 de febrero de 1813, Belgrano logró que todo el Norte Argentino quedase libre.',
        icon: <Historia />
      }
    ],
    EN: [
      {
        title: 'Location',
        text: 'Located in the north of Argentina, Salta is characterized by its heterogeneity geographic and cultural.',
        icon: <Pin />
      },
      {
        title: 'Surface',
        text: '155.488 Km²  (4,1% of the total national)',
        icon: <Superficie />
      },
      {
        title: 'Population',
        text: '1.440.672 inhabitants (Census 2022)',
        icon: <User />
      },
      {
        title: 'Time Zone',
        text: '- UTC -3',
        icon: <Time />
      },
      {
        title: 'Official Language',
        text: 'Spanish - Wichi',
        icon: <Idioma />
      },
      {
        title: 'History',
        text: 'Pre-Hispanic times, the colonial era and the war of independence left an indelible legacy in the cultural and architectural heritage of the province of Salta. A bastion in the Latin American War of Independence, the territory was invaded several times by the Spaniards, to whom Martín Miguel de Güemes put up fierce resistance. With the decisive Battle of Salta, on February 20, 1813, Belgrano succeeded in freeing all of Northern Argentina.',
        icon: <Historia />
      }
    ],
    FR: [
      {
        title: 'Localisation',
        text: "Situee au nord de l'Argentine, la province de Salta est caractérisée par sa hétérogeneité geographique et culturelle.",
        icon: <Pin />
      },
      {
        title: 'Superficie',
        text: ' 155.488 Km²  (4,1% du total national)',
        icon: <Superficie />
      },
      {
        title: 'Población',
        text: ' 1.440.672 habitants (Census 2022)',
        icon: <User />
      },
      {
        title: 'Huso Horario',
        text: '- UTC -3',
        icon: <Time />
      },
      {
        title: 'Idioma Oficial',
        text: 'Spanish - Wichi',
        icon: <Idioma />
      },
      {
        title: 'Historia',
        text: "L'époque préhispanique, l'ère coloniale et la guerre d'indépendance ont laissé un héritage indélébile dans le patrimoine culturel et architectural de la province de Salta. Bastion de la guerre d'indépendance latino-américaine, le territoire a été envahi à plusieurs reprises par les Espagnols, qui ont opposé une résistance farouche à Martín Miguel de Güemes. La bataille décisive de Salta, le 20 février 1813, a permis à Belgrano de libérer tout le nord de l'Argentine.",
        icon: <Historia />
      }
    ]
  }

  return (
    <section
      className='bg-secondary text-white'
      id='filmar-en-salta'
    >
      <div className='w-full max-w-6xl m-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center'>
        <div className='col text-4xl lg:text-5xl'>
          <span className='text-primary font-secondary-black mb-4 flex items-center gap-x-4'>
            02 <Line />
          </span>
          <span className='block font-secondary uppercase'>{texts[lan].title}</span>
          <span className='block font-secondary-black uppercase'>{texts[lan].title2}</span>
        </div>
        <div className='col lg:pl-12 flex flex-col gap-y-6'>
          {data[lan].map(({ title, text, icon }, index) => (
            <article key={index}>
              <div className='text-primary mb-3 flex items-center gap-x-3 text-xl'>
                {icon}
                <span className='uppercase whitespace-nowrap text-sm font-bold'>{title}</span>
                <hr className='w-full border-primary' />
              </div>
              <p className='text-wrap'>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Filmar
