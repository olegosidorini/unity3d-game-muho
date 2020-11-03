#pragma strict

var guiB : GUITexture[];
private var countDown : int;
private var curGuiB : GUITexture;
//var countFX: AudioClip[];
var alarmFX : AudioClip;

function Start () {
countDown = 0;
curGuiB = guiB[0];
PauseGame();
//audio.PlayOneShot(countFX[countDown]);
audio.PlayOneShot(alarmFX);
Invoke("Countdown", 0.01);
}

function Update () {

}

function Countdown () {
	
	curGuiB.enabled=false;
	countDown++;
	audio.PlayOneShot(alarmFX);
	if(countDown < guiB.length){
//		audio.PlayOneShot(countFX[countDown]);
		
		curGuiB = guiB[countDown];
		curGuiB.enabled=true;
		Invoke("Countdown", 0.01);	
	}
	else{
//		audio.PlayOneShot(countFX[countDown]);
		UnPauseGame();
	}
}

function PauseGame() {
	Time.timeScale = 0.01;
	curGuiB.enabled = true;
	
}
 
function UnPauseGame() {
	Time.timeScale = 1;
 	curGuiB.enabled=false;
}