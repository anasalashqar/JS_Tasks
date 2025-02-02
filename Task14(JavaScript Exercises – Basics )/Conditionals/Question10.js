document
  .getElementById("submit10")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let word1 = document.getElementById("dataInput10").value;

    function checkTriangleType(a) {
      const year = new Date(a).getFullYear();

      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "it is a leap year";
      } else {
        return "it is not a leap year";
      }
    }

    const r = checkTriangleType(word1);

    document.getElementById("answer10").innerHTML = r;
  });
