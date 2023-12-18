const ButtonForm = ({ children }) => {
  return (
    <button className='bg-primary py-3 px-12 rounded-full font-bold button-black-hover text-sm flex items-center gap-x-2 uppercase'>
      {children}
    </button>
  )
}

export default ButtonForm
