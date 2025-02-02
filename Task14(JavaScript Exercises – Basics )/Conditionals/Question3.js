document.getElementById("submit3").addEventListener("submit", function (event) {
  event.preventDefault();

  let word = document.getElementById("dataInput3").value;

  function switchCase(str) {
    let switched = str.split(" ");
    console.log(switched);
    for (let i = 0; i < switched.length; i++) {
      switched[i] = switched[i].charAt(0).toUpperCase() + switched[i].slice(1);
    }
    console.log(switched);
    let arrary = switched.join("");

    return arrary;
  }

  const r = switchCase(word);

  document.getElementById("answer3").innerHTML = r;
});
