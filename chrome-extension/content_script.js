console.log('init hehe');
window.onload = function() {
	console.log("window.onload");
	var player = document.getElementById('vstPlayer');
	var url = player.getAttribute("src");
	console.log(url);
	window.open(url);
	window.history.go(-1);
}