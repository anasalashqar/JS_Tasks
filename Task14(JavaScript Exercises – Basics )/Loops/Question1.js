document.getElementById("submit1").addEventListener("submit", function (event) {
  event.preventDefault();


  function switchCase() {
    let ar = 0;
    let s = 0;
    let last = [];
    while (ar <= 50) {
      last.push(ar);
      ar++;
    }
    for (let i = 50; s <= i; s++) {
      last.push(s);
    }
    console.log(last)
    return last
  }

  const r = switchCase();

  document.getElementById("answer1").innerHTML = r;
});
