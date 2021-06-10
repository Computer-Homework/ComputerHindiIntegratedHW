var camera, scene, renderer, controls, cube, controls;

init();

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    renderer.shadowMap.enabled = true;
    // renderer.shadowMap.width = 1000;
    // renderer.shadowMap.height = 1000;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
    cube = new THREE.Mesh( geometry, material );
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add( cube );

    const geometry3 = new THREE.BoxGeometry();
    const material3 = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
    cube3 = new THREE.Mesh( geometry3, material3 );
    cube3.castShadow = true;
    cube3.receiveShadow = true;
    scene.add( cube3 );
    cube3.position.set(0, 0, 1.6)

    const geometry2 = new THREE.BoxGeometry(10, 0.5, 10);
    const material2 = new THREE.MeshStandardMaterial( { color: "white" } );
    cube2 = new THREE.Mesh( geometry2, material2 );
    cube2.receiveShadow = true;
    cube2.castShadow = true;
    scene.add( cube2 );

    cube2.position.y = -0.75;

    const light = new THREE.PointLight(0xffffff, 1);
    scene.add(light);
    light.castShadow = true;
    light.position.set(0, 3, -5);

    const amb = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(amb);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    camera.position.z = 5;
}



const animate = function () {
	requestAnimationFrame( animate );

	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();
