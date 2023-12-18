const Select = ({ options, register, name, lan }) => {
  return (
    <select
      className='w-full border-b border-black h-10 bg-white cursor-pointer rounded-none font-bold'
      {...register}
    >
      <option
        disabled
        selected
        value=''
      >
        {name}
      </option>
      {options.map((item, index) => {
        return <option key={index}>{lan ? item[lan].title : item}</option>
      })}
    </select>
  )
}

export default Select
