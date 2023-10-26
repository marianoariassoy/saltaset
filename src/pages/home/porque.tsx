import { Plus } from '../../icons/icons'
const Porque = () => {
  return (
    <section
      className='bg-primary'
      id='porque-salta'
    >
      <div className='w-full max-w-6xl m-auto px-6 py-20 flex items-center gap-6'>
        <div className='col text-4xl relative'>
          <div className='absolute -left-20 mt-4'>
            <Plus />
          </div>
          <span className='block font-secondary'>POR QUÉ </span>
          <span className='block font-secondary-black'>SALTA</span>
        </div>
      </div>
    </section>
  )
}

export default Porque
