
  (function (){
    const menuItens = document.querySelectorAll('#navbar a[href^="#"]')
  
  menuItens.forEach(e => {
    e.addEventListener('click', event => {
      event.preventDefault()
      const el = event.target
      const id = el.getAttribute('href')
      const section = document.querySelector(id).offsetTop
      

      window.scroll({
        top: section - 90,
        behavior: 'smooth'
      })
    })
  })

  })()

  const elementData = document.querySelectorAll('[data-anime]')
  const animeClass = 'anime'

  function animeScroll(){
    const windowTop = window.pageYOffset + 300

    elementData.forEach(e => {
      if(windowTop > e.offsetTop){
        e.classList.add(animeClass)
      }
    })

  }

  animeScroll()
 
  window.addEventListener('scroll', () => {
    animeScroll()
  })

  window.addEventListener('load', () => {
    animeScroll()
  })
  