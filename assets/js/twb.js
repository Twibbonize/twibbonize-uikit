window.addEventListener('scroll', function () {
    const scroll = window.scrollY

    if (scroll > 80) {
        document.querySelector('.header__twb').classList.add('scrolled')
        document.querySelector('.header__brand').setAttribute('src', 'assets/img/logos/Logo-twb.svg')
        document.querySelector('.header__brand-mobile').setAttribute('src', 'assets/img/logos/logo-twb-icon.svg')

    } else {
        document.querySelector('.header__brand').setAttribute('src', 'assets/img/logos/logo-twb-white.svg')
        document.querySelector('.header__brand-mobile').setAttribute('src', 'assets/img/logos/logo-twb-icon-white.svg')
        document.querySelector('.header__twb').classList.remove('scrolled')
    }
    // console.log(scroll)
})