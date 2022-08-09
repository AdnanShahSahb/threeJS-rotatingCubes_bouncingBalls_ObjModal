import { useEffect } from "react";
import * as THREE from "three"

const Scene3=()=>{

    //Scene 
    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,0.01,1000);
    
    

    //renderer
    const renderer3=new THREE.WebGLRenderer();
    renderer3.setSize(window.innerWidth,window.innerHeight);
    renderer3.setPixelRatio(window.devicePixelRatio)


    //sphere
    const geometry=new THREE.SphereGeometry(0.5,20,20);
    const material=new THREE.MeshBasicMaterial({color:'green'});
    const meshing=new THREE.Mesh(geometry,material);
    const meshing2=new THREE.Mesh(geometry,material);

    const group=new THREE.Group();
    group.add(meshing)
    group.add(meshing2)

    scene.add(group);
    camera.position.z=5;

    //bouncing
    var clock = new THREE.Clock();
    var time = 0;
    var delta = 0;

    function animate(){
        requestAnimationFrame(animate);
        renderer3.render(scene,camera)

        meshing.rotation.x+=0.5;
        meshing.rotation.y+=0.5;

        meshing.position.set(0.5,0.4,0)
        meshing2.position.set(-0.5,-0.4,0)
        
        //bouncing
        delta = clock.getDelta();
        time += delta;
        
        meshing.rotation.x = time * 4;
        meshing.position.y = 0.5 + Math.abs(Math.sin(time * 3)) * 2;
        meshing.position.z = Math.cos(time) * 4;

        meshing2.rotation.x = time * 4;
        meshing2.position.y = 0.5 + Math.abs(Math.sin(time * 3)) * 1;
        meshing2.position.z = Math.cos(time) * 4;

        

        // while(meshing.position.x<1.88){
        // meshing.position.x-=0.05;
        // }
        // while(meshing.position.x>1.88){
        //     meshing.position.x-=0.05;
        //     }
        

        // console.log(meshing.position.x);
    }
    animate();

    useEffect(()=>{

        if(document.getElementById('root3').children[0]){
            document.getElementById('root3').removeChild(document.getElementById('root3').children[0])
        }

        if(document.getElementById('root3').children[0]===undefined){
        document.getElementById('root3').appendChild(renderer3.domElement);

        document.getElementById('root3').children[0].setAttribute("style","width:100%");

        }
    })
    

    return(
        <div id="root3">
        </div>
    )

}
export default Scene3;