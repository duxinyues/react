import { useEffect } from "react";
import * as THREE from "three";


export default function Three() {
    useEffect(() => {
        init()
    }, [])
    const init = () => {
        // 创建场景
        const scene = new THREE.Scene();
        // 创建摄像机
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);

        // 创建渲染器
        const renderer = new THREE.WebGLRenderer();
        // 设置渲染器的颜色
        renderer.setClearColor(new THREE.Color('red'), 1);
        // 设置渲染器宽高
        renderer.setSize(1500, 400);

        renderer.render(scene, camera);
        document.getElementById('webgl').appendChild(renderer.domElement)
    }
    return <div id='webgl'></div>
}