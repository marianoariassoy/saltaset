import Header from './Header'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className='fixed w-full bg-white z-50'>
        <Header />
      </header>
      <main>{children}</main>
      <footer className='bg-secondary'>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
