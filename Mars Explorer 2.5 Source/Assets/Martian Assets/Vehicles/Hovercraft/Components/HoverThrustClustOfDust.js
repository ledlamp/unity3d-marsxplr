var thrustMask : LayerMask = -1;

function FixedUpdate () {
	if (transform.position.y < Game.Settings.lavaAlt + 15 || Physics.Raycast (transform.position, Vector3.down, 15, thrustMask)) particleEmitter.emit = true;
	else particleEmitter.emit = false;
}