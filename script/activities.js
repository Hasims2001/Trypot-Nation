
let treckimg=["IMAGES/activities/treck1.jfif","IMAGES/activities/treck2.jfif","IMAGES/activities/treck3.jfif","IMAGES/activities/treck4.jfif","IMAGES/activities/treck5.jfif"];
let treck=document.getElementById("treck");
let leftbtn=document.getElementById("left");
treck.src=treckimg[0];
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

let scubaimg=["IMAGES/activities/scuba1.jfif","IMAGES/activities/scuba2.jfif","IMAGES/activities/scuba3.jfif","IMAGES/activities/scuba4.jfif"];
let scuba=document.getElementById("imgScuba");
scuba.src=scubaimg[0];
let leftscubabtn=document.getElementById("left-scuba")
let j=scubaimg.length-1;
leftscubabtn.addEventListener("click",()=>{
    if(j>=0){
        scuba.src=scubaimg[j]
        console.log(j);
        j--
    }else if(j<0){
        j=scubaimg.length-1;
    }
});
let rightscubabtn=document.getElementById("right-scuba");
rightscubabtn.addEventListener("click",()=>{
    console.log(j);
    scuba.src=scubaimg[j];
    j++;
    if(j>scubaimg.length-1){
        j=0;
    }
    
})



let paraimg=["IMAGES/activities/para1.png","IMAGES/activities/para2.jfif","IMAGES/activities/para3.jfif"];
let paraglide=document.getElementById("paraimg");
paraglide.src=paraimg[0];
let leftParabtn=document.getElementById("left-para");
let k=paraimg.length-1;
leftParabtn.addEventListener("click",()=>{
    if(k>=0){
        paraglide.src=paraimg[k];
        k--;
    }else if(k<0){
        k=paraimg.length-1;
    }
});
let rightParabtn=document.getElementById("right-para");
 rightParabtn.addEventListener("click",()=>{
         paraglide.src=paraimg[k];
         k++;
         if(k>paraimg.length-1){
            k=0;
         }
 });


let historyimg=["IMAGES/activities/hist1.jfif","IMAGES/activities/hist2.jfif","IMAGES/activities/hist3.jfif","IMAGES/activities/hist4.jfif","IMAGES/activities/hist5.jfif"];
let historical=document.getElementById("imghistorical");
historical.src=historyimg[0];
let lefthistbtn=document.getElementById("left-historical");
let l=historyimg.length-1;
lefthistbtn.addEventListener("click",()=>{
       if(l>=0){
        historical.src=historyimg[l];
        l--;
       }else if(l<0){
        l=historyimg.length-1;
       }
});
let righthisbtn=document.getElementById("right-historical");
righthisbtn.addEventListener("click",()=>{
    historical.src=historyimg[l];
    l++;
    if(l>historyimg.length-1){
        l=0;
    }
})

let heritageimg=["IMAGES/activities/her1.jfif","IMAGES/activities/her2.jfif","IMAGES/activities/her3.jfif","IMAGES/activities/her4.jfif","IMAGES/activities/her5.jfif","IMAGES/activities/her6.jfif"];
let heritage=document.getElementById("imgheritage");
heritage.src=heritageimg[0];
let m=heritageimg.length-1;
let leftheritagebtn=document.getElementById("left-heritage");
leftheritagebtn.addEventListener("click",()=>{
    if(m>=0){
        heritage.src=heritageimg[m];
        m--;
    }else if(m<0){
        m=heritageimg.length-1;
    }
});
let rightheritagebtn=document.getElementById("right-heritage");
rightheritagebtn.addEventListener("click",()=>{
    heritage.src=heritageimg[m];
    m++;
    if(m>heritageimg.length-1){
        m=0;
    }
})

let campimg=["IMAGES/activities/camp1.jfif","IMAGES/activities/camp2.jfif","IMAGES/activities/camp3.jfif","IMAGES/activities/camp4.jfif","IMAGES/activities/camp5.jfif","IMAGES/activities/camp6.jfif","IMAGES/activities/camp7.jfif"];
let imgcamp=document.getElementById("imgcamp");
imgcamp.src=campimg[0];
let n=campimg.length-1;
let leftcampbtn=document.getElementById("left-camping");
leftcampbtn.addEventListener("click",()=>{
     if(n>=0){
        imgcamp.src=campimg[n];
        n--;
     }else if(n<0){
        n=campimg.length-1;
     }
});
let rightcampbtn=document.getElementById("right-camping");
rightcampbtn.addEventListener("click",()=>{
    imgcamp.src=campimg[n];
    n++;
    if(n>campimg.length-1){
        n=0;
    }
})