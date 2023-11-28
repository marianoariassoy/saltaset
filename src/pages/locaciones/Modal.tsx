const Modal = ({ setCurrentImage, currentImage }) => {
  const handelClick = e => {
    if (e.target.classList.contains('dismiss')) {
      setCurrentImage(null)
    }
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

      <span
        className='absolute top-8 right-8 text-white font-bold text-4xl cursor-pointer hover:text-black dismiss'
        onClick={handelClick}
      >
        X
      </span>
    </div>
  )
}

export default Modal
