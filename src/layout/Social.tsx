import { Instagram, Linkedin, Facebook } from '../icons/icons'

const Social = () => {
  return (
    <nav className='flex gap-x-6 items-center'>
      <a
        href='#'
        target='_blank'
        rel='noreferrer'
        className='hover:text-white'
      >
        <Facebook />
      </a>
      <a
        href='#'
        target='_blank'
        rel='noreferrer'
        className='hover:text-white'
      >
        <Instagram />
      </a>
      <a
        href='#'
        target='_blank'
        rel='noreferrer'
        className='hover:text-white'
      >
        <Linkedin />
      </a>
    </nav>
  )
}

export default Social
