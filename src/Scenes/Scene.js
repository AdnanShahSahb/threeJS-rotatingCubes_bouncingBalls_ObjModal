import React, {useEffect, useRef, useState } from "react";
import * as THREE from "three";
import classes from "./Scene.module.css"

const Scenario = () => {
  const zoomRef = useRef();
  const xRef = useRef();
  const yRef = useRef();

  const [zooming, setZooming] = useState();
  const [xAxis, setxAxis] = useState();
  const [yAxis, setyAxis] = useState();

  const handleSub = (e) => {
    e.preventDefault();

    let toZoom = parseFloat(zoomRef.current.value);
    let xIn = parseFloat(xRef.current.value);
    let yIn = parseFloat(yRef.current.value);

    setZooming(toZoom);
    setxAxis(xIn);
    setyAxis(yIn);

    // console.log(xAxis,yAxis,zooming);
  };

  useEffect(() => {
                                                // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
                                                // const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
                                                // const cube = new THREE.Mesh( geometry, material );
                                                // scene.add( cube );

    // console.log(zooming);
    // console.log(xAxis);
    // console.log(yAxis);
    console.log(2);

    const camera = new THREE.PerspectiveCamera( // PerspectiveCamera to mimic the way the human eye sees
      50, // fov
      window.innerWidth / window.innerHeight, // aspect ratio
      0.1, // near
      1000 // far
    );
    camera.position.set(0,0,10)

    const geometry = new THREE.BoxGeometry(1, 1, 1); // width,height,depth       // structure
    const material = new THREE.MeshNormalMaterial(); // design

    const mesh = new THREE.Mesh(geometry, material); // combines structure nd design

    // mesh.position.x = 2;      // x coordinate
    // mesh.position.y = 0;        // y coordinate

    const scene = new THREE.Scene(); // this is where u place obj, light
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer(); // renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setAnimationLoop(animation);
    // console.log(arr.length);
    console.log(document.body.children[2] === undefined);


    if (document.body.children[2] === undefined) {
    } else {
      document.body.removeChild(document.body.children[2]);
    }

    if (document.body.children[2] === undefined) {
      document.body.appendChild(renderer.domElement);
      document.body.children[2].setAttribute("style","width:100%");


    } // arr.push(2);



    function animation(time) {
      // in loop so the obj rotates non stop
      mesh.rotation.x = time / 3000;
      mesh.rotation.y = time / 1000;

      mesh.position.z = zooming; //input
      mesh.position.x = xAxis; //input
      mesh.position.y = yAxis; //input

      renderer.render(scene, camera);
    }
  }, [zooming, xAxis, yAxis]);

  return (
    <>
      <div className={classes.bordering}>
        <form onSubmit={handleSub}>
          <label>
            Enter for x coordinate:
            <input placeholder="0" type="text" ref={xRef}></input>
          </label>
          <br />
          <label>
            Enter for y coordinate:
            <input placeholder="0" type="text" ref={yRef}></input>
          </label>
          <br />
          <label>
            Enter num to zoom in:
            <input placeholder="5" type="text" ref={zoomRef}></input>
          </label>

          <br />
          <label>
            <button>Enter</button>
            </label>
        </form>
      </div>
    </>
  );
};

export default Scenario;

/*
import React, { useCallback, useEffect, useRef, useState } from "react";
import classes from "./App2.module.css";
import * as THREE from "three";


let arr=[];

const Scenario = () => {

  const zoomRef = useRef();
  const xRef = useRef();
  const yRef = useRef();

    const [zooming,setZooming]=useState();
    const [xAxis,setxAxis]=useState();
    const [yAxis,setyAxis]=useState();

  const handleSub = (e) => {
    e.preventDefault();
    console.log(3);



    arr.push(1);

    let toZoom=parseFloat(zoomRef.current.value);
    let xIn=parseFloat(xRef.current.value);
    let yIn=parseFloat(yRef.current.value);


    setZooming(toZoom);
    setxAxis(xIn);
    setyAxis(yIn);



    // console.log(xAxis,yAxis,zooming);


  };


  useEffect(() => {
    // console.log(zooming);
    // console.log(xAxis);
    // console.log(yAxis);
    console.log(2);

    const camera = new THREE.PerspectiveCamera( // PerspectiveCamera to mimic the way the human eye sees
      50, // fov 
      window.innerWidth / window.innerHeight, // aspect ratio
      0.01, // near
      10 // far
    );
    camera.position.z = 1;  //zoomin


    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2); // width,height,depth       // structure
    const material = new THREE.MeshNormalMaterial(); // design

    const mesh = new THREE.Mesh(geometry, material); // combines structure nd design

// mesh.position.x = 2;      // x coordinate
// mesh.position.y = 0;        // y coordinate              

    const scene = new THREE.Scene(); // this is where u place obj, light
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer(); // renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);
// console.log(arr.length);
    if(arr.length>0){
      document.body.appendChild(renderer.domElement);
    }
    // arr.push(2);
    
    if(arr.length>1){
      alert('re enter')

      document.location.reload();

    }
    
    function animation(time) {
      // in loop so the obj rotates non stop
      mesh.rotation.x = time / 3000;
      mesh.rotation.y = time / 1000;

camera.position.z=zooming;  //input
mesh.position.x = xAxis;      //input
mesh.position.y = yAxis;      //input

      renderer.render(scene, camera);
    }


  },[zooming,xAxis,yAxis]);


  return (
    <>
      <div id="root" className={classes.bordering}>
        <form onSubmit={handleSub} >
          <label>
            Enter for x coordinate:
            <input type="text" ref={xRef}></input>
          </label>
          <br/>
          <label>
            Enter for y coordinate:
            <input type="text" ref={yRef}></input>
          </label>
          <br/>
          <label>
            Enter no. to zoom in:
            <input type="text" ref={zoomRef}></input>
          </label>
          
          <br/>
          <label>
          <button>Enter</button>
          <button onClick={()=>{document.location.reload()}}>Re Enter</button>
          </label>
        </form>
      </div>
    </>
  );
};

export default Scenario;
 */