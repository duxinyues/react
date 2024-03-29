/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-07-03 14:01:20
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-03 22:13:32
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
        const geometry0 = new THREE.BoxGeometry(100, 130, 30); // 创建一个立方体几何对象
        // const geometry =  new THREE.CylinderGeometry( 50, 50, 100, 25 ); // 创建一个圆柱几何对象
        // const geometry =  new THREE.OctahedronGeometry(50); // 创建一个八面体几何对象
        // const geometry =  new THREE.DodecahedronGeometry(50); // 创建一个十二面体几何对象
        // const geometry = new THREE.IcosahedronGeometry(50); // 创建一个二十面体几何对象
        const material0 = new THREE.MeshPhongMaterial({ color: '0x0000ff' }); // 材质对象
        const mesh0 = new THREE.Mesh(geometry0, material0); // 网格模型对象Mesh
        scene.add(mesh0);

        // 立方体网格模型
        const geometry1 = new THREE.BoxGeometry(100, 100, 100);
        const material1 = new THREE.MeshLambertMaterial({
            color: 0x0000ff
        }); //材质对象Material
        const mesh1 = new THREE.Mesh(geometry1, material1); //网格模型对象Mesh
        scene.add(mesh1); //网格模型添加到场景中

        // 球体网格模型
        const geometry2 = new THREE.SphereGeometry(60, 40, 40);
        const material2 = new THREE.MeshLambertMaterial({
            color: 0xff00ff
        });
        const mesh2 = new THREE.Mesh(geometry2, material2); //网格模型对象Mesh
        mesh2.translateY(120); //球体网格模型沿Y轴正方向平移120
        scene.add(mesh2);

        // 圆柱网格模型
        const geometry3 = new THREE.CylinderGeometry(50, 50, 100, 25);
        const material3 = new THREE.MeshLambertMaterial({
            color: 0xffff00
        });
        const mesh3 = new THREE.Mesh(geometry3, material3); //网格模型对象Mesh
        // mesh3.translateX(120); //球体网格模型沿Y轴正方向平移120
        mesh3.position.set(120, 0, 0);//设置mesh3模型对象的xyz坐标为120,0,0
        scene.add(mesh3); //

        // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
        const axisHelper = new THREE.AxesHelper(500);
        scene.add(axisHelper);

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
            mesh3.rotation.y += 0.03;
            mesh2.rotateY(0.02);
            mesh1.rotateX(0.02);
            mesh0.rotateZ(0.04);
            renderer.render(scene, camera);
        }
        animate();
    }
    return <div id='webgl'></div>
}