import * as THREE from 'three';

// 1. Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");

// 2. Create the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight, // Correct innerHeight
  0.1,
  1000
);
camera.position.z = 5; // Move camera back to see the cube

// 3. Create and add a cube object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ 
  color: '#468585', 
  emissive: '#468585' 
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4. Add lighting
const light = new THREE.DirectionalLight(0x9CDBA6, 1); // Adjusted intensity to 1
light.position.set(1, 1, 1); // Fixed 'position'
scene.add(light);

// 5. Set up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Fixed 'innerHeight'
document.body.appendChild(renderer.domElement); // Fixed 'appendChild'

// 6. Animate the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render scene with camera
  renderer.render(scene, camera);
}

animate();
