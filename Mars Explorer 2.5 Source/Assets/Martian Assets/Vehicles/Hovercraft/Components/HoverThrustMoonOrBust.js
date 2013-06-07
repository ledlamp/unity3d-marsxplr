var vehicle : Vehicle;
var particleRenderer : ParticleRenderer;

function Start() {
	vehicle = gameObject.transform.root.gameObject.GetComponentInChildren(Vehicle);
	particleRenderer = gameObject.GetComponent("ParticleRenderer");
}

function FixedUpdate () {
	
	particleEmitter.localVelocity.x = (vehicle.input.y == 0 ? 2 : 5) * vehicle.input.x;
	particleEmitter.localVelocity.z = Mathf.Min(-10 * vehicle.input.y, -.5);
	
	if(particleEmitter.localVelocity.z >= -1) {
		particleRenderer.particleRenderMode = ParticleRenderMode.Billboard;
	}
	else {
		particleRenderer.particleRenderMode = ParticleRenderMode.Stretch;
	}
	
	/*
	if (vehicle.input.y > 0) {
		particleEmitter.localVelocity.z = -10 * vehicle.input.y;
		particleEmitter.useWorldSpace = true;
	}
	else {
		particleEmitter.localVelocity.z = 0;
		particleEmitter.useWorldSpace = false;
	}
	*/
}