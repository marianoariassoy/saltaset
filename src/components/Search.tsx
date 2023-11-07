const Search = ({ lan }) => {
  return (
    <input
      type='text'
      name='search'
      id='input-search'
      placeholder={`${lan === 'ES' ? 'BUSCAR' : lan === 'EN' ? 'SEARCH' : 'RECHERCHE'} `}
      className='w-full pl-2 pr-8 py-2 border-b text-sm font-bold input-search'
    />
  )
}

export default Search
