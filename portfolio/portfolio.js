const pics_src = ["images-3.jpg","images-2.jpg","images-4.jpg"];
let num = -1;
 
 
function slideshow_timer(){
  if (num === 2){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
  $('img').addClass('.is-show ');

}
 
setInterval(slideshow_timer, 5000);











 $ ('#menu-1').on('click',(e)=>{
   e.preventDefault();
   window.scrollTo(0,750);
 });
 
 
 
 

