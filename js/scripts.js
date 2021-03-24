function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
};

function divide(number1, number2) {
  return number1 / number2;
};


$(document).ready(function () {

  $("form#add").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    var operator = '';

    $("#plus").click(function () {
      const result = add(number1, number2);
      $("#output").text(result);
    });

    $("#minus").click(function () {
      const result = subtract(number1, number2);
      $("#output").text(result);
    });

    $("#multiply").click(function () {
      const result = multiply(number1, number2);
      $("#output").text(result);
    });

    $("#divide").click(function () {
      const result = divide(number1, number2);
      $("#output").text(result);
    });



  });
});
