(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/Home.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "buttons": "Home-module__jKgjFW__buttons",
  "canvas": "Home-module__jKgjFW__canvas",
  "container": "Home-module__jKgjFW__container",
  "enterBtn": "Home-module__jKgjFW__enterBtn",
  "fadeIn": "Home-module__jKgjFW__fadeIn",
  "fireworksCanvas": "Home-module__jKgjFW__fireworksCanvas",
  "musicBtn": "Home-module__jKgjFW__musicBtn",
  "overlay": "Home-module__jKgjFW__overlay",
  "playing": "Home-module__jKgjFW__playing",
  "subtitle": "Home-module__jKgjFW__subtitle",
  "title": "Home-module__jKgjFW__title",
});
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/Home.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Home() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [audioLoaded, setAudioLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioPlaying, setAudioPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // 页面加载后尝试播放音乐
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const audio = audioRef.current;
            if (audio && audioLoaded) {
                // 尝试自动播放
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.then({
                        "Home.useEffect": ()=>{
                            // 自动播放成功
                            setAudioPlaying(true);
                            console.log("Audio playing automatically");
                        }
                    }["Home.useEffect"]).catch({
                        "Home.useEffect": (err)=>{
                            // 自动播放被阻止
                            console.log("Audio autoplay was prevented:", err);
                        // 不要设置audioPlaying为true，因为实际上没有播放
                        }
                    }["Home.useEffect"]);
                }
            }
        }
    }["Home.useEffect"], [
        audioLoaded
    ]);
    // 添加用户交互时的播放尝试
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleUserInteraction = {
                "Home.useEffect.handleUserInteraction": ()=>{
                    const audio = audioRef.current;
                    if (audio && !audioPlaying && audioLoaded) {
                        audio.play().then({
                            "Home.useEffect.handleUserInteraction": ()=>{
                                setAudioPlaying(true);
                                console.log("Audio playing after user interaction");
                            }
                        }["Home.useEffect.handleUserInteraction"]).catch({
                            "Home.useEffect.handleUserInteraction": (err)=>{
                                console.log("Audio play was prevented even after interaction:", err);
                            }
                        }["Home.useEffect.handleUserInteraction"]);
                    }
                }
            }["Home.useEffect.handleUserInteraction"];
            // 监听可能的用户交互事件
            document.addEventListener('click', handleUserInteraction);
            document.addEventListener('touchstart', handleUserInteraction);
            document.addEventListener('keydown', handleUserInteraction);
            return ({
                "Home.useEffect": ()=>{
                    document.removeEventListener('click', handleUserInteraction);
                    document.removeEventListener('touchstart', handleUserInteraction);
                    document.removeEventListener('keydown', handleUserInteraction);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        audioPlaying,
        audioLoaded
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Store current canvas ref at the beginning of the effect
            const currentCanvas = canvasRef.current;
            // 创建Three.js场景
            const canvas = canvasRef.current;
            if (!canvas) return;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                canvas,
                antialias: true,
                alpha: true
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            // 设置梦幻蓝色主题
            const dreamyBlue = {
                dark: 0x1a1a4a,
                medium: 0x4169e1,
                light: 0x87cefa,
                highlight: 0xadd8e6,
                accent: 0xb0e0e6
            };
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            scene.fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fog"](dreamyBlue.dark, 15, 50);
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 10, 20);
            // 添加环境光
            const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](dreamyBlue.light, 0.5);
            scene.add(ambientLight);
            // 添加方向光
            const directionalLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 1);
            directionalLight.position.set(5, 10, 7.5);
            scene.add(directionalLight);
            // 添加一些点光源增加梦幻感
            const pointLight1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](dreamyBlue.light, 1, 30);
            pointLight1.position.set(-5, 5, -15);
            scene.add(pointLight1);
            const pointLight2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](dreamyBlue.highlight, 1, 30);
            pointLight2.position.set(8, 3, -25);
            scene.add(pointLight2);
            // 创建蜿蜒的星光路径
            // 使用曲线创建蜿蜒路径
            const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"]([
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-4, 0, 10),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-2, 0, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](3, 0, -10),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1, 0, -20),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](2, 0, -30),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-3, 0, -40),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -50),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](4, 0, -60),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-2, 0, -70),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -80)
            ]);
            const points = curve.getPoints(100);
            const pathGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(points);
            // 创建用于可视化路径的线
            const pathLine = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](pathGeometry, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: dreamyBlue.accent,
                visible: false
            }));
            scene.add(pathLine);
            // 创建路径的平面
            const pathWidth = 6;
            const extrudedCurvePoints = [];
            // 为路径创建一个具有宽度的管道
            for(let i = 0; i < points.length; i++){
                const point = points[i];
                let direction;
                if (i < points.length - 1) {
                    direction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(points[i + 1], point).normalize();
                } else {
                    direction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(point, points[i - 1]).normalize();
                }
                const perpendicular = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-direction.z, 0, direction.x).normalize();
                // 路径两侧的点
                const leftPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(point).add(perpendicular.clone().multiplyScalar(pathWidth / 2));
                const rightPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(point).add(perpendicular.clone().multiplyScalar(-pathWidth / 2));
                extrudedCurvePoints.push({
                    left: leftPoint,
                    right: rightPoint
                });
            }
            // 创建用于路径的几何体
            const roadGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            const roadVertices = [];
            const roadIndices = [];
            // 添加顶点
            for(let i = 0; i < extrudedCurvePoints.length; i++){
                const { left, right } = extrudedCurvePoints[i];
                roadVertices.push(left.x, left.y, left.z);
                roadVertices.push(right.x, right.y, right.z);
            }
            // 添加索引 (三角形)
            for(let i = 0; i < extrudedCurvePoints.length - 1; i++){
                const topLeft = i * 2;
                const topRight = i * 2 + 1;
                const bottomLeft = (i + 1) * 2;
                const bottomRight = (i + 1) * 2 + 1;
                // 两个三角形组成一个四边形
                roadIndices.push(topLeft, bottomLeft, topRight);
                roadIndices.push(topRight, bottomLeft, bottomRight);
            }
            roadGeometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](roadVertices, 3));
            roadGeometry.setIndex(roadIndices);
            roadGeometry.computeVertexNormals();
            const roadMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: dreamyBlue.medium,
                metalness: 0.3,
                roughness: 0.4,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                emissive: dreamyBlue.medium,
                emissiveIntensity: 0.2
            });
            const road = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](roadGeometry, roadMaterial);
            scene.add(road);
            // 添加星光粒子 - 增加数量
            const starsGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            const starsCount = 5000; // 增加到5000个
            const starPositions = new Float32Array(starsCount * 3);
            const sizes = new Float32Array(starsCount);
            const starColors = new Float32Array(starsCount * 3);
            for(let i = 0; i < starsCount * 3; i += 3){
                // 使粒子散布在场景中，更多集中在路径附近
                const randomPointIndex = Math.floor(Math.random() * points.length);
                const pathPoint = points[randomPointIndex];
                // 路径附近的粒子
                if (Math.random() < 0.4) {
                    // 靠近路径的粒子
                    starPositions[i] = pathPoint.x + (Math.random() - 0.5) * 15;
                    starPositions[i + 1] = Math.random() * 8;
                    starPositions[i + 2] = pathPoint.z + (Math.random() - 0.5) * 8;
                } else if (Math.random() < 0.7) {
                    // 中距离的粒子
                    starPositions[i] = (Math.random() - 0.5) * 60;
                    starPositions[i + 1] = Math.random() * 20;
                    starPositions[i + 2] = (Math.random() - 0.5) * 120 - 20;
                } else {
                    // 远距离的粒子，创造深度
                    starPositions[i] = (Math.random() - 0.5) * 100;
                    starPositions[i + 1] = Math.random() * 50;
                    starPositions[i + 2] = (Math.random() - 0.5) * 200 - 50;
                }
                // 粒子大小变化更大
                sizes[i / 3] = Math.random() * 2;
                // 添加颜色变化
                if (Math.random() > 0.8) {
                    // 一些粒子使用强调色
                    starColors[i] = 1; // R
                    starColors[i + 1] = 1; // G
                    starColors[i + 2] = Math.random() * 0.5 + 0.5; // B - 偏蓝色
                } else {
                    // 大多数使用普通的蓝白色
                    starColors[i] = Math.random() * 0.3 + 0.7; // R
                    starColors[i + 1] = Math.random() * 0.3 + 0.7; // G
                    starColors[i + 2] = 1; // B
                }
            }
            starsGeometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](starPositions, 3));
            starsGeometry.setAttribute('size', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](sizes, 1));
            starsGeometry.setAttribute('color', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](starColors, 3));
            const starsMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                size: 0.1,
                color: dreamyBlue.highlight,
                transparent: true,
                opacity: 0.8,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                vertexColors: true
            });
            const stars = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](starsGeometry, starsMaterial);
            scene.add(stars);
            // 创建花草，使用梦幻蓝色主题
            const createFlower = {
                "Home.useEffect.createFlower": (x, z, type = 'regular')=>{
                    const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                    if (type === 'sunflower') {
                        // 向日葵实现
                        // 茎
                        const stemGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.08, 0.05, 2, 8);
                        const stemMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color: 0x2e8b57
                        });
                        const stem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](stemGeometry, stemMaterial);
                        stem.position.y = 1;
                        group.add(stem);
                        // 叶子
                        const leafGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.3, 8, 8);
                        leafGeometry.scale(1, 0.3, 1);
                        const leafMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color: 0x3cb371
                        });
                        for(let i = 0; i < 2; i++){
                            const leaf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](leafGeometry, leafMaterial);
                            leaf.position.set(0.3 * (i === 0 ? 1 : -1), 0.8 + Math.random() * 0.5, 0);
                            leaf.rotation.z = Math.PI / 6 * (i === 0 ? 1 : -1);
                            group.add(leaf);
                        }
                        // 花盘
                        const centerGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](0.5, 32);
                        const centerMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color: 0x654321,
                            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                        });
                        const center = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](centerGeometry, centerMaterial);
                        center.position.y = 2;
                        center.rotation.x = -Math.PI / 2;
                        group.add(center);
                        // 花瓣
                        const petalGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.25, 8, 8);
                        petalGeometry.scale(1, 0.2, 0.5);
                        const petalMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color: 0xffd700
                        });
                        const petalCount = 16;
                        for(let i = 0; i < petalCount; i++){
                            const angle = i / petalCount * Math.PI * 2;
                            const petal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](petalGeometry, petalMaterial);
                            petal.position.set(Math.cos(angle) * 0.7, 2, Math.sin(angle) * 0.7);
                            petal.rotation.x = Math.PI / 2;
                            petal.rotation.y = -angle;
                            group.add(petal);
                        }
                    } else {
                        // 普通花的实现 - 已有代码
                        // 茎
                        const stemGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.05, 0.05, 1, 8);
                        const stemMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color: 0x4caf50
                        });
                        const stem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](stemGeometry, stemMaterial);
                        stem.position.y = 0.5;
                        group.add(stem);
                        // 花瓣 - 使用蓝色调
                        const petalGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.2, 8, 8);
                        const petalColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]().setHSL(0.6 + Math.random() * 0.2, 0.7, 0.7); // 蓝色色调
                        const petalMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color: petalColor
                        });
                        for(let i = 0; i < 5; i++){
                            const petal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](petalGeometry, petalMaterial);
                            const angle = i / 5 * Math.PI * 2;
                            petal.position.set(Math.cos(angle) * 0.2, 1 + Math.sin(angle) * 0.05, Math.sin(angle) * 0.2);
                            petal.scale.set(0.7, 0.7, 0.7);
                            group.add(petal);
                        }
                        // 花芯
                        const centerGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.1, 8, 8);
                        const centerMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color: 0xffeb3b
                        });
                        const center = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](centerGeometry, centerMaterial);
                        center.position.y = 1;
                        group.add(center);
                    }
                    group.position.set(x, 0, z);
                    return group;
                }
            }["Home.useEffect.createFlower"];
            // 添加更多花草到场景，包括向日葵
            for(let i = 0; i < 50; i++){
                // 选择随机点
                const randomPointIndex = Math.floor(Math.random() * points.length);
                const pathPoint = points[randomPointIndex];
                if (!pathPoint) continue;
                // 确保花不在路径上，偏移到路径两侧
                const offset = (Math.random() > 0.5 ? 1 : -1) * (pathWidth / 2 + 2 + Math.random() * 8);
                const perpendicular = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-pathPoint.z, 0, pathPoint.x).normalize();
                const flowerPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(pathPoint).add(perpendicular.clone().multiplyScalar(offset));
                // 有20%的几率是向日葵
                const flowerType = Math.random() > 0.8 ? 'sunflower' : 'regular';
                const flower = createFlower(flowerPos.x, flowerPos.z, flowerType);
                scene.add(flower);
            }
            // 创建蝴蝶
            const createButterfly = {
                "Home.useEffect.createButterfly": (x, z)=>{
                    const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                    // 身体
                    const bodyGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapsuleGeometry"](0.05, 0.2, 8, 8);
                    const bodyMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: 0x000000
                    });
                    const body = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](bodyGeometry, bodyMaterial);
                    body.rotation.x = Math.PI / 2;
                    group.add(body);
                    // 翅膀
                    const wingShape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
                    wingShape.moveTo(0, 0);
                    wingShape.quadraticCurveTo(0.3, 0.2, 0.5, 0);
                    wingShape.quadraticCurveTo(0.3, -0.2, 0, 0);
                    const wingGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShapeGeometry"](wingShape);
                    const wingMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](Math.random() * 0.2 + 0.8, Math.random() * 0.2 + 0.8, 1),
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                        transparent: true,
                        opacity: 0.7
                    });
                    const leftWing = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](wingGeometry, wingMaterial);
                    leftWing.position.set(0, 0, 0.05);
                    group.add(leftWing);
                    const rightWing = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](wingGeometry, wingMaterial);
                    rightWing.rotation.y = Math.PI;
                    rightWing.position.set(0, 0, -0.05);
                    group.add(rightWing);
                    group.position.set(x, 1.5 + Math.random(), z);
                    return group;
                }
            }["Home.useEffect.createButterfly"];
            // 添加蝴蝶
            const butterflies = [];
            for(let i = 0; i < 15; i++){
                try {
                    const randomPointIndex = Math.floor(Math.random() * points.length);
                    const pathPoint = points[randomPointIndex];
                    if (!pathPoint) continue;
                    const offset = (Math.random() - 0.5) * 20;
                    const butterfly = createButterfly(pathPoint.x + offset, pathPoint.z + offset);
                    scene.add(butterfly);
                    butterflies.push(butterfly);
                } catch (e) {
                    console.error("Error creating butterfly:", e);
                }
            }
            // 创建兔子
            const createRabbit = {
                "Home.useEffect.createRabbit": (x, z)=>{
                    const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                    // 身体
                    const bodyGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.3, 16, 16);
                    bodyGeometry.scale(1, 0.8, 1.2);
                    const bodyMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: 0xf5f5f5
                    });
                    const body = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](bodyGeometry, bodyMaterial);
                    body.position.y = 0.3;
                    group.add(body);
                    // 头部
                    const headGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.2, 16, 16);
                    const headMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: 0xf5f5f5
                    });
                    const head = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](headGeometry, headMaterial);
                    head.position.set(0.25, 0.5, 0);
                    group.add(head);
                    // 耳朵
                    const earGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapsuleGeometry"](0.05, 0.3, 8, 8);
                    const earMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: 0xf5f5f5
                    });
                    const leftEar = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](earGeometry, earMaterial);
                    leftEar.position.set(0.25, 0.7, 0.1);
                    leftEar.rotation.x = -Math.PI / 12;
                    leftEar.rotation.z = -Math.PI / 8;
                    group.add(leftEar);
                    const rightEar = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](earGeometry, earMaterial);
                    rightEar.position.set(0.25, 0.7, -0.1);
                    rightEar.rotation.x = Math.PI / 12;
                    rightEar.rotation.z = -Math.PI / 8;
                    group.add(rightEar);
                    // 腿
                    const legGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.1, 8, 8);
                    legGeometry.scale(1, 0.6, 1);
                    const legMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: 0xf0f0f0
                    });
                    // 前腿
                    const frontLegPositions = [
                        [
                            0.1,
                            0,
                            0.15
                        ],
                        [
                            0.1,
                            0,
                            -0.15
                        ]
                    ];
                    frontLegPositions.forEach({
                        "Home.useEffect.createRabbit": (pos)=>{
                            const leg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](legGeometry, legMaterial);
                            leg.position.set(pos[0], pos[1], pos[2]);
                            group.add(leg);
                        }
                    }["Home.useEffect.createRabbit"]);
                    // 后腿
                    const hindLegGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.12, 8, 8);
                    hindLegGeometry.scale(1, 0.7, 1);
                    const hindLegPositions = [
                        [
                            -0.2,
                            0,
                            0.15
                        ],
                        [
                            -0.2,
                            0,
                            -0.15
                        ]
                    ];
                    hindLegPositions.forEach({
                        "Home.useEffect.createRabbit": (pos)=>{
                            const leg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](hindLegGeometry, legMaterial);
                            leg.position.set(pos[0], pos[1], pos[2]);
                            group.add(leg);
                        }
                    }["Home.useEffect.createRabbit"]);
                    // 尾巴
                    const tailGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.1, 8, 8);
                    const tailMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: 0xffffff
                    });
                    const tail = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](tailGeometry, tailMaterial);
                    tail.position.set(-0.35, 0.3, 0);
                    group.add(tail);
                    group.position.set(x, 0, z);
                    return group;
                }
            }["Home.useEffect.createRabbit"];
            // 添加一些兔子
            const rabbits = [];
            for(let i = 0; i < 5; i++){
                try {
                    // 在安全位置上添加兔子
                    const safePointIndex = Math.floor(points.length / 5 * i + points.length / 10);
                    if (safePointIndex >= points.length) continue;
                    const pathPoint = points[safePointIndex];
                    if (!pathPoint) continue;
                    // 偏移到路径一侧
                    const offset = (i % 2 === 0 ? 1 : -1) * (pathWidth + 4);
                    const perpendicular = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-pathPoint.z, 0, pathPoint.x).normalize();
                    const rabbitPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(pathPoint).add(perpendicular.clone().multiplyScalar(offset));
                    const rabbit = createRabbit(rabbitPos.x, rabbitPos.z);
                    scene.add(rabbit);
                    rabbits.push(rabbit);
                } catch (e) {
                    console.error("Error creating rabbit:", e);
                }
            }
            // 创建小鹿，使用更适合梦幻蓝色主题的颜色
            const createDeer = {
                "Home.useEffect.createDeer": (x, z)=>{
                    const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                    // 身体 - 使用更冷的棕色调
                    const bodyGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapsuleGeometry"](0.5, 1, 4, 8);
                    const bodyMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: 0x8a7f8d
                    });
                    const body = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](bodyGeometry, bodyMaterial);
                    body.rotation.z = Math.PI / 2;
                    group.add(body);
                    // 头部
                    const headGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.3, 8, 8);
                    const headMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: 0x9e9e9e
                    });
                    const head = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](headGeometry, headMaterial);
                    head.position.set(0.8, 0.5, 0);
                    group.add(head);
                    // 鹿角 - 使用蓝色调
                    const antlerMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: dreamyBlue.light
                    });
                    const antler1Geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.03, 0.03, 0.5, 8);
                    const antler1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](antler1Geometry, antlerMaterial);
                    antler1.position.set(0.8, 0.8, 0.15);
                    antler1.rotation.z = -Math.PI / 4;
                    group.add(antler1);
                    const antler2Geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.03, 0.03, 0.5, 8);
                    const antler2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](antler2Geometry, antlerMaterial);
                    antler2.position.set(0.8, 0.8, -0.15);
                    antler2.rotation.z = -Math.PI / 4;
                    group.add(antler2);
                    // 腿
                    const legGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.1, 0.05, 1, 8);
                    const legMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: 0x9e9e9e
                    });
                    const positions = [
                        [
                            -0.3,
                            -0.5,
                            0.3
                        ],
                        [
                            -0.3,
                            -0.5,
                            -0.3
                        ],
                        [
                            0.3,
                            -0.5,
                            0.3
                        ],
                        [
                            0.3,
                            -0.5,
                            -0.3
                        ]
                    ];
                    positions.forEach({
                        "Home.useEffect.createDeer": (pos)=>{
                            const leg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](legGeometry, legMaterial);
                            leg.position.set(pos[0], pos[1], pos[2]);
                            group.add(leg);
                        }
                    }["Home.useEffect.createDeer"]);
                    group.position.set(x, 1, z);
                    group.scale.set(0.7, 0.7, 0.7);
                    return group;
                }
            }["Home.useEffect.createDeer"];
            // 创建几只小鹿到场景，确保它们在路径两侧
            const deers = [];
            for(let i = 0; i < 3; i++){
                try {
                    // 使用固定点而不是随机点，确保我们选择的点是有效的
                    const safePointIndex = Math.floor(points.length / 3 * (i + 1)); // 在路径上均匀分布
                    const pathPoint = points[safePointIndex];
                    if (!pathPoint) continue; // 安全检查
                    // 简化小鹿位置的计算逻辑，避免复杂的向量计算
                    // 直接在X方向上偏移
                    const offsetX = (i % 2 === 0 ? 1 : -1) * (pathWidth + 6);
                    const deerPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](pathPoint.x + offsetX, 1, pathPoint.z);
                    const deer = createDeer(deerPos.x, deerPos.z);
                    scene.add(deer);
                    deers.push(deer);
                } catch (e) {
                    console.error("Error placing deer:", e);
                }
            }
            // 创建福州景点，包含山和海
            const createFuzhouScene = {
                "Home.useEffect.createFuzhouScene": ()=>{
                    const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                    // 创建基座
                    const baseGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](5, 5, 0.5, 16);
                    const baseMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: 0x8a7f8d
                    });
                    const base = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](baseGeometry, baseMaterial);
                    base.position.y = 0.25;
                    group.add(base);
                    // 创建山
                    const createMountain = {
                        "Home.useEffect.createFuzhouScene.createMountain": (x, z, height, radius, color)=>{
                            const mountainGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConeGeometry"](radius, height, 16);
                            const mountainMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                                color,
                                roughness: 0.8
                            });
                            const mountain = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](mountainGeometry, mountainMaterial);
                            mountain.position.set(x, height / 2 + 0.5, z);
                            return mountain;
                        }
                    }["Home.useEffect.createFuzhouScene.createMountain"];
                    // 添加几座山
                    const mountain1 = createMountain(-1.5, -1, 3, 1.2, 0x4b6455);
                    const mountain2 = createMountain(0, -1.5, 2.5, 1, 0x3a5045);
                    const mountain3 = createMountain(1.5, -0.8, 2, 0.8, 0x567d6e);
                    group.add(mountain1, mountain2, mountain3);
                    // 创建海
                    const seaGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](3, 3, 0.2, 32);
                    const seaMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: dreamyBlue.light,
                        transparent: true,
                        opacity: 0.8,
                        metalness: 0.2,
                        roughness: 0.1
                    });
                    const sea = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](seaGeometry, seaMaterial);
                    sea.position.set(0, 0.6, 1.5);
                    group.add(sea);
                    // 添加波浪效果
                    const waveGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](6, 2.5, 32, 8);
                    const waveMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: dreamyBlue.medium,
                        transparent: true,
                        opacity: 0.5,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                    });
                    const wave = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](waveGeometry, waveMaterial);
                    wave.rotation.x = -Math.PI / 2;
                    wave.position.set(0, 0.7, 1.5);
                    // 扭曲顶点制造波浪效果
                    const wavePositions = wave.geometry.attributes.position.array;
                    for(let i = 0; i < wavePositions.length; i += 3){
                        const x = wavePositions[i];
                        const z = wavePositions[i + 2];
                        wavePositions[i + 1] = Math.sin(x * 2 + z) * 0.1;
                    }
                    wave.geometry.attributes.position.needsUpdate = true;
                    group.add(wave);
                    // 移除原来的"福州"文字，保留景点的山海元素
                    // 缩小整个场景以使其适合放置在路径旁边
                    group.scale.set(0.4, 0.4, 0.4);
                    return group;
                }
            }["Home.useEffect.createFuzhouScene"];
            // 在路径五分之一处放置福州景点
            const fuzhouScenePointIndex = Math.floor(points.length / 5);
            const fuzhouPathPoint = points[fuzhouScenePointIndex];
            if (fuzhouPathPoint) {
                // 放在路径右侧，距离更近
                const offset = pathWidth + 1.5; // 减少偏移量，更靠近路径
                const perpendicular = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-fuzhouPathPoint.z, 0, fuzhouPathPoint.x).normalize();
                const fuzhouPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(fuzhouPathPoint).add(perpendicular.clone().multiplyScalar(offset));
                const fuzhouScene = createFuzhouScene();
                fuzhouScene.position.set(fuzhouPos.x, 0, fuzhouPos.z);
                // 增大景点尺寸
                fuzhouScene.scale.set(0.6, 0.6, 0.6); // 增大缩放比例，从0.4增加到0.6
                // 旋转场景使其面向路径
                const directionToPath = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(fuzhouPathPoint, fuzhouPos).normalize();
                fuzhouScene.rotation.y = Math.atan2(directionToPath.x, directionToPath.z);
                scene.add(fuzhouScene);
                // 使用简单的几何体直接创建"福州"文字，确保可见
                const createTextMesh = {
                    "Home.useEffect.createTextMesh": (text, height, size, color)=>{
                        const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                        // 创建直接可见的背景板
                        const backPlate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](4, 1.5, 0.1), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color: dreamyBlue.dark,
                            metalness: 0.5,
                            roughness: 0.3
                        }));
                        group.add(backPlate);
                        // 为"福"字创建几何形状
                        const fu = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                        // 横
                        fu.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](1.2, 0.2, 0.3), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color
                        })));
                        // 竖
                        const vertical = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.2, 1.0, 0.3), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color
                        }));
                        vertical.position.y = -0.4;
                        fu.add(vertical);
                        // 左边的部分
                        const leftPart = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.2, 0.6, 0.3), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color
                        }));
                        leftPart.position.set(-0.5, -0.2, 0);
                        fu.add(leftPart);
                        // 右边的横
                        const rightHorizontal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.5, 0.2, 0.3), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color
                        }));
                        rightHorizontal.position.set(0.35, -0.3, 0);
                        fu.add(rightHorizontal);
                        fu.position.set(-1.0, 0, 0.1);
                        group.add(fu);
                        // 为"州"字创建几何形状
                        const zhou = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                        // 外框
                        const frame = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](1.0, 1.0, 0.1), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color,
                            wireframe: true
                        }));
                        zhou.add(frame);
                        // 内部结构
                        const inner1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.8, 0.2, 0.3), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color
                        }));
                        inner1.position.y = 0.3;
                        zhou.add(inner1);
                        const inner2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.8, 0.2, 0.3), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color
                        }));
                        inner2.position.y = 0;
                        zhou.add(inner2);
                        const inner3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.8, 0.2, 0.3), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color
                        }));
                        inner3.position.y = -0.3;
                        zhou.add(inner3);
                        zhou.position.set(1.0, 0, 0.1);
                        group.add(zhou);
                        // 英文 Fuzhou
                        const textMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](3, 0.3, 0.2), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color
                        }));
                        textMesh.position.set(0, -0.6, 0.1);
                        group.add(textMesh);
                        group.position.set(0, height, 0);
                        group.scale.set(size, size, size);
                        return group;
                    }
                }["Home.useEffect.createTextMesh"];
                // 创建简单的文字标志，确保在场景中清晰可见
                const textMesh = createTextMesh('福州', 6.0, 1.5, 0xffff00); // 使用黄色并增大尺寸为1.5
                textMesh.position.set(fuzhouPos.x, 6.0, fuzhouPos.z);
                textMesh.rotation.copy(fuzhouScene.rotation);
                textMesh.rotation.x = -Math.PI / 6; // 更明显的倾斜角度
                // 添加边缘高光
                const glowMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](6.5, 3, 0.05), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                    color: 0x00ffff,
                    transparent: true,
                    opacity: 0.3
                }));
                glowMesh.position.copy(textMesh.position);
                glowMesh.position.z -= 0.1;
                glowMesh.rotation.copy(textMesh.rotation);
                scene.add(textMesh, glowMesh);
                // 添加强光照射文字
                const textLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0xffffff, 8, 15);
                textLight.position.set(fuzhouPos.x, 8, fuzhouPos.z - 3);
                scene.add(textLight);
                // 连接景点和标志的支柱
                const pillar = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.15, 0.15, 6, 8), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                    color: dreamyBlue.light,
                    metalness: 0.7,
                    roughness: 0.3
                }));
                pillar.position.set(fuzhouPos.x, 3, fuzhouPos.z);
                scene.add(pillar);
                // 添加文字动画
                const animateText = {
                    "Home.useEffect.animateText": (elapsedTime)=>{
                        // 上下浮动
                        textMesh.position.y = 6.0 + Math.sin(elapsedTime * 0.5) * 0.2;
                        // 光照强度变化
                        textLight.intensity = 8 + Math.sin(elapsedTime * 0.7) * 2;
                        // 轻微旋转
                        textMesh.rotation.z = Math.sin(elapsedTime * 0.3) * 0.05;
                    }
                }["Home.useEffect.animateText"];
                // 添加到动画循环
                const textAnimations = scene.userData.animateFunctions || [];
                textAnimations.push(animateText);
                scene.userData.animateFunctions = textAnimations;
            }
            // 创建人物剪影，使用梦幻蓝色调
            const createSilhouette = {
                "Home.useEffect.createSilhouette": (color)=>{
                    const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                    // 头部
                    const headGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.2, 8, 8);
                    const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color,
                        transparent: true,
                        opacity: 0.6
                    });
                    const head = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](headGeometry, material);
                    head.position.y = 1.6;
                    group.add(head);
                    // 身体
                    const bodyGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapsuleGeometry"](0.15, 1, 4, 8);
                    const body = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](bodyGeometry, material);
                    body.position.y = 1;
                    group.add(body);
                    // 腿
                    const legGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapsuleGeometry"](0.1, 0.8, 4, 8);
                    const leftLeg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](legGeometry, material);
                    leftLeg.position.set(-0.1, 0.4, 0);
                    group.add(leftLeg);
                    const rightLeg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](legGeometry, material);
                    rightLeg.position.set(0.1, 0.4, 0);
                    group.add(rightLeg);
                    // 手臂
                    const armGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapsuleGeometry"](0.08, 0.7, 4, 8);
                    const leftArm = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](armGeometry, material);
                    leftArm.position.set(-0.25, 1.1, 0);
                    leftArm.rotation.z = Math.PI / 12;
                    group.add(leftArm);
                    const rightArm = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](armGeometry, material);
                    rightArm.position.set(0.25, 1.1, 0);
                    rightArm.rotation.z = -Math.PI / 12;
                    group.add(rightArm);
                    return group;
                }
            }["Home.useEffect.createSilhouette"];
            // 创建两个人物剪影，使用梦幻蓝色主题
            const person1 = createSilhouette(0xd4bbff); // 浅紫色
            const person2 = createSilhouette(0x87cefa); // 浅蓝色
            // 设置初始位置在路径起点
            const personStartPoint = points[0];
            person1.position.set(personStartPoint.x - 0.5, 0, personStartPoint.z);
            person2.position.set(personStartPoint.x + 0.5, 0, personStartPoint.z);
            scene.add(person1, person2);
            // 动画帧
            const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]();
            let previousTime = 0;
            // 人物沿着路径移动
            let personPathProgress = 0;
            const pathSpeed = 0.00001; // 路径行走速度，从0.00005进一步减慢到0.00001
            // 添加对话气泡相关变量
            let showDialog = false;
            let dialogTimer = 0;
            const dialogDuration = 5; // 对话显示5秒
            // 创建对话气泡
            const dialogGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            // 创建气泡背景 - Instagram风格
            const bubbleGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](6, 3); // 保持大尺寸
            const bubbleTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](createDialogBubble("福州，我们来了~"));
            const bubbleMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                map: bubbleTexture,
                transparent: true,
                depthWrite: false,
                opacity: 0.95
            });
            const bubble = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](bubbleGeometry, bubbleMaterial);
            bubble.position.set(0, 3, 0);
            dialogGroup.add(bubble);
            dialogGroup.visible = false; // 初始不可见
            scene.add(dialogGroup);
            // 创建Instagram风格的对话气泡纹理
            function createDialogBubble(text) {
                const canvas = document.createElement('canvas');
                canvas.width = 1024;
                canvas.height = 512;
                const context = canvas.getContext('2d');
                if (!context) return canvas;
                // 创建Instagram风格的渐变背景
                const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, '#8a2387'); // Instagram紫色
                gradient.addColorStop(0.5, '#e94057'); // Instagram粉红色
                gradient.addColorStop(1, '#f27121'); // Instagram橙色
                // 绘制圆角矩形背景 - Instagram风格
                context.fillStyle = gradient;
                roundRect(context, 20, 20, canvas.width - 40, canvas.height - 40, 40, true);
                // 添加内部白色背景提高可读性
                context.fillStyle = 'rgba(255, 255, 255, 0.85)';
                roundRect(context, 40, 40, canvas.width - 80, canvas.height - 80, 30, true);
                // 绘制文字
                context.fillStyle = '#000000';
                context.font = 'bold 96px "Microsoft YaHei", "SimHei", sans-serif';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                // 添加文字阴影
                context.shadowColor = 'rgba(0, 0, 0, 0.3)';
                context.shadowBlur = 5;
                context.shadowOffsetX = 2;
                context.shadowOffsetY = 2;
                context.fillText(text, canvas.width / 2, canvas.height / 2);
                // 添加Instagram风格的装饰点
                context.shadowColor = 'transparent'; // 关闭阴影
                // 绘制Instagram标志性的彩色圆点
                const colors = [
                    '#8a2387',
                    '#e94057',
                    '#f27121'
                ]; // Instagram渐变颜色
                for(let i = 0; i < colors.length; i++){
                    context.fillStyle = colors[i];
                    context.beginPath();
                    context.arc(canvas.width - 80 + i * 25, 80 - i * 5, 15, 0, Math.PI * 2);
                    context.fill();
                }
                return canvas;
            }
            // 辅助函数：绘制圆角矩形
            function roundRect(ctx, x, y, width, height, radius = 5, fill = false, stroke = false) {
                ctx.beginPath();
                ctx.moveTo(x + radius, y);
                ctx.lineTo(x + width - radius, y);
                ctx.arcTo(x + width, y, x + width, y + radius, radius);
                ctx.lineTo(x + width, y + height - radius);
                ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
                ctx.lineTo(x + radius, y + height);
                ctx.arcTo(x, y + height, x, y + height - radius, radius);
                ctx.lineTo(x, y + radius);
                ctx.arcTo(x, y, x + radius, y, radius);
                ctx.closePath();
                if (fill) {
                    ctx.fill();
                }
                if (stroke) {
                    ctx.stroke();
                }
            }
            const animate = {
                "Home.useEffect.animate": ()=>{
                    const elapsedTime = clock.getElapsedTime();
                    const deltaTime = elapsedTime - previousTime;
                    previousTime = elapsedTime;
                    // 动画星光
                    const positions = stars.geometry.attributes.position.array;
                    for(let i = 0; i < positions.length; i += 3){
                        positions[i + 1] += Math.sin(elapsedTime + positions[i] * 0.5) * 0.002;
                    }
                    stars.geometry.attributes.position.needsUpdate = true;
                    // 检查是否到达福州景点
                    const fuzhouReached = personPathProgress > fuzhouScenePointIndex / points.length - 0.01 && personPathProgress < fuzhouScenePointIndex / points.length + 0.01;
                    // 人物沿路径移动 - 在福州景点位置停下
                    if (!fuzhouReached) {
                        personPathProgress += pathSpeed * deltaTime * 1000;
                        if (personPathProgress > 1) {
                            personPathProgress = 0;
                        }
                    } else if (!showDialog) {
                        // 到达福州景点并且还没显示过对话
                        showDialog = true;
                        dialogGroup.visible = true;
                        // 放置对话气泡在人物右上方
                        const dialogPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](person1.position.x + (person2.position.x - person1.position.x) / 2, 0, person1.position.z + (person2.position.z - person1.position.z) / 2);
                        // 计算人物朝向的右上方位置
                        const tangent = curve.getTangentAt(personPathProgress);
                        const right = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-tangent.z, 0, tangent.x).normalize().multiplyScalar(3);
                        dialogGroup.position.copy(dialogPos);
                        // 向右上方偏移
                        dialogGroup.position.add(right);
                        dialogGroup.position.y = 4.5; // 位置上移
                        // 气泡出现动画
                        dialogGroup.scale.set(0.1, 0.1, 0.1);
                        const targetScale = 1.3; // 最终缩放比例
                        scene.userData.animateFunctions = scene.userData.animateFunctions || [];
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        scene.userData.animateFunctions.push({
                            "Home.useEffect.animate": (_time)=>{
                                if (dialogGroup.scale.x < targetScale) {
                                    dialogGroup.scale.x += 0.05;
                                    dialogGroup.scale.y += 0.05;
                                    dialogGroup.scale.z += 0.05;
                                }
                            }
                        }["Home.useEffect.animate"]);
                        // 气泡轻微摆动动画
                        scene.userData.animateFunctions.push({
                            "Home.useEffect.animate": (time)=>{
                                if (dialogGroup.visible) {
                                    dialogGroup.rotation.z = Math.sin(time * 0.5) * 0.05;
                                    dialogGroup.position.y = 4.5 + Math.sin(time * 0.7) * 0.1;
                                }
                            }
                        }["Home.useEffect.animate"]);
                        // 让对话框面向相机
                        dialogGroup.lookAt(camera.position);
                    }
                    // 管理对话的显示时间
                    if (showDialog) {
                        dialogTimer += deltaTime;
                        // 对话显示时间结束后，继续移动
                        if (dialogTimer > dialogDuration) {
                            // 添加淡出效果
                            if (dialogGroup.visible) {
                                const opacityAnimation = {
                                    "Home.useEffect.animate.opacityAnimation": ()=>{
                                        if (bubble.material.opacity > 0) {
                                            bubble.material.opacity -= 0.01;
                                            if (bubble.material.opacity <= 0) {
                                                dialogGroup.visible = false;
                                                // 移除这个动画函数
                                                const index = scene.userData.animateFunctions.indexOf(opacityAnimation);
                                                if (index > -1) {
                                                    scene.userData.animateFunctions.splice(index, 1);
                                                }
                                            }
                                        }
                                    }
                                }["Home.useEffect.animate.opacityAnimation"];
                                scene.userData.animateFunctions.push(opacityAnimation);
                            }
                        }
                        // 让对话框总是面向相机
                        dialogGroup.lookAt(camera.position);
                    }
                    // 使用曲线获取当前位置
                    const currentPos = curve.getPointAt(personPathProgress);
                    // 获取路径切线方向，用于设置人物朝向
                    const tangent = curve.getTangentAt(personPathProgress);
                    // 设置人物位置，稍微错开一些
                    person1.position.set(currentPos.x - tangent.z * 0.5, 0, currentPos.z + tangent.x * 0.5);
                    person2.position.set(currentPos.x + tangent.z * 0.5, 0, currentPos.z - tangent.x * 0.5);
                    // 根据路径方向设置人物朝向
                    person1.rotation.y = Math.atan2(tangent.x, tangent.z);
                    person2.rotation.y = Math.atan2(tangent.x, tangent.z);
                    // 实现手臂挥动动画
                    if (!fuzhouReached) {
                        // 只有在行走时才挥动手臂
                        const leftArmIndex = 4; // 根据创建顺序，左手臂应该是第5个子对象
                        const rightArmIndex = 5; // 右手臂是第6个子对象
                        if (person1.children[leftArmIndex] && person1.children[rightArmIndex]) {
                            // 左右手臂相反方向摆动
                            person1.children[leftArmIndex].rotation.x = Math.sin(elapsedTime * 3) * 0.5;
                            person1.children[rightArmIndex].rotation.x = -Math.sin(elapsedTime * 3) * 0.5;
                        }
                        if (person2.children[leftArmIndex] && person2.children[rightArmIndex]) {
                            // 第二个人物的手臂动作稍微错开
                            person2.children[leftArmIndex].rotation.x = Math.sin(elapsedTime * 3 + 0.5) * 0.5;
                            person2.children[rightArmIndex].rotation.x = -Math.sin(elapsedTime * 3 + 0.5) * 0.5;
                        }
                        // 添加腿部动画模拟走路
                        const leftLegIndex = 2; // 左腿是第3个子对象
                        const rightLegIndex = 3; // 右腿是第4个子对象
                        if (person1.children[leftLegIndex] && person1.children[rightLegIndex]) {
                            person1.children[leftLegIndex].rotation.z = Math.sin(elapsedTime * 3) * 0.3;
                            person1.children[rightLegIndex].rotation.z = -Math.sin(elapsedTime * 3) * 0.3;
                        }
                        if (person2.children[leftLegIndex] && person2.children[rightLegIndex]) {
                            person2.children[leftLegIndex].rotation.z = Math.sin(elapsedTime * 3 + 0.5) * 0.3;
                            person2.children[rightLegIndex].rotation.z = -Math.sin(elapsedTime * 3 + 0.5) * 0.3;
                        }
                        // 添加手臂动画，与腿部相反方向摆动
                        if (person1.children[leftArmIndex] && person1.children[rightArmIndex]) {
                            person1.children[leftArmIndex].rotation.z = -Math.sin(elapsedTime * 3) * 0.25;
                            person1.children[rightArmIndex].rotation.z = Math.sin(elapsedTime * 3) * 0.25;
                        }
                        if (person2.children[leftArmIndex] && person2.children[rightArmIndex]) {
                            person2.children[leftArmIndex].rotation.z = -Math.sin(elapsedTime * 3 + 0.5) * 0.25;
                            person2.children[rightArmIndex].rotation.z = Math.sin(elapsedTime * 3 + 0.5) * 0.25;
                        }
                    } else {
                        // 到达目的地后，可以做一些特殊的挥手动作
                        const leftArmIndex = 4;
                        const rightArmIndex = 5;
                        if (person1.children[rightArmIndex]) {
                            // 右手上下挥动打招呼
                            person1.children[rightArmIndex].rotation.x = 0;
                            person1.children[rightArmIndex].rotation.z = -Math.PI / 4 + Math.sin(elapsedTime * 2) * 0.5;
                        }
                        if (person2.children[leftArmIndex]) {
                            // 左手上下挥动打招呼
                            person2.children[leftArmIndex].rotation.x = 0;
                            person2.children[leftArmIndex].rotation.z = Math.PI / 4 + Math.sin(elapsedTime * 2 + 0.8) * 0.5;
                        }
                    }
                    // 调整人物透明度，创造若隐若现效果
                    person1.children.forEach({
                        "Home.useEffect.animate": (mesh)=>{
                            if (mesh instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"] && mesh.material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]) {
                                mesh.material.opacity = 0.4 + Math.sin(elapsedTime * 0.5) * 0.2;
                            }
                        }
                    }["Home.useEffect.animate"]);
                    person2.children.forEach({
                        "Home.useEffect.animate": (mesh)=>{
                            if (mesh instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"] && mesh.material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]) {
                                mesh.material.opacity = 0.4 + Math.sin(elapsedTime * 0.5 + Math.PI) * 0.2;
                            }
                        }
                    }["Home.useEffect.animate"]);
                    // 小鹿的动画
                    deers.forEach({
                        "Home.useEffect.animate": (deer, index)=>{
                            deer.rotation.y = Math.sin(elapsedTime * 0.2 + index) * 0.2;
                            // 小鹿轻微点头动作
                            if (deer.children[1]) {
                                deer.children[1].rotation.x = Math.sin(elapsedTime * 0.6 + index) * 0.1;
                            }
                        }
                    }["Home.useEffect.animate"]);
                    // 蝴蝶动画
                    butterflies.forEach({
                        "Home.useEffect.animate": (butterfly, index)=>{
                            // 翅膀扇动
                            const wingSpeed = 5 + Math.sin(index) * 2;
                            const wingAngle = Math.sin(elapsedTime * wingSpeed) * 0.5;
                            if (butterfly.children[1]) {
                                butterfly.children[1].rotation.z = wingAngle;
                            }
                            if (butterfly.children[2]) {
                                butterfly.children[2].rotation.z = -wingAngle;
                            }
                            // 飞行路径 - 使用李萨如曲线
                            const a = 2 + index % 3;
                            const b = 3 + index % 2;
                            const t = elapsedTime * 0.3;
                            butterfly.position.y = 1.5 + Math.sin(t * a + index) * 0.5;
                            butterfly.position.x += Math.sin(t * a + index) * 0.01;
                            butterfly.position.z += Math.cos(t * b + index) * 0.01;
                        }
                    }["Home.useEffect.animate"]);
                    // 兔子动画
                    rabbits.forEach({
                        "Home.useEffect.animate": (rabbit, index)=>{
                            // 耳朵轻微摆动
                            if (rabbit.children[2] && rabbit.children[3]) {
                                rabbit.children[2].rotation.x = -Math.PI / 12 + Math.sin(elapsedTime * 1.5 + index) * 0.05;
                                rabbit.children[3].rotation.x = Math.PI / 12 + Math.sin(elapsedTime * 1.5 + index + Math.PI) * 0.05;
                            }
                            // 偶尔跳动
                            if (Math.sin(elapsedTime * 0.2 + index * 5) > 0.97) {
                                rabbit.position.y = Math.sin((elapsedTime + index) * 5) * 0.1;
                            } else {
                                rabbit.position.y = 0;
                            }
                        }
                    }["Home.useEffect.animate"]);
                    // 执行所有自定义动画函数
                    if (scene.userData.animateFunctions) {
                        scene.userData.animateFunctions.forEach({
                            "Home.useEffect.animate": (animateFunc)=>{
                                animateFunc(elapsedTime);
                            }
                        }["Home.useEffect.animate"]);
                    }
                    renderer.render(scene, camera);
                    requestAnimationFrame(animate);
                }
            }["Home.useEffect.animate"];
            animate();
            // 响应窗口大小变化
            const handleResize = {
                "Home.useEffect.handleResize": ()=>{
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                }
            }["Home.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            // 在最开始添加自然景观
            // 创建远处的高山、海洋、太阳等元素
            const createLandscape = {
                "Home.useEffect.createLandscape": ()=>{
                    const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                    // 创建远处的山脉
                    const createMountainRange = {
                        "Home.useEffect.createLandscape.createMountainRange": (xOffset, zOffset, side)=>{
                            const mountainGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                            // 山脉的颜色从远到近渐变
                            const mountainColors = [
                                0x2c3e50,
                                0x34495e,
                                0x4b6584,
                                0x5c739c
                            ];
                            // 在一定范围内随机创建多座山峰
                            const mountainCount = 8;
                            for(let i = 0; i < mountainCount; i++){
                                const height = 15 + Math.random() * 25; // 高度变化
                                const radius = 10 + Math.random() * 15; // 底部半径变化
                                const segments = 6 + Math.floor(Math.random() * 6); // 分段数
                                const mountainGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConeGeometry"](radius, height, segments);
                                const mountainMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                                    color: mountainColors[Math.floor(Math.random() * mountainColors.length)],
                                    flatShading: true,
                                    roughness: 0.9
                                });
                                const mountain = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](mountainGeometry, mountainMaterial);
                                // 计算山峰的位置
                                // 在指定的一侧创建山脉
                                const xPos = side === 'left' ? -80 - Math.random() * 60 + xOffset : 80 + Math.random() * 60 + xOffset;
                                const zPos = -100 - Math.random() * 150 + zOffset;
                                mountain.position.set(xPos, height / 2 - 5, zPos);
                                // 稍微随机旋转山体，使看起来更自然
                                mountain.rotation.y = Math.random() * Math.PI;
                                mountainGroup.add(mountain);
                            }
                            // 给远处的山添加雪顶
                            const snowPeaks = 3; // 雪顶山峰的数量
                            for(let i = 0; i < snowPeaks; i++){
                                const height = 28 + Math.random() * 12;
                                const radius = 12 + Math.random() * 8;
                                // 山体
                                const mountainGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConeGeometry"](radius, height, 8);
                                const mountainMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                                    color: 0x4b6584,
                                    flatShading: true,
                                    roughness: 0.8
                                });
                                const mountain = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](mountainGeometry, mountainMaterial);
                                // 雪顶
                                const snowCapGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConeGeometry"](radius * 0.8, height * 0.3, 8);
                                const snowMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                                    color: 0xffffff,
                                    flatShading: true,
                                    roughness: 0.6
                                });
                                const snowCap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](snowCapGeometry, snowMaterial);
                                snowCap.position.y = height * 0.4;
                                mountain.add(snowCap);
                                // 位置比其他山脉更远
                                const xPos = side === 'left' ? -130 - Math.random() * 40 + xOffset : 130 + Math.random() * 40 + xOffset;
                                const zPos = -180 - Math.random() * 100 + zOffset;
                                mountain.position.set(xPos, height / 2 - 5, zPos);
                                mountainGroup.add(mountain);
                            }
                            return mountainGroup;
                        }
                    }["Home.useEffect.createLandscape.createMountainRange"];
                    // 创建左侧山脉
                    const leftMountains = createMountainRange(-30, 0, 'left');
                    group.add(leftMountains);
                    // 创建右侧山脉
                    const rightMountains = createMountainRange(30, -50, 'right');
                    group.add(rightMountains);
                    // 创建太阳
                    const sunGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](15, 32, 32);
                    const sunMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color: 0xffcc66,
                        transparent: true,
                        opacity: 0.8
                    });
                    const sun = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](sunGeometry, sunMaterial);
                    sun.position.set(120, 60, -200);
                    // 添加太阳光晕
                    const sunGlowGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](25, 32, 32);
                    const sunGlowMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color: 0xffcc66,
                        transparent: true,
                        opacity: 0.3
                    });
                    const sunGlow = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](sunGlowGeometry, sunGlowMaterial);
                    sun.add(sunGlow);
                    // 太阳光源
                    const sunLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0xffffff, 1, 300);
                    sunLight.position.set(0, 0, 0);
                    sun.add(sunLight);
                    group.add(sun);
                    // 创建远处的大河
                    const riverWidth = 40;
                    const riverLength = 400;
                    const riverGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](riverWidth, riverLength, 20, 40);
                    // 给河流水面添加波浪效果
                    const riverPositions = riverGeometry.attributes.position.array;
                    for(let i = 0; i < riverPositions.length; i += 3){
                        const x = riverPositions[i];
                        const z = riverPositions[i + 1];
                        // 添加微小的高度变化模拟波浪
                        riverPositions[i + 2] = Math.sin(x * 0.5) * 0.5 + Math.cos(z * 0.3) * 0.3;
                    }
                    const riverMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: dreamyBlue.light,
                        transparent: true,
                        opacity: 0.8,
                        metalness: 0.3,
                        roughness: 0.2
                    });
                    const river = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](riverGeometry, riverMaterial);
                    river.rotation.x = -Math.PI / 2; // 平躺
                    river.position.set(-60, 0.2, -100); // 放在左侧山脉中
                    group.add(river);
                    // 创建右侧的海滩和海洋
                    const beachGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](100, 200, 30, 30);
                    const beachMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: 0xf5e1b3,
                        roughness: 0.9
                    });
                    const beach = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](beachGeometry, beachMaterial);
                    beach.rotation.x = -Math.PI / 2;
                    beach.position.set(80, 0.1, -50);
                    group.add(beach);
                    // 创建海面
                    const seaGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](200, 300, 50, 50);
                    // 给海面添加波浪效果
                    const seaPositions = seaGeometry.attributes.position.array;
                    for(let i = 0; i < seaPositions.length; i += 3){
                        const x = seaPositions[i];
                        const z = seaPositions[i + 1];
                        // 海浪效果更明显
                        seaPositions[i + 2] = Math.sin(x * 0.2 + z * 0.1) * 1.2;
                    }
                    const seaMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: 0x4b9cd3,
                        transparent: true,
                        opacity: 0.85,
                        metalness: 0.4,
                        roughness: 0.15
                    });
                    const sea = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](seaGeometry, seaMaterial);
                    sea.rotation.x = -Math.PI / 2;
                    sea.position.set(150, 0.3, -100);
                    group.add(sea);
                    // 添加一些小岛
                    const islandCount = 3;
                    for(let i = 0; i < islandCount; i++){
                        const islandGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConeGeometry"](5 + Math.random() * 3, 3 + Math.random() * 2, 5);
                        const islandMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color: 0xc1b396,
                            roughness: 0.8
                        });
                        const island = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](islandGeometry, islandMaterial);
                        // 随机位置，靠近海中央
                        const xPos = 130 + Math.random() * 60;
                        const zPos = -60 - Math.random() * 120;
                        island.position.set(xPos, 0, zPos);
                        island.rotation.x = Math.PI / 2; // 使圆锥底朝上
                        // 添加植被（简单椰子树）
                        const palmCount = 1 + Math.floor(Math.random() * 3);
                        for(let j = 0; j < palmCount; j++){
                            const trunkGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.3, 0.5, 4, 6);
                            const trunkMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                                color: 0x8b5a2b,
                                roughness: 0.8
                            });
                            const trunk = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](trunkGeometry, trunkMaterial);
                            // 随机位置，岛上的树
                            const treeX = Math.random() * 3 - 1.5;
                            const treeZ = Math.random() * 3 - 1.5;
                            const angle = Math.random() * Math.PI * 0.25; // 轻微倾斜
                            trunk.position.set(treeX, 2, treeZ);
                            trunk.rotation.x = -Math.PI / 2; // 调整方向
                            trunk.rotation.z = angle; // 轻微倾斜
                            // 添加树叶
                            const leafCount = 5 + Math.floor(Math.random() * 4);
                            for(let k = 0; k < leafCount; k++){
                                const leafGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](2, 3);
                                const leafMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                                    color: 0x2e8b57,
                                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                                    transparent: true,
                                    opacity: 0.9
                                });
                                const leaf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](leafGeometry, leafMaterial);
                                const leafAngle = k / leafCount * Math.PI * 2;
                                leaf.rotation.set(Math.PI / 4, leafAngle, 0);
                                leaf.position.y = 2;
                                trunk.add(leaf);
                            }
                            island.add(trunk);
                        }
                        group.add(island);
                    }
                    // 添加一些低矮的云
                    const cloudCount = 12;
                    for(let i = 0; i < cloudCount; i++){
                        const cloudGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                        // 云朵由多个球体组成
                        const puffCount = 3 + Math.floor(Math.random() * 4);
                        for(let j = 0; j < puffCount; j++){
                            const radius = 3 + Math.random() * 5;
                            const puffGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](radius, 7, 7);
                            const puffMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                                color: 0xffffff,
                                transparent: true,
                                opacity: 0.9 - Math.random() * 0.3,
                                roughness: 0.2
                            });
                            const puff = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](puffGeometry, puffMaterial);
                            // 水平排列组成一朵云
                            const puffX = j * (radius * 1.2) - puffCount * radius * 0.6 / 2;
                            const puffY = Math.random() * radius * 0.5;
                            const puffZ = Math.random() * radius * 0.5;
                            puff.position.set(puffX, puffY, puffZ);
                            cloudGroup.add(puff);
                        }
                        // 云的随机位置
                        const side = Math.random() > 0.5 ? 1 : -1; // 左侧或右侧
                        const xPos = side * (50 + Math.random() * 100);
                        const yPos = 40 + Math.random() * 30;
                        const zPos = -80 - Math.random() * 200;
                        cloudGroup.position.set(xPos, yPos, zPos);
                        group.add(cloudGroup);
                    }
                    return group;
                }
            }["Home.useEffect.createLandscape"];
            // 添加自然景观到场景中
            const landscape = createLandscape();
            scene.add(landscape);
            // 为日出/日落和水面波动添加动画
            const animateLandscape = {
                "Home.useEffect.animateLandscape": (elapsedTime)=>{
                    // 找到太阳对象(假设它是landscape中第3个子对象)
                    const sun = landscape.children[2];
                    if (sun && sun.material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]) {
                        // 太阳缓慢脉动效果
                        const sunScale = 1 + Math.sin(elapsedTime * 0.2) * 0.05;
                        sun.scale.set(sunScale, sunScale, sunScale);
                        // 轻微上下浮动
                        sun.position.y = 60 + Math.sin(elapsedTime * 0.1) * 2;
                        // 根据人物路径进度变化太阳颜色和位置
                        // 颜色变化：红 -> 黄 -> 白 -> 灰 -> 黑
                        const sunColors = [
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xff2200),
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xff8800),
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffcc66),
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff),
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xaaaaaa),
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x555555),
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x111111) // 接近黑色
                        ];
                        // 使用人物的路径进度来插值颜色
                        const colorIndex = Math.min(Math.floor(personPathProgress * sunColors.length), sunColors.length - 2);
                        const nextColorIndex = colorIndex + 1;
                        const colorProgress = personPathProgress * sunColors.length % 1;
                        // 在两个颜色之间插值
                        const currentColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]().copy(sunColors[colorIndex]).lerp(sunColors[nextColorIndex], colorProgress);
                        // 设置太阳颜色
                        sun.material.color = currentColor;
                        // 太阳位置也随着人物移动而变化 - 从右向左移动
                        const startX = 120;
                        const endX = -120;
                        sun.position.x = startX + (endX - startX) * personPathProgress;
                        // 太阳高度也变化 - 开始高，然后下降，最后略微升高（模拟日出日落）
                        const heightCurve = Math.sin(personPathProgress * Math.PI);
                        sun.position.y = 20 + heightCurve * 60;
                        // 太阳光晕闪烁和颜色同步
                        if (sun.children[0] && sun.children[0] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"] && sun.children[0].material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]) {
                            const glow = sun.children[0];
                            glow.scale.set(1 + Math.sin(elapsedTime * 0.5) * 0.1, 1 + Math.sin(elapsedTime * 0.5) * 0.1, 1 + Math.sin(elapsedTime * 0.5) * 0.1);
                            // 光晕颜色也要改变，但透明度保持低
                            glow.material.color = currentColor;
                        }
                        // 调整太阳光强度和颜色
                        if (sun.children[1] && sun.children[1] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"]) {
                            const light = sun.children[1];
                            // 光照强度随日夜变化（越暗强度越低）
                            light.intensity = 1.5 * (1 - personPathProgress * 0.8) + Math.sin(elapsedTime * 0.3) * 0.1;
                            // 光照颜色也要随太阳变化
                            light.color = currentColor;
                        }
                    }
                    // 根据太阳位置（时间）调整整体场景氛围
                    // 随着太阳从红变黑，场景也从亮变暗
                    const ambientLightIntensity = 0.5 * (1 - personPathProgress * 0.7);
                    ambientLight.intensity = ambientLightIntensity;
                    // 调整雾的颜色，随太阳变化
                    if (scene.fog instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fog"]) {
                        const dayFogColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](dreamyBlue.dark);
                        const nightFogColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x000814);
                        scene.fog.color.copy(dayFogColor).lerp(nightFogColor, personPathProgress);
                    }
                    // 河流波动
                    const river = landscape.children[3];
                    if (river && river.geometry instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"]) {
                        const riverPositions = river.geometry.attributes.position.array;
                        for(let i = 0; i < riverPositions.length; i += 3){
                            riverPositions[i + 2] = Math.sin(elapsedTime * 0.5 + riverPositions[i] * 0.03 + riverPositions[i + 1] * 0.05) * 0.5;
                        }
                        river.geometry.attributes.position.needsUpdate = true;
                    }
                    // 海洋波浪
                    const sea = landscape.children[5];
                    if (sea && sea.geometry instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"]) {
                        const seaPositions = sea.geometry.attributes.position.array;
                        for(let i = 0; i < seaPositions.length; i += 3){
                            seaPositions[i + 2] = Math.sin(elapsedTime * 0.3 + seaPositions[i] * 0.05) * 0.8 + Math.cos(elapsedTime * 0.4 + seaPositions[i + 1] * 0.06) * 0.8;
                        }
                        sea.geometry.attributes.position.needsUpdate = true;
                    }
                    // 云朵漂浮
                    for(let i = 6 + 3; i < landscape.children.length; i++){
                        const cloud = landscape.children[i];
                        cloud.position.x += Math.sin(elapsedTime * 0.1 + i) * 0.03; // 横向漂浮
                        cloud.position.y += Math.sin(elapsedTime * 0.05 + i * 0.5) * 0.01; // 轻微上下浮动
                    }
                }
            }["Home.useEffect.animateLandscape"];
            // 添加到动画循环
            scene.userData.animateFunctions = scene.userData.animateFunctions || [];
            scene.userData.animateFunctions.push(animateLandscape);
            return ({
                "Home.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    if (currentCanvas) {
                        // Use currentCanvas instead of canvasRef.current
                        renderer.dispose();
                        scene.clear();
                    }
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    // 处理音乐播放
    const toggleMusic = ()=>{
        const audio = audioRef.current;
        if (!audio) return;
        if (audio.paused) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(()=>{
                    setAudioPlaying(true);
                }).catch((err)=>{
                    console.log("Could not play audio:", err);
                });
            }
        } else {
            audio.pause();
            setAudioPlaying(false);
        }
    };
    // 处理"进入我们的世界"按钮点击
    const handleEnterClick = ()=>{
        // 直接跳转到世界页面，不显示烟花
        router.push('/world');
        // 如果音频文件存在，则尝试播放
        const audio = audioRef.current;
        if (audio) {
            audio.play().catch((err)=>{
                console.log("Audio play was prevented:", err);
            });
            setAudioPlaying(true);
        }
    };
    // 在组件挂载时创建音频元素
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // 检查audioRef是否已经有值
            if (!audioRef.current) {
                const audioElement = new Audio("/music/M500000vyP282Pn71W.mp3");
                audioElement.loop = true;
                // 设置预加载
                audioElement.preload = "auto";
                // 设置加载事件
                audioElement.addEventListener('loadeddata', {
                    "Home.useEffect": ()=>{
                        console.log("音频已加载");
                        setAudioLoaded(true);
                        // 尝试自动播放
                        try {
                            const playPromise = audioElement.play();
                            if (playPromise !== undefined) {
                                playPromise.then({
                                    "Home.useEffect": ()=>{
                                        console.log("音频自动播放成功");
                                        setAudioPlaying(true);
                                    }
                                }["Home.useEffect"]).catch({
                                    "Home.useEffect": (err)=>{
                                        console.log("音频自动播放被阻止:", err);
                                    }
                                }["Home.useEffect"]);
                            }
                        } catch (e) {
                            console.log("音频播放出错:", e);
                        }
                    }
                }["Home.useEffect"]);
                audioRef.current = audioElement;
            }
            // 组件卸载时处理音频
            return ({
                "Home.useEffect": ()=>{
                    const audioElement = audioRef.current;
                    if (audioElement) {
                        audioElement.pause();
                        audioElement.src = "";
                    }
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].canvas
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1827,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: "遇见 Destin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1830,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                        children: "Lumière d'Étoiles"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1831,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttons,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].enterBtn,
                                onClick: handleEnterClick,
                                children: "进入我的世界"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1834,
                                columnNumber: 11
                            }, this),
                            audioLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].musicBtn} ${audioPlaying ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playing : ''}`,
                                onClick: toggleMusic,
                                children: audioPlaying ? '暂停音乐' : '播放音乐'
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1839,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1833,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1829,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 1826,
        columnNumber: 5
    }, this);
}
_s(Home, "hYeS6mAbqdudHa0NZBSSm1GBfW8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_542ed76e._.js.map