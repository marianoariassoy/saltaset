import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className='fixed w-full bg-white z-50'>
        <Header />
        <Menu />
      </header>
      <main>{children}</main>
      <footer className='bg-secondary'>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
