const shootEls = document.querySelectorAll('.shooting')

shootEls.forEach(function (shootEl, index) {
  gsap.to(shootEl, 1, {
    x: 0,
    y: 0,
    opacity: 1,
    delay: (index + 1) * 0.5,
  })
})

const fadeEls = document.querySelectorAll('.sticker-misc')
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: 2.8,
    opacity: 1,
  })
})
