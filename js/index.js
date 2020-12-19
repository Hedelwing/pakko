//scroll header

document.addEventListener("scroll", (e) => {
    const header = document.querySelector('header')

    if (window.scrollY > 50) {
        header.classList.add('header_small')
        header.classList.remove('header_regular')
    }
    else {
        header.classList.remove('header_small')
        header.classList.add('header_regular')
    }
})

//drawer controller

document.querySelector('#menu').addEventListener('change', ({ target: { checked } }) => {
    const burger = document.querySelector('.burger')
    const drawer = document.querySelector('.drawer')
    if (checked) {
        burger.classList.add('burger_checked')
        drawer.classList.add('drawer_opened')
    }
    else {
        burger.classList.remove('burger_checked')
        drawer.classList.remove('drawer_opened')
    }
})

//appear effects

ScrollReveal().reveal('.js-scale-opacity', { delay: 25, scale: 0.5, opacity: .3 })

const baseAppearConfig = { delay: 20, opacity: 0, scale: .75, easing: 'cubic-bezier(0.68,-0.55,0.27,1.55)', duration: 800 }

ScrollReveal().reveal('.js-top-appear', { ...baseAppearConfig, distance: '4rem', origin: "top" })
ScrollReveal().reveal('.js-right-appear', { ...baseAppearConfig, distance: '6rem', origin: "right" })
ScrollReveal().reveal('.js-left-appear', { ...baseAppearConfig, distance: '6rem', origin: "left" })
ScrollReveal().reveal('.js-bottom-appear', { ...baseAppearConfig, distance: '4rem', origin: "bottom" })