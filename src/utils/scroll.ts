const scroll = () => {
  // const links = document.querySelectorAll('.scroll')
  // links.forEach(link => {
  //   link.addEventListener('click', smoothScroll)
  // })

  // function smoothScroll(e: Event) {
  //   e.preventDefault()
  //   const targetId = this.getAttribute('target')
  //   const targetElement = document.querySelector(targetId)
  //   window.scrollTo({
  //     top: targetElement.offsetTop,
  //     behavior: 'smooth'
  //   })
  // }

  // const servicios = document.querySelector('#servicios') as HTMLElement
  // const contacto = document.querySelector('#contacto') as HTMLElement
  const header = document.querySelector('.header') as HTMLElement

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY
    if (currentScroll > 50) {
      header?.classList.add('small-header')
      return
    } else {
      header?.classList.remove('small-header')
    }
  })
}

export default scroll
