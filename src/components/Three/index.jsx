import { useEffect } from "react";
import * as THREE from "three";

export default function Three() {
    useEffect(() => {
        init()
    }, [])
    const init = () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(500, 200);
        renderer.render(scene, camera);
        document.getElementById('webgl').appendChild(renderer.domElement)
    }
    return <div id='webgl'></div>
}