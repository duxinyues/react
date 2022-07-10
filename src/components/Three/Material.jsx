/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-07-03 22:16:15
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-10 23:25:58
 * @FilePath: \react\src\components\Three\Material.jsx
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
        // 立方体网格模型
        const geometry0 = new THREE.BoxGeometry(10, 100, 100);
        // MeshBasicMaterial基础材质
        const material0 = new THREE.MeshBasicMaterial({
            color: 'blue',
            opacity: 0.7,
            transparent: true,
        }); //材质对象Material
        const mesh0 = new THREE.Mesh(geometry0, material0); //网格模型对象Mesh
        mesh0.translateX(250);
        scene.add(mesh0); //网格模型添加到场景中

        const geometry1 = new THREE.BoxGeometry(100, 100, 100);
        // MeshLambertMaterial，Lambert材质
        const material1 = new THREE.MeshLambertMaterial({
            color: 0x0000ff,
            opacity: 0.7,
            transparent: true,
            wireframe: true
        }); //材质对象Material
        const mesh1 = new THREE.Mesh(geometry1, material1); //网格模型对象Mesh
        scene.add(mesh1); //网格模型添加到场景中

        // 球体网格模型
        const geometry2 = new THREE.SphereGeometry(60, 40, 40);
        //  
        const material2 = new THREE.MeshPhongMaterial({
            color: 0xff00ff,
            specular: 0x448899,
            shininess: 0.1
        });  // MeshPhongMaterial 材质表面高光效果
        const mesh2 = new THREE.Mesh(geometry2, material2); //网格模型对象Mesh
        mesh2.translateY(120); //球体网格模型沿Y轴正方向平移120
        scene.add(mesh2);

        // 圆柱网格模型
        const geometry3 = new THREE.CylinderGeometry(50, 50, 100, 25);
        const material3 = new THREE.MeshLambertMaterial({
            color: 0xffff00,  //材质颜色
            opacity:0.3, // 透明材质
            transparent:true,  //  是否开启透明，默认false
            wireframe:true, // 几个图形渲染为线框
        });
        const mesh3 = new THREE.Mesh(geometry3, material3); //网格模型对象Mesh
        // mesh3.translateX(120); //球体网格模型沿Y轴正方向平移120
        mesh3.position.set(120, 60, 60);//设置mesh3模型对象的xyz坐标为120,0,0
        scene.add(mesh3); //

        const geometry4 = new THREE.CylinderBufferGeometry(20, 30, 20, 12,21);
        const material4 = new THREE.MeshStandardMaterial({
            color: "pink",
        })
        const mesh4 = new THREE.Mesh(geometry4, material4)
        mesh4.translateZ(250);
        scene.add(mesh4);
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
        pointLight.position.set(400, 200, 300);
        scene.add(pointLight);

        // 添加另一个点光源,与点光源pointLight位置相反，将材质物体置于两个光源之间，那么在物体上就会看到两个方向照射的光。
        const pointLight2 = new THREE.PointLight(0xaaabbb);
        pointLight2.position.set(-400, -200, -300);
        scene.add(pointLight2);


        // 设置环境光
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // 创建渲染器
        const renderer = new THREE.WebGLRenderer();
        // 设置渲染器的颜色
        renderer.setClearColor(new THREE.Color('#000'), 1);
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
            mesh3.rotation.y -= 0.03;
            mesh2.rotateY(0.02);
            mesh1.rotateX(0.02);
            mesh1.rotateZ(0.04);
            renderer.render(scene, camera);
        }
        animate();
    }
    return <div id='webgl'></div>
}