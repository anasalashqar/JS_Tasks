document.getElementById("submit2").addEventListener("submit", function (event) {
  event.preventDefault();

  function switchCase() {
    let s = 0;
    let r = 0;
    let last = [];
    for (let i = 100; s <= i; s++) {
      if (r == 2) {
        break;
      }
      last.push(s);
      if (s == 50) {
        r++;
        s = -1; // dont know realy why but i guess the first time it will run s++
      }
    }
    console.log(last);
    return last;
  }

  const r = switchCase();

  document.getElementById("answer2").innerHTML = r;
});
