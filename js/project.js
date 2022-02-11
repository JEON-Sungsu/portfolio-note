const shootEls = document.querySelectorAll('.shooting')

shootEls.forEach(function (shootEl, index) {
  gsap.to(shootEl, 1, {
    x: 0,
    y: 0,
    opacity: 1,
    delay: (index + 1) * 0.5,
  })
})

function openPopupFirst() {
  window.open(
    './html/projects-01.html',
    'new',
    'toolbar=no, menubar=no, scrollbars=yes, resizable=no, width=700, height=800, left=900px, top=0'
  )
}

function openPopupSecond() {
  window.open(
    './html/projects-02.html',
    'new',
    'toolbar=no, menubar=no, scrollbars=yes, resizable=no, width=700, height=800, left=900px, top=0'
  )
}

function openPopupThird() {
  window.open(
    './html/projects-03.html',
    'new',
    'toolbar=no, menubar=no, scrollbars=yes, resizable=no, width=700, height=800, left=900px, top=0'
  )
}

function openPopupFourth() {
  window.open(
    './html/projects-04.html',
    'new',
    'toolbar=no, menubar=no, scrollbars=yes, resizable=no,, width=700, height=800, left=900px, top=0'
  )
}
