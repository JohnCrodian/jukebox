function MusicPlayer (songList) {
	this.songList = []
	this.addSongList = function (newSongList) {
		this.songList.push(newSongList);
	}
	this.loadSong = function (firstSong) {
		var audioElement = document.createElement('audio');
		audioElement.setAttribute("controls", "controls");
		audioElement.setAttribute('src', this.songList[3]);
		document.body.appendChild(audioElement);
		audioElement.play();
	}
	
	// this.playFirst = function (song) {
	// 	var playSong = document.getElementsByTagName("audio")[0];
	// 	playSong.play();
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