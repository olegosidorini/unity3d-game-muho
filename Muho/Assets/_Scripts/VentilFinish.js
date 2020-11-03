#pragma strict

#pragma strict

var menuItems : GUITexture[];
var resultItems : GUITexture[];
var circules : int;

private var finishers : String[] = new String[9];
private var count : int = 0;
private var resultMUHO : int = 0;


function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {  	
	var finisher = other.transform.name;
	finishers[count]=finisher;
	count++;
	if(finisher == "MUHO"){
		StopGame();
	}
 }
 
function OnGUI()
{
var i:int = 1;
GUI.Label( Rect( Screen.width-100,Screen.height-220, 200, 20 ), "Finish");
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