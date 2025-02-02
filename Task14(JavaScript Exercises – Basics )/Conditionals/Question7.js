document.getElementById("submit7").addEventListener("submit", function (event) {
    event.preventDefault();
  
    let word1 = document.getElementById("dataInput7").value;
    let word2 = document.getElementById("dataInput71").value;
  
    function switchCase(str1,str2) {
      let num = Number(str1);
      let nam2 = Number(str2); 
      if(num > nam2){
        return "It is a Number!"
    }else{
          return "it is NOT a Number!"
      }
    }
  
    const r = switchCase(word1,word2);
  
    document.getElementById("answer7").innerHTML = r;
  });
  