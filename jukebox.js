var audioElement = document.getElementById("songPlayer");


function MusicPlayer (songList) {
	this.songList = []
	this.addSongList = function (newSongList) {
		this.songList.push(newSongList);
	}

	this.fall = document.getElementById("fall").addEventListener("click", function() {
	audioElement.innerHTML = "<audio id='playBar' src='FallOnMe.mp3' controls autoPlay=true></audio>";
	document.getElementById("nowPlaying").innerHTML = "Now Playing: Fall on Me by R.E.M.";
		})
	this.gardening = document.getElementById("gardening").addEventListener("click", function() {
		audioElement.innerHTML = "<audio id='playBar' src='GardeningAtNight.mp3' controls autoPlay=true></audio>";
		document.getElementById("nowPlaying").innerHTML = "Now Playing: Gardening at Night by R.E.M.";
		})
	this.girlfriend = document.getElementById("girlfriend").addEventListener("click", function() {
		audioElement.innerHTML = "<audio id='playBar' src='GirlfriendInAComa.mp3' controls autoPlay=true></audio>";
		document.getElementById("nowPlaying").innerHTML = "Now Playing: Girlfriend in a Coma by the Smiths";
		})
	this.nightswimming = document.getElementById("nightswimming").addEventListener("click", function() {
		audioElement.innerHTML = "<audio id='playBar' src='NightSwimming.mp3' controls autoPlay=true></audio>";
		document.getElementById("nowPlaying").innerHTML = "Now Playing: Nightswimming by R.E.M.";
		})
	this.nightswimming = document.getElementById("panic").addEventListener("click", function() {
		audioElement.innerHTML = "<audio id='playBar' src='Panic.mp3' controls autoPlay=true></audio>";
		document.getElementById("nowPlaying").innerHTML = "Now Playing: Panic by the Smiths";
	})
	this.playSong = document.getElementById("current").addEventListener("click", function () {
		document.getElementById("playBar").play()
	})
	this.pauseSong = document.getElementById("pause").addEventListener("click", function () {
		document.getElementById("playBar").pause()
	})

}

	// this.loadSong = function (firstSong) {
	// 	var audioElement = document.createElement('audio');
	// 	audioElement.setAttribute("controls", "controls");
	// 	audioElement.setAttribute('src', this.songList[0]);
	// 	document.body.appendChild(audioElement);
	// 	audioElement.autoPlay = true;
	// 	audioElement.play();
	// 	window.addEventListener("load", this.loadSong);
	// }

// 			document.getElementById("current").addEventListener("click", function() {
// 			audioElement.innerHTML = "<audio id='playBar' src='FallOnMe.mp3' controls></audio>";
// }
// )
	


var jukeBox = new MusicPlayer ();


var fallOnMe = "FallOnMe.mp3";
var gardeningAtNight = "GardeningAtNight.mp3"; 
var girlfriendInAComa = "GirlfriendInAComa.mp3"; 
var nightSwimming = "NightSwimming.mp3";
var panic = "Panic.mp3";

jukeBox.addSongList(fallOnMe);
jukeBox.addSongList(gardeningAtNight);
jukeBox.addSongList(girlfriendInAComa);
jukeBox.addSongList(nightSwimming);
jukeBox.addSongList(panic);