import { Back, Forward } from '../../icons/icons'

const Modal = ({ currentImage, setCurrentImage, handelNext, handelPrev }) => {
  const handelClick = e => {
    if (e.target.classList.contains('dismiss')) {
      setCurrentImage(null)
    }

    console.log('cicks')
    console.log(e.target)
  }
  return (
    <div
      className='fixed bg-black bg-opacity-60 backdrop-blur h-screen w-screen top-0 left-0 grid place-items-center dismiss z-50 px-6 py-32 lg:px-32 lg:py-16'
      onClick={handelClick}
    >
      <div className='bg-white p-4 fade-in max-w-7xl'>
        <img
          src={currentImage}
          alt=''
          className='w-full'
        />
      </div>

      <button
        className='absolute top-8 right-8 text-white text-4xl dismiss cursor-pointer hover:text-black z-30 font-bold'
        onClick={handelClick}
      >
        X
      </button>
      <button
        className='absolute top-1/2 left-8 text-white cursor-pointer hover:text-black z-40 hidden lg:block'
        onClick={handelPrev}
      >
        <Back />
      </button>
      <button
        className='absolute top-1/2 right-8 text-white cursor-pointer hover:text-black z-40 hidden lg:block'
        onClick={handelNext}
      >
        <Forward />
      </button>
    </div>
  )
}

export default Modal
