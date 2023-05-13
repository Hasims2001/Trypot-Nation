

// landing animaton of hills
let text = document.getElementById('text');

let leaf = document.getElementById('leaf');

let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;

    text.style.marginTop = value * 1 + 'px' ;
  
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    
    // Use media queries to adjust the CSS properties of the elements based on the screen size
    if (window.matchMedia("(max-width: 600px)").matches) {
        // For screens smaller than 768px
        text.innerText=""
        text.style.textOverflow = value * 0.1 + 'px' ;
        leaf.style.top = value * -0.1 + 'px';
        leaf.style.left = value * 0.1 + 'px';
        hill5.style.left = value * 0.1 + 'px';
        hill4.style.left = value * -0.1 + 'px';
    }
});



//Smooth Scrolling When Clicking an Anchor Link to abot section 

$(document).ready(function() {
    $("a.scrollLink").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
          }, 500);
      });
  });

  $(document).ready(function() {
    $("a.scrollLink2").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
          }, 500);
      });
  });



//   testemoonials

        
     //----------->> Destinations  <<-------------------  

let apiUrl=`https://trypot-nation-dkah.onrender.com/packages`;

async function Fetchdata(apiUrl){
         try{
       let res=await fetch(apiUrl);
       let data=await res.json();
      
       destination(data);
         }catch(err){
            console.log(err);
         }
}

function destination(data){
    // console.log(data);
    let obj={};
    for(let i=0;i<data.length;i++){
        if(obj[data[i].destination]===undefined){
            let arr=[];
            obj[data[i].destination]=arr;
            arr.push(data[i].image[0]);
            arr.push(data[i].id);

        }
    }
    displaydestination(obj,data);
}
let destinationContainer=document.getElementById("destination-container");
function displaydestination(obj){
    console.log(obj);
    // destinationContainer.innerHTML="";
    let objArr=Object.keys(obj);
    console.log(objArr);
    
    for(let key in obj){
        let div=document.createElement("div");
        div.setAttribute("id",obj[key][1]);
        let image=document.createElement("img");
        image.src=obj[key][0];
        let name=document.createElement("h3");
        name.textContent=key;
        div.append(image,name);
        console.log(div);
        // http://127.0.0.1:5500/destDetails.html?state=kerala
        div.addEventListener('click', () => {
            localStorage.setItem('package_id',obj[key][1]);
            window.location.href = `http://127.0.0.1:5500/destDetails.html?state=${key}`;
        });
        destinationContainer.append(div);
    }
   

}

window.addEventListener("load",Fetchdata(apiUrl));











// --------------->>>>>  Packages <<<<--------------


//    ------>> activity <<<<----------------

   let apiactivityUrl=`https://trypot-nation-dkah.onrender.com/activities`;

   async function Fetchactivitydata(){
            try{
          let res=await fetch(apiactivityUrl);
          let data=await res.json();
         console.log(data);
         activity(data);
            }catch(err){
               console.log(err);
            }
   }
   
   function activity(data){
       // console.log(data);
       let obj={};
       for(let i=0;i<data.length;i++){
           if(obj[data[i].category]===undefined){
               let arr=[];
               obj[data[i].category]=arr;
               arr.push(data[i].image[0]);
               arr.push(data[i].id);
   
           }
       }
       displayactivity(obj,data);
   }
   let activityContainer=document.getElementById("activity-container");
   function displayactivity(obj,data){
       console.log(obj);
       // activityContainer.innerHTML="";
       let objArr=Object.keys(obj);
       console.log(objArr);
       
       for(let key in obj){
           let div=document.createElement("div");
           div.setAttribute("id",obj[key][1]);
           let image=document.createElement("img");
           image.src=obj[key][0];
           let name=document.createElement("h3");
           name.textContent=key;
           div.append(image,name);
           console.log(div);
           div.addEventListener('click', () => {
               localStorage.setItem('package_id',obj[key][1]);
               window.location.href = `http://127.0.0.1:5500/${key}.html`;
           });
           activityContainer.append(div);
       }
      
   
   }
   
   window.addEventListener("load",Fetchactivitydata(apiactivityUrl));
   
   
   
   
   
   