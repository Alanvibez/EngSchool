$(document).ready(function () {
///Маска для телефона
  $(document).ready(function(){
    $("#phone").mask("+7(999)999-99-99");
    });


///Открыть модальное окно
  $('.call').click(function () {
    $(".modal").css("display", "grid")
  });


///Закрыть модальное окно
  $('#close').click(function () {
    $(".modal").fadeOut()
    $('#name').val('')
    $('#phone').val('')
    $('#message').val('')
  });

  /*ПРОВЕРЯЕМ НАЖАТА ЛИ КНОПКА ОТПРАВКИ*/
  $('#send').click(function () {
    // собираем данные с формы
    let user_name = $('#name').val();
    let user_phone = $('#phone').val();
    let user_message = $('#message').val();

    if (user_name.length == 0) {
      $('#name').addClass('bounce');
      setTimeout(function () {
        $('#name').removeClass('bounce');
      }, 1000);
      return false;
    } else if (user_phone.length == 0) {
      $('#phone').addClass('bounce');
      setTimeout(function () {
        $('#phone').removeClass('bounce');
      }, 1000);
      return false;
    }

    // отправляем данные
    $.ajax({
      url: "contact.php",
      type: "post",
      data: {
        "name": user_name,
        "phone": user_phone,
        "message": user_message
      },
      success: function (result) {
        /* В случае удачной обработки и отправки выполнится следующий код*/
        $('#name').val('');
        $('#phone').val('');
        $('#message').val('');
      }
    });
  });
})