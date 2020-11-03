var deltaY : float = 0.4;


var turnSpeed : float = 10.0;
var maxTurnLean : float = 50.0;
var maxTilt : float = 50.0;

var sensitivity : float = 10.0;

var forwardForce : float = 1.0;
var guiSpeedElement : Transform;
var bumFXdefault: AudioClip;
var bumFXbarel: AudioClip;
var bumFXpautina: AudioClip;

var bumHealth : float = 0.1;
var minHealth : float = 0.1;

private var normalizedSpeed : float = 0.2;
private var euler : Vector3 = Vector3.zero;

var horizontalOrientation : boolean = true;

private var maxHealth : float = 1;
private var curHealth : float = 1;

function Awake () {
	if (horizontalOrientation)
	{
		iPhoneSettings.screenOrientation =
			iPhoneScreenOrientation.LandscapeLeft;
	}
	else
	{
		iPhoneSettings.screenOrientation =
			iPhoneScreenOrientation.Portrait;
	}

	guiSpeedElement.position = new Vector3 (0, normalizedSpeed, 0);
}

function Update () {
	for (var evt : Touch in Input.touches)
	{
		if (evt.phase == TouchPhase.Moved)
		{
			normalizedSpeed = evt.position.y / Screen.height;
			guiSpeedElement.position = new Vector3 (0, normalizedSpeed, 0);
		}
	}
}


function FixedUpdate () {
	rigidbody.AddRelativeForce(0, 0, normalizedSpeed * forwardForce * curHealth);
	
	var accelerator : Vector3 = Input.acceleration;

	if (horizontalOrientation)
	{
		var t : float = accelerator.x;
		accelerator.x = -accelerator.y;
		accelerator.y = t;
	}
	accelerator.y += deltaY;
	
	// Rotate turn based on acceleration		
	euler.y += accelerator.x * turnSpeed;
	// Since we set absolute lean position, do some extra smoothing on it
	euler.z = Mathf.Lerp(euler.z, -accelerator.x * maxTurnLean, 0.2);

	// Since we set absolute lean position, do some extra smoothing on it
	euler.x = Mathf.Lerp(euler.x, accelerator.y * maxTilt, 0.2);
	
	// Apply rotation and apply some smoothing
	var rot : Quaternion = Quaternion.Euler(euler);
	transform.rotation = Quaternion.Lerp (transform.rotation, rot, sensitivity);

}

function OnCollisionEnter(collision:Collision){
if (collision.transform.name != "barrel" && collision.transform.name != "pautina") {
		audio.PlayOneShot(bumFXdefault);
	}
	else{
		if (collision.transform.name != "barrel") {
			audio.PlayOneShot(bumFXbarel);
		}
		else{
			audio.PlayOneShot(bumFXpautina);
		}
	}
	curHealth -= bumHealth;
	if (curHealth < minHealth){
		curHealth = minHealth;
//		bumHealth = minHealth/10;
//		minHealth = bumHealth;		
	}
}	
function OnGUI()
{

GUI.Label( Rect( 36, Screen.height-normalizedSpeed*Screen.height, 20, 20 ), String.Format( "{0:0}",  normalizedSpeed*100));
GUI.Box(new Rect(Screen.width/4,10,Screen.width/2/(maxHealth/curHealth),8),"");
}