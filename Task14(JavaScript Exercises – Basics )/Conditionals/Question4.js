document.getElementById("submit4").addEventListener("submit", function (event) {
  event.preventDefault();

  let word = document.getElementById("dataInput4").value;

  function switchCase(str) {
    let switched = str;
    for (let i = 0; i < str.length; i++) {
      if (word.toString() === str[i]) {
        switched.splice(i, 1);
      }
    }
    let arrary = switched.join(" ");

    return arrary;
  }

  const r = switchCase(["Coding", "Academy", "By", "Orange"]);

  document.getElementById("answer4").innerHTML = r;
});
