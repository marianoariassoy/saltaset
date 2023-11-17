import { Search as SearchIcon } from '../icons/icons'
import { useLocation } from 'wouter'

const Search = ({ lan, value }) => {
  const [location, setLocation] = useLocation()

  const texts = {
    ES: {
      placeholder: 'BUSCAR'
    },

    EN: {
      placeholder: 'SEARCH'
    },
    FR: {
      placeholder: 'RECHERCHE'
    }
  }

  const presionarEnter = event => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }
  const handleSearch = () => {
    const { value } = document.getElementById('input-search') as HTMLInputElement
    if (value) {
      setLocation(`/locaciones/buscar/${value}`)
      console.log(location)
    }
  }

  return (
    <div className='relative'>
      <input
        type='text'
        name='search'
        id='input-search'
        maxLength={50}
        onKeyPress={presionarEnter}
        placeholder={`${value ? value : texts[lan].placeholder}`}
        className='w-full pl-2 pr-8 py-2 border-b text-sm font-bold input-search uppercase rounded-none'
      />
      <button
        className='absolute right-0 top-2 link-primary'
        onClick={() => handleSearch()}
      >
        <SearchIcon />
      </button>
    </div>
  )
}

export default Search
