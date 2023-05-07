// let c=document.getElementById("class");
// c.addEventListener("click",()=>{
//     console.log("BBBBB");
// })

let apiUrl=`https://trypot-nation.onrender.com/activities`;

async function fetchData(apiUrl){
    try{
         let res=await fetch(apiUrl);
         let data=await res.json();
         displayTreckData(data);
    }catch(err){
        console.log(err);
    }
};
fetchData(apiUrl);


let treckData=document.getElementById("treck-data");

function displayTreckData(data){
   treckData.innerHTML="";

   data.forEach((e)=>{
    let treckactivity=document.createElement("div");
    treckactivity.className=`treck-activity`;
    treckactivity.innerHTML=`
    <div class="treck-child-image"> 
    <div><img src="${e.image[0]}" alt=""></div> 
    <div>         
    <ul class="treck-list">  
     <li>Rating  <span>:${e.rating}</span></li>
     <li>Destination<span>:${e.destination}</span> </li>
     <li>Location<span>:${e.location}</span>  </li>
     <li>Duration<span>:${e.duration}</span>   </li>
     <li>Price<span>:${e.price||"You can visit free of cost"}</span>    </li>
    </ul>
    </div>
     </div>
    <div class="child-description">
 
    <h3>Description :${e.title}</h3>
   <p>${e.description}</p>
    </div>
 </div>`

  
treckData.append(treckactivity);
   })
}

let treckDestination=document.getElementById("sortDestinations");
let boxTreck1=document.createElement("input");
boxTreck1.setAttribute("type","checkbox");
treckDestination.append(boxTreck1);
