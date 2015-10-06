var tmax_optionsGlobal = {
  // repeat: 0,
  // repeatDelay: 0.65,
  // yoyo: false
};

CSSPlugin.useSVGTransformAttr = true;

var tl = new TimelineMax(tmax_optionsGlobal),
    path = '#head *, #menu *',
    stagger_val = 0.002,
    duration = 2;

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(-20, 20 ),
    y: '+=' + getRandom(-20, 20 ),
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

tl.set($('.content-style'), {
  opacity: 0,
  scale: 0.9
});

tl.staggerTo('#head *', duration, stagger_opts_to, stagger_val);
tl.staggerTo('.content-style', 5, {opacity: 1, scale: 1, ease: Power4.easeOut}, .5, .5);
tl.staggerTo('#menu *', duration, stagger_opts_to, stagger_val, 2.8);

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}