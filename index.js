$("#sendDate").click(function(){
  var userName = $("#userName").val()
  var userSurname = $("#userSurname").val()
  var userMessage = $("#userMessage").val()
  if(userSurname.length!=0 && userMessage!=0 && userName!=0) {
      alert(userName+", ваша заявка успешно отправлена!")
   }
}
)

$("#dialNumber1").click(function copy() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($("#dialNumber1").text()).select();
  document.execCommand("copy");
  $temp.remove();
}
)

$("#dialNumber2").click(function copy() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($("#dialNumber2").text()).select();
  document.execCommand("copy");
  $temp.remove();
}
)

$("#dialNumber3").click(function copy() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($("#dialNumber3").text()).select();
  document.execCommand("copy");
  $temp.remove();
}
)

$(".dialNumber").click(function successCopy() {
  $(".alert").show();
  var submit = new Audio("sounds/SubmitSound.mp3");
  submit.play();
})

$(".closebtn").click(function closeAlert(){
  $(".alert ").hide();
})


$("#choose").click(function chooseTown(){
  $("#options").slideDown();
})

$(".footer").mouseover(function colorChange(){
  $(".footer").css("color","green")
})

$(".footer").mouseleave(function colorChange(){
  $(".footer").css("color","white")
})


  $("#userName").keypress(function() {
    $("#userName").css("background-color", "#8de3f2")
  })

  $("#userSurname").keypress(function() {
    $("#userSurname").css("background-color", "#8de3f2")
  })

  $("#userMail").keypress(function() {
    $("#userMail").css("background-color", "#8de3f2")
  })

  // When the user clicks on <div>, open the popup
