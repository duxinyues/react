/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-07-10 23:31:43
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-11 22:11:24
 * @FilePath: \react\src\components\Three\Box.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
export default function Box() {
    useEffect(() => {
        init()
    }, [])
    const init = () => {
        // 创建场景
        const scene = new THREE.Scene();
        // 自定义几何
        const geometry = new THREE.BufferGeometry(); // 创建一个Buffer类型几何体对象
        const vertices = new Float32Array([
            0, 0, 0, //顶点1坐标
            50, 50, 50, //顶点2坐标
            100, 100, 100, //顶点3坐标
            200, 200, 100, //顶点4坐标
            60, 90, 100, //顶点5坐标
            50, 300, 10, //顶点6坐标
        ]);
        const attribue = new THREE.BufferAttribute(vertices, 2);
        geometry.attributes.position = attribue;

        // 面模型
        const material0 = new THREE.MeshBasicMaterial({
            color: 0x0000ff,
            // side: THREE.DoubleSide,// 两面可见
        });
        const mesh = new THREE.Mesh(geometry, material0);
        scene.add(mesh);

        // 点模型
        const material = new THREE.PointsMaterial({
            color: "#fff",
            size: 5
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // 线模型
        const lineMaterial = new THREE.LineBasicMaterial({
            color: "pink"
        });
        const line = new THREE.Line(geometry, lineMaterial);
        scene.add(line)

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
        camera.lookAt(scene.position);

        // 添加辅助三维坐标
        const axisHelper = new THREE.AxesHelper(500);
        scene.add(axisHelper);

        // 创建渲染器
        const renderer = new THREE.WebGLRenderer();
        // 设置渲染器的颜色
        renderer.setClearColor(new THREE.Color('black'), 1);
        // 设置渲染器宽高
        renderer.setSize(width, height);
        (document.getElementById('Box') as HTMLElement).appendChild(renderer.domElement);

        // 鼠标控制事件
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.addEventListener('change', () => {
            renderer.render(scene, camera)
        })
        const animate = () => {
            window.requestAnimationFrame(animate);
            // mesh.rotation.y += 0.03;
            renderer.render(scene, camera);
        }
        animate();
    }
    return <div id="Box"></div>
}