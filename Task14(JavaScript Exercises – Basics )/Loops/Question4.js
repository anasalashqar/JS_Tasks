document.getElementById("submit4").addEventListener("submit", function (event) {
  event.preventDefault();

  function switchCase() {
    let s = 0;
    let last = [];
    for (let i = 100; s <= i; s++) {
      if (s % 3 === 0 && s % 5 === 0) {
        last.push("FizzBuzz");
      } else if (s % 3 == 0) {
        last.push("Fizz");
      } else if (s % 5 == 0) {
        last.push("Buzz");
      } else {
        last.push(s);
      }
    }
    console.log(last);
    return last;
  }

  const r = switchCase();

  document.getElementById("answer4").innerHTML = r;
});
