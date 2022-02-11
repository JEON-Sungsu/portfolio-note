var slider = tns({
  container: '.img-slide',
  items: 1,
  controls: false,
  autoplay: true,
  navContainer: '.slide-nav',
  arrowKeys: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const fadeEls = document.querySelectorAll('.fade-in')
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7
    opacity: 1,
  })
})
