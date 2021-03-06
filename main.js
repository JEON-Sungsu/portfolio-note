$(function () {
  $('.gnb-item a, .draggable a').click(function () {
    var url = $(this).attr('href')
    $('body').animate(
      {
        opacity: '0',
        right: '100px',
      },
      500,
      function () {
        document.location.href = url
      }
    )

    return false
  })
})

const fadeEls = document.querySelectorAll('.fade-in')
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7
    opacity: 1,
  })
})
