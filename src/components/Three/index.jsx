import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

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
        renderer.setClearColor(new THREE.Color('black'), 1);
        // 设置渲染器宽高
        renderer.setSize(1500, 400);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial({ color: 'blue' });
        const mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);

        // 设置相机在Z轴方向的值，这样看到物体的一个面
        camera.position.z = 19;

        // 调整相机的角度，这样同时可以看到物体多个面。
        camera.position.set(3, 3, 4);
        camera.lookAt(mesh.position);

        // 设置灯光
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(3, 2, 1);

        scene.add(pointLight);

        // 设置基本光源
        const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
        scene.add(ambientLight);


        document.getElementById('webgl').appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.addEventListener('change', () => {
            renderer.render(scene, camera)
        })
        const animate = () => {
            window.requestAnimationFrame(animate);
            mesh.rotation.y += 0.03;
            renderer.render(scene, camera);
        }
        animate();
    }
    return <div id='webgl'></div>
}