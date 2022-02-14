function isCousing(n) {
  var cont = 2;
  var cousing = true;
  while (cont <= n / 2 && cousing) {
    cousing = !(n % cont++ == 0);
  }
  return cousing;
}

document.getElementById("button").addEventListener("click", (e) => {
  /*const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const title = document.createElement("div");
  title.append(document.createTextNode(`${name} ${lastName}`));
  document.getElementById("out").append(title);*/
  const numOne = document.getElementById("numOne").value;
  const numTwo = document.getElementById("numTwo").value;
  const min = numOne < numTwo ? numOne : numTwo;
  const max = numOne > numTwo ? numOne : numTwo;
  const ant = 0;
  const sum = 0;
  const title = `${
    document.getElementById("title").innerHTML
  } del ${min} al ${max}`;
  document.getElementById("title").innerHTML = title;
  var i = 1;
  for (let cont = min; cont <= max; cont++) {
    if (isCousing(cont)) {
      var row = document.createElement("tr");
      var col = document.createElement("td");
      col.append(document.createTextNode(i++));
      row.append(col);
      var col = document.createElement("id");
      col.append(document.createTextNode(cont));
      row.append(col);
      document.getElementById("body").append(row);
    }
  }
  var col = document.createElement("td");
  col.append(
    document.createTextNode(`Hay ${i - 1} numeros primos y su suma es: ${sum}`)
  );
  document.getElementById("body").append(col);
});

document.getElementById("name").addEventListener("keypress", (e) => {
  /*var name = document.getElementById('name').value
    document.getElementById('lastName').value = name
    alert(e.key)*/
  if (/[^a-zA-A]/.test(e.key)) {
    //alert("Ok");
  }
});

document.getElementById("lastName").addEventListener("keypress", (e) => {
  if (/[0-9]/.test(e.key)) {
    e.preventDefault();
  }
});
