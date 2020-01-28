$(document).ready(function() {

    //Init scrollMagic
    var controller = new ScrollMagic.Controller();


    // Descubre --------------------
    var tlBotellas = new TimelineLite({});
    tlBotellas.to(".items", .7, { autoAlpha: 1 })

    var ourScene = new ScrollMagic.Scene({
            triggerElement: ".descubre",
            triggerHook: 0.4,
            /*reverse: false,*/
        })
        .setTween(tlBotellas)
        /*.addIndicators({
        	name: 'Video flores',
        	colorTrigger: 'green',
        	colorStart: 'red'
        })*/
        .addTo(controller);



    // Video --------------------
    var tlFlores = new TimelineLite({});
    tlFlores.to(".f001", 1, { autoAlpha: 1, left: '0%' }, "-=.9")
    tlFlores.to(".f002", 1, { autoAlpha: 1, right: '0%' }, "-=.9")

    var ourScene = new ScrollMagic.Scene({
            triggerElement: ".video",
            triggerHook: 0.4,
            /*reverse: false,*/
        })
        .setTween(tlFlores)
        /*.addIndicators({
        	name: 'Video flores',
        	colorTrigger: 'green',
        	colorStart: 'red'
        })*/
        .addTo(controller);







});