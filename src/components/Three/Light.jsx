/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-07-03 23:10:22
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-03 23:21:45
 * @FilePath: \react\src\components\Three\Light.jsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-07-03 22:16:15
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-03 22:51:14
 * @FilePath: \react\src\components\Three\Material.jsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function Light() {
    useEffect(() => {
        init()
    }, [])
    const init = () => {
        // 创建场景
        const scene = new THREE.Scene();
        // 立方体网格模型
        const geometry0 = new THREE.BoxGeometry(150, 150, 150);
        // MeshBasicMaterial基础材质
        const material0 = new THREE.MeshBasicMaterial({
            color: 'blue',
            // opacity: 0.7,
            // transparent: true,
        }); //材质对象Material
        const mesh0 = new THREE.Mesh(geometry0, material0); //网格模型对象Mesh
        scene.add(mesh0); //网格模型添加到场景中


        // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
        // const axisHelper = new THREE.AxesHelper(500);
        // scene.add(axisHelper);

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
        camera.lookAt(scene.position);

        // 设置点光源
        const pointLight = new THREE.PointLight(0xaaabbb);
        pointLight.position.set(300, 200, 100);
        scene.add(pointLight);

        var point = new THREE.PointLight(0xffffff);
        point.position.set(400, 200, 300); //点光源位置
        scene.add(point); //点光源添加到场景中
        // 设置环境光
        const ambientLight = new THREE.AmbientLight(0xcccfff, 0.5);
        scene.add(ambientLight);

        // 创建渲染器
        const renderer = new THREE.WebGLRenderer();
        // 设置渲染器的颜色
        renderer.setClearColor(new THREE.Color('black'), 1);
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
            mesh0.rotation.y += 0.03;
            mesh0.rotateY(0.02);
            mesh0.rotateX(0.02);
            mesh0.rotateZ(0.04);
            renderer.render(scene, camera);
        }
        animate();
    }
    return <div id='webgl'></div>
}