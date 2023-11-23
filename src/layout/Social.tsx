import { Instagram, Facebook } from '../icons/icons'

const Social = ({ hover }) => {
  return (
    <nav className='flex gap-x-6 items-center lg:pl-6 text-xl'>
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
    </nav>
  )
}

export default Social
