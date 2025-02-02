document.getElementById("submit5").addEventListener("submit", function (event) {
    event.preventDefault();
  
    let word = document.getElementById("dataInput5").value;
  
    function switchCase(str) {
      let switched = str;
      
        if (switched % 2 == 0) {
            arrary = "even"      
        }else{
            arrary = "odd"
        }
     
  
      return arrary;
    }
  
    const r = switchCase(word);
  
    document.getElementById("answer5").innerHTML = r;
  });
  