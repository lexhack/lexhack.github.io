var taglines = [
	"Hack while listening to your favorite Track.",
	"Hack then have a Snack.",
	"Hack while sitting on a beanbag Sack.",
	"Hack but don't Slack.",
];

console.log('exists');

window.onload = function() {
	console.log("loaded");
	var tagline = taglines[Math.floor(Math.random() * taglines.length)];
	var words = tagline.split(" ");
	document.getElementById("tagline-first").innerHTML = words.slice(0, words.length-1).join(" ")+ " ";
	document.getElementById("tagline-second").innerHTML = words[words.length-1];
}