$(document).ready(function(){
	
//Init scrollMagic
var controller = new ScrollMagic.Controller();


$('.ele').each(function(){

console.log(this);

//build scene
var ourScene = new ScrollMagic.Scene({
	triggerElement: this,
	triggerHook: 0.7,
})
.setClassToggle(this, 'act') // add class to project01
/*.addIndicators({
	name: 'Sec Video',
	colorTrigger: 'CTA VIdeo',
	colorStart: 'gray'
}) */
.addTo(controller);

})






	
});