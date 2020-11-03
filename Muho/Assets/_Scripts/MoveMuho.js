var sensitivity : float = 10.0;
var targetPoint:Transform;
private var euler : Vector3 = Vector3.zero;
var forwardForce : float = 1.0;
var lowSpeed : float = 20.0;
var hiSpeed : float = 80.0;
var maxDistance : float = 10.0;



function FixedUpdate () {
var deltaSpeed : float;
transform.LookAt(targetPoint);

//speed
var dist = Vector3.Distance(targetPoint.position, transform.position);
if( dist < maxDistance){
	deltaSpeed = lowSpeed;
}else{
	deltaSpeed = hiSpeed;
} 
rigidbody.AddRelativeForce(0, 0, deltaSpeed * forwardForce);
}

function Update () {
Debug.DrawLine(transform.position, targetPoint.position, Color.yellow);
}

function OnGUI()
{

//GUI.Label( Rect( 100, 530, 200, 20 ), String.Format( "rigidbody.velocity.x:{0:0.0000}",  rigidbody.velocity.x));
//GUI.Label( Rect( 100, 550, 200, 20 ), String.Format( "rigidbody.velocity.y:{0:0.0000}",  rigidbody.velocity.y));
//GUI.Label( Rect( 100, 570, 200, 20 ), String.Format( "rigidbody.velocity.z:{0:0.0000}",  rigidbody.velocity.z));
}

function ChangeTargetPoint (tp : Transform){
 targetPoint = tp;
}