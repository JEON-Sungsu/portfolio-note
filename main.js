$(function () {
  $('a').click(function () {
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
