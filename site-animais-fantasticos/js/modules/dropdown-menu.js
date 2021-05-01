export default function initDropDown() {
  
}

const dropdownManus = document.querySelectorAll('[data-dropdown]')
dropdownManus.forEach(menu => {
  
  ['touchstart', 'click'].forEach(userEvent =>{
    menu.addEventListener(userEvent, handleClick)
  })
})

function handleClick(event) {
  event.preventDefault()
  this.classList.add('active')
  outSideClick(this, () =>{
    this.classList.remove('active')
  }) 
}


function outSideClick(element, callBack) {
  const html = document.documentElement;
  const outside = 'data-outside'

if (!element.hasAttribute(outside)) {
  html.addEventListener('click', handleOutsideClick)
  element.setAttribute(outside, '')
  
}
  
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      html.removeEventListener('click', handleOutsideClick)
      callBack()
    }
  }
}

