document.getElementById("submit3").addEventListener("submit", function (event) {
  event.preventDefault();

  function switchCase() {
    let ar = 0;
    let s = 1;
    let last = [];
    while (ar <= 50) {
      if (ar % 2 === 0) {
        last.push(ar);
        ar = ar + 2;
      }
    }
    // for (let i = 50; s <= i; s += 2) {
    //   if (s % 2 == 1) {
    //     last.push(s);
    //   }
    // }
    last.push("Lets start with odd:-")
    while (s <= 50) {
        if (s % 2 === 1) {
          last.push(s);
          s = s + 2;
        }
      }
    return last;
  }

  const r = switchCase();

  document.getElementById("answer3").innerHTML = r;
});
