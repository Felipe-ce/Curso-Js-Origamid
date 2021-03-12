function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-content section')

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')

    function actveTab(index) {
      tabContent.forEach((section) =>{
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
      
    }

    tabMenu.forEach((li, index)=>{
      li.addEventListener('click', ()=>{
        actveTab(index)
      })
    })

  }
}
initTabNav()





// function initTabNav() {
//   const tabMenu = document.querySelectorAll('.js-tabmenu li');
//   const tabContent = document.querySelectorAll('.js-content section');
  
//   // O IF verifica se existe as clases para poder prosseguir
//   if (tabMenu.length && tabContent.length) {
//     tabContent[0].classList.add('ativo')
//     function actveTab(index) {
//       tabContent.forEach((section) =>{
//         section.classList.remove('ativo')
//       })
//       tabContent[index].classList.add('ativo')
//     }
    
//     tabMenu.forEach((li, index) => {
//       li.addEventListener('click', ()=> {
//         actveTab(index);
//       });
//     });
//   }
// }
// initTabNav()

// function iniAccordion() {
//   const accordionList = document.querySelectorAll('.js-accordion dt')
//   // Coloca a classe dentro de uma variavel caso queira mudar futuramente
//   const activeClass = 'ativo'

//   // O IF verifica se existe as clases para poder prosseguir
//   if (accordionList.length) {
//     accordionList[0].classList.add(activeClass)
//     accordionList[0].nextElementSibling.classList.add(activeClass)
    
//     function activeAccordion() {
//       this.classList.toggle(activeClass)
//       this.nextElementSibling.classList.toggle(activeClass)
//     }
    
//     accordionList.forEach((item) =>{
//       item.addEventListener('click', activeAccordion)
//     })
//   }
// }
// iniAccordion()

// function initScrollSuave() {
//   const linksInternos = document.querySelectorAll('.js-menu a[href^="#"')
  
//   function scrolltoSection(event) {
//     event.preventDefault()
//     const href = event.currentTarget.getAttribute('href')
//     const section = document.querySelector(href)
  
  
//     section.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     })
  
//     /*
//     forma auternativa
//     const topo = section.offsetTop
//     window.scrollTo({
//       top: topo,
//       behavior: "smooth",
//     }) */
//   }

//   linksInternos.forEach((link) =>{
//     link.addEventListener('click', scrolltoSection)
//   })
// }

// initScrollSuave()