document.getElementById("submit6").addEventListener("submit", function (event) {
  event.preventDefault();

  let word = document.getElementById("dataInput6").value;

  function switchCase(str) {
    let num = Number(str); 
    if(!isNaN(num)){
        return "it is a Number!"
    }else{
        return "it is NOT a Number!"
    }
  }

  const r = switchCase(word);

  document.getElementById("answer6").innerHTML = r;
});
