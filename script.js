// var peragraph =2


    const getPera = (pessage) => {
        const url =
        "https://lorem-ipsum-by-api-ninjas.p.rapidapi.com/v1/loremipsum?paragraphs=" +
        pessage;
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': '71d0ff669dmshaa3f8057890b028p15ce70jsn633f919746bb',
                'X-RapidAPI-Host': 'lorem-ipsum-by-api-ninjas.p.rapidapi.com'
            }
        };
    fetch(url, options)
      .then((resp) => resp.json())
      .then((res) => {
        document.getElementById("text").value = res.text;
      }).catch ((error) =>console.error(error))
}

const but = document.getElementById("submit");
const copy =document.getElementById("copy");
const a = document.getElementById("number");
but.addEventListener("click", function () {
    var b = a.value;
    if (b>0){
        getPera(b);
        document.getElementById("warning").style.display="none";
    }else{
        console.log("invalid input")
        document.getElementById("warning").style.display="block";
        
    }
});
copy.addEventListener("click", function () {
  var txt = document.getElementById("text")
  txt.select();
  txt.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(txt.value);
});
a.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});

