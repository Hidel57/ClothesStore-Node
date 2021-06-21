
function showNavbar (hamburguerId, navId, navClass) {
  const hamburguer = document.getElementById(hamburguerId)
  const nav = document.getElementById(navId)

  if (hamburguer && nav) {
    hamburguer.addEventListener('click', () => {
      nav.classList.toggle(navClass)
    })
  }
}

function componentClose (hamburguerId, navId, Removeclass) {
  const close = document.getElementById(hamburguerId)
  const search = document.getElementById(navId)

  if (close && search) {
    close.addEventListener('click', () => {
      search.classList.remove(Removeclass)
    })
  }
}

function initAcordion () {
  if (document.getElementsByClassName('accordion')) {
    var accs = document.getElementsByClassName('accordion')
    Array.prototype.forEach.call(accs, (el, i) => {
      var acc = el
      if (acc.classList.contains('active')) {
        var panel = acc.nextElementSibling
        if (window.getComputedStyle(panel).height === '0px') {
          panel.style.height = panel.scrollHeight + 'px'
        } else {
          panel.style.height = '0px'
        }
      }
      acc.addEventListener('click', () => {
        if (acc.classList.contains('active')) {
          acc.classList.remove('active')
          var panel = acc.nextElementSibling
          if (window.getComputedStyle(panel).height === '0px') {
            panel.style.height = panel.scrollHeight + 'px'
          } else {
            panel.style.height = '0px'
          }
        } else {
          acc.classList.add('active')
          var panel = acc.nextElementSibling
          if (window.getComputedStyle(panel).height === '0px') {
            panel.style.height = panel.scrollHeight + 'px'
          } else {
            panel.style.height = '0px'
          }
        }
      })
    })
  }
}

function closedNavbar (menuListClass, navId) {
  const menuLink0 = document.getElementsByClassName(menuListClass)[0]
  const menuLink1 = document.getElementsByClassName(menuListClass)[1]
  const menuLink2 = document.getElementsByClassName(menuListClass)[2]
  const menuLink3 = document.getElementsByClassName(menuListClass)[3]
  const nav = document.getElementById(navId)
  if (menuLink0 && nav) {
    menuLink0.addEventListener('click', () => {
      nav.classList.remove('navbar-movil--show')
    })
    menuLink1.addEventListener('click', () => {
      nav.classList.remove('navbar-movil--show')
    })
    menuLink2.addEventListener('click', () => {
      nav.classList.remove('navbar-movil--show')
    })
    menuLink3.addEventListener('click', () => {
      nav.classList.remove('navbar-movil--show')
    })
  }
}

// function sweetAlert (id) {
//   const btnDelete = document.getElementById(id)
//   btnDelete.addEventListener('click', () => {
//     console.log('click')
//   })
//   Swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, delete it!'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire(
//         'Deleted!',
//         'Your file has been deleted.',
//         'success'
//       )
//     }
//   })
// }

showNavbar('hamburger', 'nav', 'navbar-movil--show')
showNavbar('icon_shopping', 'cart', 'cart--show')
showNavbar('icon-search', 'search', 'search-show')
componentClose('icon-close', 'search', 'search-show')
componentClose('cart--close', 'cart', 'cart--show')
closedNavbar('navbar-movil--list', 'nav')
initAcordion()

// sweetAlert('deleteProyect')
