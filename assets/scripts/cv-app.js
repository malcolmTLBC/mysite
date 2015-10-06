var tmax_optionsGlobal = {
  repeat: 0,
  repeatDelay: 0.65,
  yoyo: false
};

CSSPlugin.useSVGTransformAttr = true;

var tl = new TimelineMax(tmax_optionsGlobal),
    path = '#head *, #menu *, #heading *, #link *',
    stagger_val = 0.002,
    duration = 2;

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(-50, 50 ),
    y: '+=' + getRandom(-0, 0 ),
    rotation: '+=' + getRandom(-300, 300),
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

tl.set($('.content-style'), {
  opacity: 0,
  scale: 0.9
});

tl.staggerTo('#head *', duration, stagger_opts_to, stagger_val);
tl.staggerTo('.content-style', 5, {opacity: 1, scale: 1, ease: Power4.easeOut}, .5, .5);
tl.staggerTo('#heading *', 3, stagger_opts_to, 0.04, 0);
tl.staggerTo('#menu *', duration, stagger_opts_to, stagger_val, 3.5);

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}