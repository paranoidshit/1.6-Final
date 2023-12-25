export let toggleAsideActive = function(el, aside, wrapper, body, nav) {
  el.onclick = function() {
    if (el.classList.contains('navigation__phone-button') || el.classList.contains('navigation__message-button')) {
      wrapper.classList.remove('blur')
      nav.classList.remove('active')
    }
    if (nav) nav.classList.toggle('blur')
    if (nav) nav.classList.remove('navigation--active')
    if (aside.classList.contains('modal')) {
      aside.classList.toggle('modal--active')
    } else {
      aside.classList.toggle('navigation--active')
    }
    wrapper.classList.toggle('blur')
  }
}

export let toggleAsideActiveOnOpen = function(aside, open, close, wrapper, className, nav) {
  document.addEventListener('click',  function(e) {
    if ((aside.classList.contains(className))) {
      if (!aside.contains(e.target) && !e.target.classList.contains(open) || close.contains(e.target)) {
        aside.classList.remove(className)
        if (nav) nav.classList.remove('blur', 'navigation--active')
        wrapper.classList.remove('blur')
        console.log('Sex is upon ' + className + '!')
      }
    }
  })
}

