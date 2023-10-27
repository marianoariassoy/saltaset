import { Instagram, Linkedin, Facebook } from '../icons/icons'

const Social = ({ hover }) => {
  return (
    <nav className='flex gap-x-6 items-center'>
      <a
        href='#'
        target='_blank'
        rel='noreferrer'
        className={`${hover}`}
      >
        <Facebook />
      </a>
      <a
        href='#'
        target='_blank'
        rel='noreferrer'
        className={`${hover}`}
      >
        <Instagram />
      </a>
      <a
        href='#'
        target='_blank'
        rel='noreferrer'
        className={`${hover}`}
      >
        <Linkedin />
      </a>
    </nav>
  )
}

export default Social
