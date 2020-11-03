#pragma strict
var targetPoints:Transform[];
private var targetPoint:Transform;


function Start () {
targetPoint = targetPoints[0];
}

function Update () {
Debug.DrawLine(transform.position, targetPoint.position, Color.red);
}

function OnTriggerEnter (other : Collider) {   
 	targetPoint = targetPoints[Random.Range(0, targetPoints.length)];
	other.transform.SendMessage("ChangeTargetPoint",targetPoint);
  
 }
