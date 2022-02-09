$(function () {
  $('.next-move').click(function () {
    var url = $(this).attr('href')
    $('body main').animate(
      {
        opacity: '0',
        left: '10px',
      },
      500,
      function () {
        document.location.href = url
      }
    )

    return false
  })
})
