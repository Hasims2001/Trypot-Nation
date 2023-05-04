
let treckimg=["IMAGES/activities/para1.png","IMAGES/activities/para2.jfif","IMAGES/activities/para3.jfif"];
let treck=document.getElementById("treck");
let leftbtn=document.getElementById("left");
let i=treckimg.length-1;
leftbtn.addEventListener("click",()=>{
    if(i>=0){
        treck.src=treckimg[i]
        console.log(i);
        i--
    }else if(i<0){
        i=treckimg.length-1;
    }
});
let rightbtn=document.getElementById("right");
rightbtn.addEventListener("click",()=>{
    console.log(i);
    treck.src=treckimg[i];
    i++;
    if(i>treckimg.length-1){
        i=0;
    }
    
})

let scubaimg=["IMAGES/activities/para1.png"];
let scuba=document.getElementById("imgScuba");
scuba.src=scubaimg[0];



let paraimg=["IMAGES/activities/para1.png"];
let paraglide=document.getElementById("paraimg");
paraglide.src=paraimg[0];



let historyimg=["IMAGES/activities/para1.png"];
let historical=document.getElementById("imghistorical");
historical.src=historyimg[0];



let heritageimg=["IMAGES/activities/para1.png"];
let heritage=document.getElementById("imgheritage");
heritage.src=heritageimg[0];


let campimg=["IMAGES/activities/para1.png"];
let imgcamp=document.getElementById("imgcamp");
imgcamp.src=campimg[0];