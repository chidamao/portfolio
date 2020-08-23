$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
	
		scrollHorizontally: true,
		navigation:true,
	    autoScrolling: true,
	    fitToSection: true
	    
	});
	

	//methods
	$.fn.fullpage.setAllowScrolling(true);
	 $.fn.fullpage.moveTo(section, slide);
	 
   
 });
 
 
 
 
$ ('.nav-link1').on('click',(e)=>{
   e.preventDefault();
   $.fn.fullpage.moveTo(1);
 });
 
 $ ('.nav-link2').on('click',(e)=>{
   e.preventDefault();
   $.fn.fullpage.moveTo(2);
 });
 
 $ ('.nav-link3').on('click',(e)=>{
   e.preventDefault();
   $.fn.fullpage.moveTo(3);
 });
 
 $ ('.nav-link4').on('click',(e)=>{
   e.preventDefault();
   $.fn.fullpage.moveTo(4);
 });
 

const windowWidth = $(window).width();
const windowSm = 640;
if (windowWidth <= windowSm) {
    //横幅640px以下のとき（つまりスマホ時）に行う処理を書く
    window.open().location.href = 'https://5cdcde1d563e484496c0fa187adbc965.vfs.cloud9.us-east-1.amazonaws.com/_static/portfolio3/mobile.html';
} else {
  
}
 $(function () {
    setTimeout('rect()'); 
});
 
 

