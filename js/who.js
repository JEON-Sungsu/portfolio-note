const spinEls = document.querySelectorAll('.spin-elements')

spinEls.forEach(function (spinEl, index) {
  gsap.to(spinEl, 1, {
    rotationY: 0,
    opacity: 1,
    delay: (index + 1) * 0.5,
  })
})
