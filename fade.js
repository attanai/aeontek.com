
function fadeIn(el, time)
{
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };

  tick();
}
function FrontPageLoad()
{
	fadeIn(LogoArea, 1500);
	fadeIn(TextArea, 4000);
	
}

