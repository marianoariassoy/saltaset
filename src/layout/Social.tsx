import { Instagram, Facebook, Youtube } from '../icons/icons'

const Social = ({ hover }) => {
  return (
    <nav className='flex gap-x-6 items-center text-xl'>
      <a
        href='https://www.facebook.com/profile.php?id=61553898787051'
        target='_blank'
        rel='noreferrer'
        className={`${hover}`}
      >
        <Facebook />
      </a>
      <a
        href='https://www.instagram.com/salta.set/?igshid=NGVhN2U2NjQ0Yg%3D%3D'
        target='_blank'
        rel='noreferrer'
        className={`${hover}`}
      >
        <Instagram />
      </a>
      <a
        href='https://www.youtube.com/channel/UCUYveWwvLdF_Uh1sbiCP4DA'
        target='_blank'
        rel='noreferrer'
        className={`${hover}`}
      >
        <Youtube />
      </a>
    </nav>
  )
}

export default Social
