var audioElement = document.getElementById("songPlayer");


function MusicPlayer (songList) {
	this.songList = []
	this.addSongList = function (newSongList) {
		this.songList.push(newSongList);
		document.getElementById("current").addEventListener("click", function() {
			audioElement.innerHTML = "<audio src='FallOnMe.mp3' controls></audio>";
		}
		)
		document.getElementById("current").addEventListener("click", function() {
			audioElement.play();
		}
		)

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
	
}



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