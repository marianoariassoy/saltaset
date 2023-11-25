const scroll = () => {
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
