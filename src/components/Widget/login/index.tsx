/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-08-13 15:31:23
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-11 13:01:47
 * @FilePath: \react\src\components\Widget\login\index.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { useEffect } from "react";
import _ from 'lodash'
import "./index.scss";
import { Form, Input, Button, } from "antd";
import { UserOutlined, LockOutlined, } from "@ant-design/icons";
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import useLocalStorage from "@/hooks/useLocalStorage";
import { useNavigate } from "react-router";

export default function Login() {
    const { setLocalStorage } = useLocalStorage("login");
    let materials: any[] = [];
    let parameters: any
    useEffect(() => {
        init()
    }, [])
    const init = () => {
        // 创建场景
        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x000000, 0, 10000);
        const depth = 1400; // 盒子的深度

        const container: any = document.getElementById("login");
        const width = container.clientWidth;
        const height = container.clientHeight;
        const fov = 15;
        const distance = width / 2 / Math.tan(Math.PI / 12);
        const zAxisNumber = Math.floor(distance - depth / 2);

        // 背景
        new THREE.TextureLoader().load(require('../../../assets/login/sky.png'), (texture) => {
            const geometry = new THREE.BoxGeometry(width, height, depth);
            const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide }) // 创建基础为网格基础材料
            const mesh = new THREE.Mesh(geometry, material)
            scene.add(mesh);
        })

        // 相机
        const camera = new THREE.PerspectiveCamera(fov, width / height, 1, 30000)
        camera.position.set(0, 0, zAxisNumber)
        const cameraTarget = new THREE.Vector3(0, 0, 0)
        camera.lookAt(cameraTarget);

        // 光源
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        const light_rightBottom = new THREE.PointLight(0xffffff, 5, 6);
        light_rightBottom.position.set(0, 100, -200);
        scene.add(light_rightBottom);
        scene.add(ambientLight);

        // 几何球体模型
        const material = new THREE.MeshPhongMaterial();
        material.map = new THREE.TextureLoader().load(require("../../../assets/login/earth_bg.png"));
        material.blendDstAlpha = 1;
        const sphereGeometry = new THREE.SphereGeometry(50, 64, 32);
        const sphere = new THREE.Mesh(sphereGeometry, material);
        // 初始化几何球体
        const Sphere_Group = new THREE.Group();
        Sphere_Group.add(sphere);
        Sphere_Group.position.x = -400;
        Sphere_Group.position.y = 200;
        Sphere_Group.position.z = -200;
        scene.add(Sphere_Group);

        // 球体自转
        const renderSphereRotate = () => {
            if (sphere) {
                Sphere_Group.rotateY(0.01);
            }
        }
        // 初始化星星
        const initSceneStar = (initZposition: number) => {
            const geometry = new THREE.BufferGeometry();
            const vertices: number[] = [];
            const pointsGeometry: any[] = [];
            const sprite1 = new THREE.TextureLoader().load(require('../../../assets/login/starflake1.png'));
            const sprite2 = new THREE.TextureLoader().load(require('../../../assets/login/starflake2.png'));
            parameters = [[[0.6, 100, 0.75], sprite1, 50],
            [[0, 0, 1], sprite2, 20]];
            // 初始化500个节点
            for (let i = 0; i < 500; i++) {
                const x: number = THREE.MathUtils.randFloatSpread(width)
                const y: number = _.random(0, height / 2)
                const z: number = _.random(-depth / 2, zAxisNumber)
                vertices.push(x, y, z)
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

            // 创建2种不同的材质的节点（500 * 2）
            for (let i = 0; i < parameters.length; i++) {
                const color: any = parameters[i][0]
                const sprite: any = parameters[i][1]
                const size: any = parameters[i][2]

                materials[i] = new THREE.PointsMaterial({
                    size,
                    map: sprite,
                    blending: THREE.AdditiveBlending,
                    depthTest: true,
                    transparent: true
                })
                materials[i].color.setHSL(color[0], color[1], color[2])
                const particles = new THREE.Points(geometry, materials[i])
                particles.rotation.x = Math.random() * 0.2 - 0.15
                particles.rotation.z = Math.random() * 0.2 - 0.15
                particles.rotation.y = Math.random() * 0.2 - 0.15
                particles.position.setZ(initZposition)
                pointsGeometry.push(particles)
                scene.add(particles)
            }
            return pointsGeometry
        };
        // 流动路径
        const initTubeRoute = (route?: any, geometryWidth?: number, geometryHeight?: number) => {
            const curve = new THREE.CatmullRomCurve3(route, false)
            const tubeGeometry = new THREE.TubeGeometry(curve, 100, 2, 50, false)
            const tubeMaterial = new THREE.MeshBasicMaterial({
                // color: '0x4488ff',
                opacity: 0,
                transparent: true
            })
            const tube = new THREE.Mesh(tubeGeometry, tubeMaterial)
            scene.add(tube)

            const clondGeometry = new THREE.PlaneGeometry(geometryWidth, geometryHeight)
            const textureLoader = new THREE.TextureLoader()
            const cloudTexture = textureLoader.load(require('../../../assets/login/cloud.png'))
            const clondMaterial = new THREE.MeshBasicMaterial({
                map: cloudTexture,
                blending: THREE.AdditiveBlending,
                depthTest: false,
                transparent: true
            })
            const cloud = new THREE.Mesh(clondGeometry, clondMaterial)
            scene.add(cloud)
            return {
                cloud,
                curve
            }
        }
        const particles_init_position = -zAxisNumber - depth / 2;
        let zprogress = particles_init_position;
        let zprogress_second = particles_init_position * 2;
        const particles_first = initSceneStar(particles_init_position);
        const particles_second = initSceneStar(zprogress_second);
        const cloudParameter_first = initTubeRoute(
            [
                new THREE.Vector3(-width / 10, 0, -depth / 2),
                new THREE.Vector3(-width / 4, height / 8, 0),
                new THREE.Vector3(-width / 4, 0, zAxisNumber)
            ],
            400,
            200
        );
        const cloudParameter_second = initTubeRoute(
            [
                new THREE.Vector3(width / 8, height / 8, -depth / 2),
                new THREE.Vector3(width / 8, height / 8, zAxisNumber)
            ],
            200,
            100
        );

        // 渲染星星的运动
        const renderStarMove = () => {
            const time = Date.now() * 0.000001
            zprogress += 1;
            zprogress_second += 1;

            if (zprogress >= zAxisNumber + depth / 2) {
                zprogress = particles_init_position;
            } else {
                particles_first.forEach((item) => {
                    item.position.setZ(zprogress)
                })
            }
            if (zprogress_second >= zAxisNumber + depth / 2) {
                zprogress_second = particles_init_position
            } else {
                particles_second.forEach((item) => {
                    item.position.setZ(zprogress_second)
                })
            }
            for (let i = 0; i < materials.length; i++) {
                const color = parameters[i][0]

                const h = ((360 * (color[0] + time)) % 360) / 360
                materials[i].color.setHSL(color[0], color[1], parseFloat(h.toFixed(2)))
            }
        }

        // 初始化云的运动函数
        const initCloudMove = (
            cloudParameter: any,
            speed: number,
            scaleSpeed = 0.0006,
            maxScale = 1,
            startScale = 0
        ) => {
            let cloudProgress = 0
            return () => {
                if (startScale < maxScale) {
                    startScale += scaleSpeed
                    cloudParameter.cloud.scale.setScalar(startScale)
                }
                if (cloudProgress > 1) {
                    cloudProgress = 0
                    startScale = 0
                } else {
                    cloudProgress += speed
                    if (cloudParameter.curve) {
                        const point = cloudParameter.curve.getPoint(cloudProgress)
                        if (point && point.x) {
                            cloudParameter.cloud.position.set(point.x, point.y, point.z)
                        }
                    }
                }
            }
        }
        // 渲染器
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);
        const renderCloudMove_first = initCloudMove(cloudParameter_first, 0.002)
        const renderCloudMove_second = initCloudMove(cloudParameter_second, 0.008, 0.01)

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enabled = true;
        controls.update()
        // controls.addEventListener('change', () => {
        //     renderer.render(scene, camera)
        // })
        const animate = () => {
            window.requestAnimationFrame(animate);
            renderSphereRotate();
            renderStarMove();
            renderCloudMove_first();
            renderCloudMove_second()
            renderer.render(scene, camera);
        }
        animate();
    }
    const navigate = useNavigate();
    return <div className="container">
        <div id="login"></div>
        <div className="content">
            <img className="login-plane-human" src={require("../../../assets/login/login_human.png")} alt="" />
            <div className="login-main">
                <Form
                    className="login-from"
                    onFinish={(values) => {
                        console.log("登录", values);
                        setLocalStorage('true');
                        navigate('/')
                    }}
                >
                    <Form.Item
                        name="userName"
                        rules={[{ required: true, message: "请输入用户名" }]}
                    >
                        <Input placeholder='' prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input type="password" placeholder='' prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" block htmlType="submit" >登录</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
        <div className="login-ground"></div>
    </div>
}