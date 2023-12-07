import { Link } from 'wouter'

const Table = ({ data, section, lan }) => {
  const texts = {
    ES: {
      title1: 'Título',
      title2: 'Municipio',
      title3: 'Télefono',
      title4: 'E-Mail',
      title5: 'Web'
    },
    EN: {
      title1: 'Title',
      title2: 'Location',
      title3: 'Phone',
      title4: 'E-Mail',
      title5: 'Web'
    },
    FR: {
      title1: 'Titre',
      title2: 'Municipalité',
      title3: 'Téléphone',
      title4: 'E-Mail',
      title5: 'Web'
    }
  }

  return (
    <section>
      <h2 className='font-bold text-3xl mb-6 lg:mb-12'>{data[0].subcategory}</h2>
      <div className='overflow-x-auto'>
        <table
          className='w-full'
          cellSpacing='3rem'
          cellPadding='3rem'
          role='table'
        >
          <thead className='[&>tr>th]:py-2 [&>tr>th]:pr-12'>
            <tr className='border-b border-black text-sm'>
              <th className='text-left uppercase'>{texts[lan].title1}</th>
              <th className='text-left uppercase'>{texts[lan].title2}</th>
              <th className='text-left uppercase'>{texts[lan].title3}</th>
              <th className='text-left uppercase'>{texts[lan].title4}</th>
              <th className='text-left uppercase'>{texts[lan].title5}</th>
            </tr>
          </thead>
          <tbody className='[&>tr>td]:py-2'>
            {data.map(item => (
              <tr className='border-b'>
                <td>
                  <Link
                    to={`/directorio/${section}/detalles/${item.id}`}
                    key={item.id}
                  >
                    <a className='link-primary font-bold'>{item.title}</a>
                  </Link>
                </td>
                <td>{item.location}</td>
                <td>{item.phone}</td>
                <td>
                  {item.email && (
                    <a
                      href={`mailto:${item.email}`}
                      className='link-primary'
                      target='_blank'
                    >
                      {item.email}
                    </a>
                  )}
                </td>
                <td>
                  {item.url && (
                    <a
                      href={item.url}
                      className='link-primary'
                      target='_blank'
                    >
                      {item.url}
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Table
