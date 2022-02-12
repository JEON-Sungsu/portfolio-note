const shootEls = document.querySelectorAll('.shooting')

shootEls.forEach(function (shootEl, index) {
  gsap.to(shootEl, 1, {
    x: 0,
    y: 0,
    opacity: 1,
    delay: (index + 1) * 0.5,
  })
})

const stickerEls = document.querySelectorAll('.sticker-misc')
stickerEls.forEach(function (stickerEl, index) {
  gsap.to(stickerEl, 1, {
    delay: 2.8,
    opacity: 1,
  })
})
