document.getElementById("submit8").addEventListener("submit", function (event) {
    event.preventDefault();
  
    let word1 = document.getElementById("dataInput8").value;
    let word2 = document.getElementById("dataInput81").value;
    let word3 = document.getElementById("dataInput82").value;
  
    function checkTriangleType(a, b, c) {
      if (a <= 0 || b <= 0 || c <= 0) {
        return "Invalid side lengths"; 
      }
  
      if (a + b <= c || a + c <= b || b + c <= a) {
        return "Not a valid triangle"; 
      }
  
      if (a === b && b === c) {
        return "Equilateral Triangle";
      } else if (a === b || b === c || a === c) {
        return "Isosceles Triangle";
      } else {
        return "Scalene Triangle";
      }
    }
  
    const r = checkTriangleType(word1, word2, word3);
  
    document.getElementById("answer8").innerHTML = r;
  });
  