#pragma strict

var menuItems : GUITexture[];
var resultItems : GUITexture[];
var circules : int;

private var finishers : String[] = new String[9];
private var krug : int = 1;
private var count : int = 0;
private var countMUHO : int = 0;
private var resultMUHO : int = 0;
function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {  	
	var finisher = other.transform.name;
	var repeat = false;
	if(finisher == "MUHO"){
		countMUHO++;
//		resultMUHO = count;
	}
	for (var val in finishers) {
    	if(val == finisher){
    		repeat = true;
    	}    
	}
	if (repeat){
		krug++;
		count = 0;
		finishers = new String[9];
	}
	if(finisher == "MUHO" && countMUHO < krug){
		finishers[8]=finisher;
//		resultMUHO = 8;
	}else{
		finishers[count]=finisher;
	}
	count++;
	if(countMUHO == circules){
		StopGame();
	}
 }
 
function OnGUI()
{
var i:int = 1;
GUI.Label( Rect( Screen.width-100,Screen.height-220, 200, 20 ), String.Format( "Circuit: {0:0}",  krug));
for (var finisher in finishers) {
        GUI.Label( Rect( Screen.width-100,Screen.height-(210-(20*i)), 100, 20 ),String.Format( "{0:0}: ",  i) + finisher);
        i++;
}

//GUI.Label( Rect( 100, 550, 200, 20 ), String.Format( "countMUHO:{0:0}",  countMUHO));
//GUI.Label( Rect( 100, 570, 200, 20 ), String.Format( "res:{0:0}", resultMUHO));
}

function StopGame() {

	for (var menuItem in menuItems) {
        menuItem.enabled = true;
	}
	var i:int = 0;
	for (var val in finishers) {
    	if(val == "MUHO"){
    		resultMUHO=i;
    	}  
    	 i++;  
	}
	resultItems[resultMUHO].enabled = true;
	Time.timeScale = 0;		
	
//	AudioListener.pause = true;
}