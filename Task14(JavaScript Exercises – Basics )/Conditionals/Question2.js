document.getElementById("submit2").addEventListener("submit", function (event) {
  event.preventDefault();

  let word = document.getElementById("dataInput2").value;

  function switchCase(str) {
    let switched = "";
    for (let char of str) {
      if (char === char.toUpperCase()) {
        switched += char.toLowerCase();
      } else {
        switched += char.toUpperCase();
      }
    }

    return switched;
  }

  const r =switchCase(word);

  document.getElementById("answer2").innerHTML = r;
});
