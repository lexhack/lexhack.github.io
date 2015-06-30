var taglines = [
	"Hack 'n' [Snack.]",
	"Hack while listening to your favorite [Track.]",
	"Hack while sitting on a beanbag [Sack.]",
	"Hack but don't [Slack.]",
	"Hack up some Green[backs.]",
	"Hack on PC, Linux, or [Mac.]",
];


//http://youmightnotneedjquery.com/#fade_in
function fadeIn(el) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 600;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };

  tick();
}


prevTaglineIndex = -1;
function newTagline(){
	do{var newTaglineIndex = Math.floor(Math.random() * taglines.length);}while(newTaglineIndex == prevTaglineIndex);
	var tagline = taglines[prevTaglineIndex = newTaglineIndex];
	var formatted = tagline.replace("[","<span class='yellow'>").replace("]","</span>");
	document.getElementsByClassName("tagline")[0].innerHTML = formatted;
}


window.onload = function() {
	newTagline();
	setInterval(function(){
		fadeIn(document.getElementsByClassName("tagline")[0]);
		newTagline();
	},8000);
}
