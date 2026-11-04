function add(a, b) {
  return a + b;
}

function showResult() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  let total = add(a, b);

  document.getElementById("out").innerHTML = "Result: " + total;
  console.log(total);

  if (total > 100) {
    alert("Big number!");
  }
}

document.getElementById("btn").addEventListener("click", showResult); 