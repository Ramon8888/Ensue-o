$(document).ready(function() {
    console.log('document.ready');
    init();
	//Init scrollMagic
    var controller = new ScrollMagic.Controller();


    // PANTALLA CTA --------------------
    /*var ourScene = new ScrollMagic.Scene({
        triggerElement: '.ini',
        triggerHook: 0.4
    })
    .setClassToggle('.svgssss', 'hola')
    .addIndicators({
        name: 'Sec Video',
        colorTrigger: 'Video',
        colorStart: '#75C695'
    }) 
    .addTo(controller);
*/


    // CTA VIDEO --------------------
    
    var tlCTA = new TimelineLite({});
        tlCTA.to(".line01", 1, {strokeDashoffset: 0});
        tlCTA.to(".line02", 1, {strokeDashoffset: 0});

    var ourScene = new ScrollMagic.Scene({ triggerElement: ".p001", triggerHook: 0.5, reverse: false })  
    .setTween(tlCTA)
    /*.addIndicators({})*/
    .addTo(controller);

    var tlCTA = new TimelineLite({});
        tlCTA.to(".line03", 1, {strokeDashoffset: 0});
        tlCTA.to(".line04", 1, {strokeDashoffset: 0});

    var ourScene = new ScrollMagic.Scene({ triggerElement: ".p002", triggerHook: 0.5, reverse: false })  
    .setTween(tlCTA)
    /*.addIndicators({})*/
    .addTo(controller);

    var tlCTA = new TimelineLite({});
        tlCTA.to(".line05", 1, {strokeDashoffset: 0});
        tlCTA.to(".line06", 1, {strokeDashoffset: 0});

    var ourScene = new ScrollMagic.Scene({ triggerElement: ".p003", triggerHook: 0.5, reverse: false })  
    .setTween(tlCTA)
    /*.addIndicators({})*/
    .addTo(controller);

    var tlCTA = new TimelineLite({});
        tlCTA.to(".line07", 1, {strokeDashoffset: 0});
        tlCTA.to(".line08", 1, {strokeDashoffset: 0});

    var ourScene = new ScrollMagic.Scene({ triggerElement: ".p004", triggerHook: 0.5, reverse: false })  
    .setTween(tlCTA)
    /*.addIndicators({})*/
    .addTo(controller);

    var tlCTA = new TimelineLite({});
        tlCTA.to(".line09", 1, {strokeDashoffset: 0});

    var ourScene = new ScrollMagic.Scene({ triggerElement: ".p005", triggerHook: 0.5, reverse: false })  
    .setTween(tlCTA)
    /*.addIndicators({})*/
    .addTo(controller);


    $('.number').each(function(){
    var ourScene = new ScrollMagic.Scene({ triggerElement: this, triggerHook: 0.5, reverse: false
    })
    .setClassToggle(this, 'act') // add class to project01
    /*.addIndicators({})*/
    .addTo(controller);
    })

    $('.txtLine').each(function(){
    var ourScene = new ScrollMagic.Scene({ triggerElement: this, triggerHook: 0.55, reverse: false
    })
    .setClassToggle(this, 'act') // add class to project01
    /*.addIndicators({})*/
    .addTo(controller);
    })

});

function init() {
    console.log('Init');
    contentFillInit();
    headerInit();
}

function contentFillInit() {
    console.log('contentFillInit');
    $(window).load(function() {
        contentFillResize();
        console.log('load.contentFillResize');
    });
    $(window).resize(function() {
        contentFillResize();
        console.log('resize.contentFillResize');
    });
}

function headerInit() {

}

function contentFillResize() {
    console.log('contentFillResize');
    /*$(".content-fill").each(function() {
        var t = $(this).parent(),
            n = $(this),
            i = t.width() / n.attr("data-width"),
            e = Math.round(n.attr("data-height") * i),
            a = t.height() / n.attr("data-height"),
            o = Math.round(n.attr("data-width") * a);
        o > t.width() ? (n.width(o), n.height(t.height()), n.css("left", -1 * Math.round((o - t.width()) / 2)), n.css("top", 0)) : (n.height(e), n.width(t.width()), n.css("left", 0), n.css("top", -1 * Math.round((e - t.height()) / 2)))
    })*/
}