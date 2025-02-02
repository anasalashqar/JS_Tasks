document.getElementById("submit9").addEventListener("submit", function (event) {
    event.preventDefault();
  
    let word1 = document.getElementById("dataInput9").value
  
    function checkTriangleType(a) {
      const ar = [1,2,3,4,5,6,7,8,9,10]
      
        if(ar.includes(+a)){
            return "Yes it includes it!"
        }else{
            return "NO it doesn't includes it!"
        }
    }
  
    const r = checkTriangleType(word1);
  
    document.getElementById("answer9").innerHTML = r;
  });
  