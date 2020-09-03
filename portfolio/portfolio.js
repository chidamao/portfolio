const pics_src = ["images-1.jpg","images-3.jpg","images-2.jpg","images-4.jpg"];
let num = -1;
 
 
function slideshow_timer(){
  if (num === 3){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
  $('img').addClass('.is-show ');

}
 
setInterval(slideshow_timer, 5000);


 $ ('.nav1').on('click',(e)=>{
   e.preventDefault();
   window.scrollTo(0,750);
 });
 
 
 
 
 $ ('.nav3').on('click',(e)=>{
   e.preventDefault();
   window.scrollTo(0,1500);
 });





document.querySelector('.navbar-toggler').onclick = function() {
    
    if(document.getElementById('navbar').classList.contains('show')) {
        document.querySelector('#navbar').classList.remove('show');
    } else {
      document.querySelector('#navbar').classList.add('show');
    }
}




$('.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
    }
  },
  offset: '90%',
});









