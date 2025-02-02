document.getElementById("submit1").addEventListener("submit", function (event) {
  event.preventDefault();

  let year = new Date(
    document.getElementById("dataInput1").value
  ).getUTCFullYear();
  let promp = 2025 - year;

  if (30 < promp && promp < 60) {
    document.getElementById("answer1").innerHTML =
      "You are not eligible. You may join other programs.";
  } else if (18 < promp && promp < 30) {
    document.getElementById("answer1").innerHTML =
      "You are eligible. Start your application";
  } else if (promp < 18) {
    document.getElementById("answer1").innerHTML =
      "You may join the kids' program.";
  } else if (promp > 60) {
    document.getElementById("answer1").innerHTML =
      "You may join the seniors' program";
  }
});
