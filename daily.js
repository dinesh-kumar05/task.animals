async function foo(){

var res= await fetch("https://zoo-animal-api.herokuapp.com/animals/rand");
var res1= await res.json();
     console.log(res1)
     return bar(res1)

} foo();
async function bar(res1){
    for(var i in res1 ){
        console.log(res1[i])
   var div=document.createElement("div");
   div.innerHTML+=`
     <div class="card border-info mb-3" style="max-width: 18rem;">
     <div class="card-text">${res1[i]}</div>
   </div>`
   document.body.append(div);
    }

};

