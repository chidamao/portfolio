$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
	
		scrollHorizontally: true,
		navigation:true
		
		
	    
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
 


 