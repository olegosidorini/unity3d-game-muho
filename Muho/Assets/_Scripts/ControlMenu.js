var background : Texture2D;			// A background to show to cover loading the control setup levels
var nameSceneOnLoad : String;
private var displayBackground = false;  // Toggle for background display

function Start()
{
	// Make sure these are disabled initially
//	launchIntro.SetActiveRecursively( false );
//	orbEmitter.renderer.enabled = false;	

}

function Update () 
{	
	if ( Input.touchCount > 0 )
	{
		for(var i : int = 0; i< Input.touchCount;i++)
		{
			var touch : Touch = Input.GetTouch(i);
			if(touch.phase == TouchPhase.Began && guiTexture.HitTest(touch.position))
			{
				//guiTexture.enabled = false;
				displayBackground = true;
				Application.LoadLevel(nameSceneOnLoad );
				
			}			
		}
	}
}
function OnGUI () 
{

	if ( displayBackground )
		GUI.DrawTexture( Rect( 0, 0, Screen.width, Screen.height ), background, ScaleMode.StretchToFill, false );	
}