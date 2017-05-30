window.addEventListener("load", function() {
    new Game();
	var audio = new Audio();
	audio.autoplay = true;
	audio.loop = true;
	audio.src = audio.canPlayType('audio/mp3') ? 'media/chickenonaraft.mp3' : 'media/chickenonaraft.ogg';
});