import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as SkeletonUtils from "../externalFiles/skeletoning";
import cringey from "../images/cringey.jpg"

const Scene5 = () => {


  
  //USEeFFECT
  useEffect(() => {

  let camera, scene, renderer,modelling;

    //SCENE SET
    camera = new THREE.PerspectiveCamera(
      49,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 3, -6);
    // camera.position.set(2, 3, -6);
    camera.lookAt(0, 1, 0);

    scene = new THREE.Scene();

    //hemisphereLight::SPACE FOR OBJ
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    hemiLight.position.set(50, 50, 50);
    scene.add(hemiLight);

    //BRIGHTNESS
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(0, 3, -6);
    scene.add(directionalLight);

    //GROUND
    
      var planeGeometry=new THREE.PlaneGeometry(5, 5,5,5)
    

      var texture=new THREE.TextureLoader().load(cringey)
      
      scene.background=texture;

    var planeMeterial=new THREE.MeshLambertMaterial({map:texture})

    var plane=new THREE.Mesh(planeGeometry,planeMeterial)
    plane.receiveShadow=true;

    plane.rotation.x=-0.5*Math.PI;
    plane.position.set(0,0,0)

    scene.add(plane);




    //RENDERING
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio)


    //
    const convertingObj= new URL("../Soldier.glb",import.meta.url);

    //OBJ MODEL https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/Soldier.glb
    const loader = new GLTFLoader();
    loader.load(
      convertingObj.href,
      function (gltf) {
         modelling = SkeletonUtils.clone(gltf.scene);

        modelling.position.x = 0;
        modelling.position.z = 1;
        // modelling.rotation.y=10;


        modelling.scale.set(1.4,1.4,1.4)

        
        modelling.traverse( function ( child ) {

          if ( child.isMesh ) child.material.map = new THREE.TextureLoader().load(cringey);

        } );
                  
        scene.add(modelling);


        animate();
        
      }
    );

     
    



    if (document.getElementById("rooting5").children[0]) {
      document
        .getElementById("rooting5")
        .removeChild(document.getElementById("rooting5").children[0]);
    }

    if (document.getElementById("rooting5").children[0] == undefined) {

      document.getElementById("rooting5").appendChild(renderer.domElement);
  }


  //ANIMATE
  function animate() {
    requestAnimationFrame(animate);

      modelling.rotation.y+=0.01;

      modelling.position.y-=0.001;

    renderer.render(scene, camera);

  }
});


  return <div id="rooting5"></div>;
};
export default Scene5;


  // // instantiate a loader
  // var loadering = new THREE.TextureLoader();

  // // load a resource
  // loadering.load(
  //     // resource URL
  //     'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
  //     // Function when resource is loaded
  //     function ( texture ) {
  //         // do something with the texture
  //         var material = new THREE.MeshBasicMaterial( {
  //             map: texture
  //          } );
  //     },
  //     // Function called when download progresses
  //     function ( xhr ) {
  //         console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
  //         console.log('ok');
  //     },
  //     // Function called when download errors
  //     function ( xhr ) {
  //         console.log( 'An error happened' );
  //     }
  // );


    // const mesh = new THREE.Mesh(
    //   new THREE.PlaneGeometry(1, 1),
    //   new THREE.MeshPhongMaterial({ color: "white" })
    // );
    // mesh.rotation.x = -Math.PI / 2;
    // scene.add(mesh);



// import { GLTFLoader } from './asdf2.js';
// import * as SkeletonUtils from './asdfjkl.js';

// const Scene5=()=>{

//     let camera, scene, renderer;
//     // let clock;

//     const mixers = [];



//     init();
//     animate();

//     function init() {

//         camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
//         camera.position.set( 2, 3, - 6 );
//         camera.lookAt( 0, 1, 0 );

// clock = new THREE.Clock();

//         scene = new THREE.Scene();
//         // scene.background = new THREE.Color( 0xa0a0a0 );
//         // scene.fog = new THREE.Fog( 0xa0a0a0, 10, 50 );

//         const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 ,1);
//         hemiLight.position.set( 50,50,50 );
//         scene.add( hemiLight );

//         // const dirLight = new THREE.DirectionalLight( 0xffffff );
//         // dirLight.position.set( - 3, 10, - 10 );
//         // dirLight.castShadow = true;
//         // dirLight.shadow.camera.top = 4;
//         // dirLight.shadow.camera.bottom = - 4;
//         // dirLight.shadow.camera.left = - 4;
//         // dirLight.shadow.camera.right = 4;
//         // dirLight.shadow.camera.near = 0.1;
//         // dirLight.shadow.camera.far = 40;
//         // scene.add( dirLight );

//         // scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );

//         // ground

//         const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 200, 200 ), new THREE.MeshPhongMaterial( { color: "white", depthWrite: false } ) );
//         mesh.rotation.x = - Math.PI / 2;
//         mesh.receiveShadow = true;
//         scene.add( mesh );

//         const loader = new GLTFLoader();
//         loader.load( 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/Soldier.glb', function ( gltf ) {

//             // gltf.scene.traverse( function ( object ) {

//             //     if ( object.isMesh ) object.castShadow = true;

//             // } );

//             const model1 = SkeletonUtils.clone( gltf.scene );

//             model1.traverse( ( object ) => {        //traverse will be called on children of each child. Basically it traverses all the descendants of a any given three js object in Depth First Traversal manner

//                 if ( object.isMesh ) {
//                     object.material.color.set( 0xffffff * Math.random() );

//                 }

//             } );

//             console.log(model1.querySelectorAll);
//             // const model2 = SkeletonUtils.clone( gltf.scene );
//             // const model3 = SkeletonUtils.clone( gltf.scene );

//             // const mixer1 = new THREE.AnimationMixer( model1 );
//             // const mixer2 = new THREE.AnimationMixer( model2 );
//             // const mixer3 = new THREE.AnimationMixer( model3 );

//             // mixer1.clipAction( gltf.animations[ 0 ] ).play(); // idle
//             // mixer2.clipAction( gltf.animations[ 1 ] ).play(); // run
//             // mixer3.clipAction( gltf.animations[ 3 ] ).play(); // walk

//             model1.position.x = 0;
//             // model2.position.x = 0;
//             // model3.position.x = 2;

//             scene.add( model1 );
//             // mixers.push( mixer1 );

//             animate();

//         } );

//         renderer = new THREE.WebGLRenderer( { antialias: true } );
//         renderer.setPixelRatio( window.devicePixelRatio );
//         renderer.setSize( window.innerWidth, window.innerHeight );
//         // renderer.outputEncoding = THREE.sRGBEncoding;
//         // renderer.shadowMap.enabled = true;
//         // document.body.appendChild( renderer.domElement );

//         // window.addEventListener( 'resize', onWindowResize );

//     }
// useEffect(()=>{
// console.log(document.getElementById('rooting').children.length);
//     if(document.getElementById('rooting').children[0]){
//         document.getElementById('rooting').removeChild(document.getElementById('rooting').children[0])

//     }

//     if(document.getElementById('rooting').children[0]==undefined){
//         document.getElementById('rooting').appendChild( renderer.domElement );

//     }

// })
//     // function onWindowResize() {

//     //     camera.aspect = window.innerWidth / window.innerHeight;
//     //     camera.updateProjectionMatrix();

//     //     renderer.setSize( window.innerWidth, window.innerHeight );

//     // }

//     function animate() {

//         requestAnimationFrame( animate );

//         // const delta = clock.getDelta();

//         // for ( const mixer of mixers ) mixer.update( delta );

//         renderer.render( scene, camera );

//     }

//             return(
//                 <div id='rooting'>

//                 </div>
//             )

// }
// export default Scene5;
