
var tmax_optionsGlobal = {
  repeat: 0,
  repeatDelay: 0.65,
  yoyo: false
};

CSSPlugin.useSVGTransformAttr = true;

var tl = new TimelineMax(tmax_optionsGlobal),
    path = '#name *, #menu *, #title *, #link *',
    stagger_val = 0.002,
    duration = 3;

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(-20, 20 ),
    y: '+=' + getRandom(-20, 20 ),
    rotation: '+=' + getRandom(-400, 400),
    scale: 1,
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

tl.staggerTo(path, duration, stagger_opts_to, stagger_val);

// var $svg = $('svg');
// $svg.hover(
//   function() {
//     tl.timeScale(0.25);
//   },
//   function() {
//     tl.timeScale(1);
//   });

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}