import { useEffect } from "react";
import * as THREE from "three";


export default function Scene(){
    const init = ()=>{
        let  scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1,1000);
 
        let renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(new THREE.Color(0xeeeeee,0.1));
        renderer.setSize(1500,500);

        var planeGeometry = new THREE.PlaneGeometry(60, 20, 20, 20);
        var planeMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;

        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 15;
        plane.position.y = 0;
        plane.position.z = 0;

        scene.add(plane);

        var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff7777});
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.castShadow = true;

        cube.position.x = -4;
        cube.position.y = 3;
        cube.position.z = 0;

        // add the cube to the scene
        scene.add(cube);

        var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
        var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the sphere
        sphere.position.x = 20;
        sphere.position.y = 0;
        sphere.position.z = 2;
        sphere.castShadow = true;

        // add the sphere to the scene
        scene.add(sphere);
        camera.position.x = -25;
        camera.position.y = 30;
        camera.position.z = 25;
        camera.lookAt(new THREE.Vector3(10, 0, 0));

        // add subtle ambient lighting
        var ambiColor = "#0c0c0c";
        var ambientLight = new THREE.AmbientLight(ambiColor);
        scene.add(ambientLight);

        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(-40, 60, -10);
        spotLight.castShadow = true;
        // scene.add( spotLight );

        var pointColor = "#ccffcc";
        var pointLight = new THREE.PointLight(pointColor);
        pointLight.distance = 100;
        scene.add(pointLight);

        const sphereLight = new THREE.SphereGeometry(0.3);
        const sphereLightMaterial = new THREE.MeshBasicMaterial({color:'blue'});
        var sphereLightMesh = new THREE.Mesh(sphereLight, sphereLightMaterial);
        sphereLightMesh.castShadow = true;

        sphereLightMesh.position = new THREE.Vector3(3, 0, 3);
        scene.add(sphereLightMesh);

        document.getElementById("secen").appendChild(renderer.domElement);
        const animate = () => {
            window.requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();
    }
    useEffect(()=>{
        init()
    },[])

    return <div id="secen"></div>
}