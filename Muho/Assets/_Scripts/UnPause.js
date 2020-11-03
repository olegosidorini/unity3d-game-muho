#pragma strict
var menuItems : GUITexture[];


function Start () {

}

function Update () {
	if ( Input.touchCount > 0 )
	{
		for(var i : int = 0; i< Input.touchCount;i++)
		{
			var touch : Touch = Input.GetTouch(i);
			if(touch.phase == TouchPhase.Began && guiTexture.HitTest(touch.position))
			{
				UnPauseGame();
			}			
		}
	}
}

function UnPauseGame() {
	for (var menuItem in menuItems) {
        menuItem.enabled = false;
	}
	Time.timeScale = 1;	
	AudioListener.pause = false;
}