// landing animaton of hills
let text = document.getElementById('text');

let leaf = document.getElementById('leaf');

let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px' ;
  
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
})



//Smooth Scrolling When Clicking an Anchor Link to abot section 

$(document).ready(function() {
    $("a.scrollLink").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
          }, 500);
      });
  });


