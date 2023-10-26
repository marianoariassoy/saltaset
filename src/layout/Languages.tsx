import { languages } from '../data/data'
import { useDataContext } from '../context/useDataContext'

const Languages = () => {
  const { lan, setLan } = useDataContext()

  const changeLanguage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const lanSelected = e.currentTarget.textContent
    setLan(lanSelected)
  }

  return (
    <nav>
      <ul className='flex gap-x-1 [&>li>a:hover]:opacity-100 [&>li>a]:decoration-2 [&>li>a]:underline-offset-4 [&>li:last-child]:hidden text-sm font-secondary-light'>
        {languages.map(({ title }: { title: string }, index) => (
          <>
            <li key={index}>
              <a
                href='#'
                className={`${title === lan ? 'font-secondary-black' : 'opacity-50'}`}
                onClick={changeLanguage}
              >
                {title}
              </a>
            </li>
            <li>
              <span className='opacity-50'>/</span>
            </li>
          </>
        ))}
      </ul>
    </nav>
  )
}

export default Languages
