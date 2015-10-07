$(".menu-button").click(function() {
    $("#wrapper").toggleClass("toggled");
});


var tmax_optionsGlobal = {
  repeat: 0,
  repeatDelay: 0.65,
  yoyo: false
};

CSSPlugin.useSVGTransformAttr = true;

var tl = new TimelineMax(tmax_optionsGlobal),
    path = '#head *, #menu *,#face *, #about *',
    stagger_val = 0.002,
    duration = 2;

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(-1000, 1000 ),
    y: '+=' + getRandom(-1000, 1000 ),
    rotation: '+=' + getRandom(-720, 720),
    scale: 0,
    opacity: 0
  });
});

var stagger_opts_to = {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  rotation: 0,
  ease: Power4.easeOut
};

var reverse_stagger_opts = {
  x: '+=' + getRandom(-20, 20 ),
  y: '+=' + getRandom(-20, 20 ),
  rotation: '+=' + getRandom(-720, 720),
  scale: 1,
  ease: Power4.easeOut
};

tl.staggerTo('#wrapper', 1, {opacity:1, ease: Power4.easeIn}, 0.1);
tl.staggerTo('#head *', duration, stagger_opts_to, stagger_val);
tl.staggerTo('#face *', 4.5, stagger_opts_to, 0.01, 0.1);
tl.staggerTo('#about *', 1, stagger_opts_to, 0.01, 0.1);
tl.staggerTo('#menu *', duration, stagger_opts_to, stagger_val, 8);

// $("#link *").hover(
//   function() {
//     tl.staggerTo('#link *', duration, reverse_stagger_opts, stagger_val);
// });

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}