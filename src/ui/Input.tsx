const Input = ({ type, placeholder, register }) => {
  return (
    <input
      type={type}
      className='w-full border border-black h-10 px-2 rounded-none'
      placeholder={placeholder}
      {...register}
    />
  )
}

export default Input
