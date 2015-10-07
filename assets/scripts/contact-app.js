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
    path = '#head *, #menu *,#contact *, #link *',
    stagger_val = 0.002,
    duration = 2;

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(-40, 40 ),
    y: '+=' + getRandom(-40, 40 ),
    rotation: '+=' + getRandom(-350, 350),
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

tl.staggerTo('#wrapper', .1, {opacity:1, ease: Power4.easeIn}, 0.0001);
tl.staggerTo('#head *', duration, stagger_opts_to, stagger_val);
tl.staggerTo('#contact *', 2, stagger_opts_to, 0.001, 1);
tl.staggerTo('#menu *', duration, stagger_opts_to, stagger_val, 3.5);

// $("#link *").hover(
//   function() {
//     tl.staggerTo('#link *', duration, reverse_stagger_opts, stagger_val);
// });

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}