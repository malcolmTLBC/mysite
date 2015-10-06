var tmax_optionsGlobal = {
  repeat: 0,
  repeatDelay: 0.65,
  yoyo: false
};

CSSPlugin.useSVGTransformAttr = true;

var tl = new TimelineMax(tmax_optionsGlobal),
    path = '#name *, #menu *, #title *, #link *',
    stagger_val = 0.002,
    duration = 2;

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(-4, 4 ),
    y: '+=' + getRandom(-4, 4 ),
    rotation: '+=' + getRandom(-320, 320),
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

tl.staggerTo('#wrapper', 1, {opacity:1}, 0.12);
tl.staggerTo('#name *', duration, stagger_opts_to, stagger_val);
tl.staggerTo('#title *', duration, stagger_opts_to, stagger_val, 0.5);
tl.staggerTo('#link *', 0.5, stagger_opts_to, 0.0015, 1);
tl.staggerTo('#menu *', duration, stagger_opts_to, stagger_val, 3.5);

// $("#link *").hover(
//   function() {
//     tl.staggerTo('#link *', duration, reverse_stagger_opts, stagger_val);
// });

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}