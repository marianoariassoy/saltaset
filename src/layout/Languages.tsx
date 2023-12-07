import { languages } from '../data/data'
import { useDataContext } from '../context/useDataContext'

const Languages = () => {
  const { lan, setLan } = useDataContext()

  const changeLanguage = e => {
    const lanSelected = e.currentTarget.textContent
    setLan(lanSelected)
  }

  return (
    <nav className='nav-languajes'>
      <ul className='flex gap-x-1 [&>li>button:hover]:opacity-100 [&>li:last-child::after]:hidden text-sm font-secondary'>
        {languages.map(({ title }: { title: string }, index) => (
          <li key={index}>
            <button
              className={`${title === lan ? 'font-secondary-black' : 'opacity-50 link-primary'}`}
              onClick={changeLanguage}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Languages
