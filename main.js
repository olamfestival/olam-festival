gsap.registerPlugin(ScrollTrigger);


gsap.to(".img_container", {
    ease: "power4.inOut", 
    x: -400,
    y: 30,
     duration: 20,
     scrollTrigger:{
        trigger: ".img_container",
        start: "top 130%",
        // end: "bottom 25%",
        //  markers: true,
        // toggleActions: "restart none none none",
         scrub: 4,
     }
 })

 document.querySelector('.toggle').addEventListener('click', () => 
 document.querySelector('.hmbrgOverLay').classList.toggle('reveal'));

 $(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});



