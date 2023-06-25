function compute() {
  var principal = parseFloat(document.getElementById("principal").value);
  var rate = parseFloat(document.getElementById("rate").value);
  var years = parseInt(document.getElementById("years").value);

  if (principal <= 0 || isNaN(principal)) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  } else {
    var interest = (principal * years * rate) / 100;
    var amount = principal + interest;
    var futureYear = new Date().getFullYear() + years;
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br>at an interest rate of <mark>" + rate + "%</mark>.<br>You will receive an amount of <mark>" + amount + "</mark>,<br>in the year <mark>" + futureYear + "</mark>.";
  }
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerHTML = rateval + "%";
}
