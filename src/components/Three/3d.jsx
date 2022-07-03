/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-07-03 14:01:20
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-03 17:09:04
 * @FilePath: \react\src\components\Three\3d.jsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function Three3D() {
    useEffect(() => {
        init()
    }, [])
    const init = () => {
        // 创建场景
        const scene = new THREE.Scene();


        // 添加物体
        // const geometry = new THREE.SphereGeometry(30, 40, 50);// 创建一个球体几何对象
        const geometry = new THREE.BoxGeometry(100, 130, 30); // 创建一个立方体几何对象
        const material = new THREE.MeshPhongMaterial({ color: '0x0000ff' }); // 材质对象
        const mesh = new THREE.Mesh(geometry, material); // 网格模型对象Mesh

        scene.add(mesh);

        const width = window.innerWidth;
        const height = window.innerHeight;
        const k = width / height;
        const s = 200;
        // 创建摄像机
        // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);
        const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
        // 设置相机在Z轴方向的值，这样看到物体的一个面
        // camera.position.z = 19;
        camera.position.set(200, 300, 200); // 设置相机位置

        // 调整相机的角度，这样同时可以看到物体多个面。
        // camera.position.set(3, 3, 4);
        camera.lookAt(mesh.position);

        // 设置点光源
        const pointLight = new THREE.PointLight(0xaaabbb);
        // pointLight.position.set(3, 2, 1);
        scene.add(pointLight);

        // 设置环境光
        const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
        scene.add(ambientLight);

        // 创建渲染器
        const renderer = new THREE.WebGLRenderer();
        // 设置渲染器的颜色
        renderer.setClearColor(new THREE.Color('red'), 1);
        // 设置渲染器宽高
        renderer.setSize(width, height);
        document.getElementById('webgl').appendChild(renderer.domElement);

        // 鼠标控制事件
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.addEventListener('change', () => {
            renderer.render(scene, camera)
        })
        const animate = () => {
            window.requestAnimationFrame(animate);
            mesh.rotation.y += 0.03;
            mesh.rotateY(0.02);
            mesh.rotateX(0.02);
            mesh.rotateZ(0.04);
            renderer.render(scene, camera);
        }
        animate();
    }
    return <div id='webgl'></div>
}