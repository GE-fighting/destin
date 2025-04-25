module.exports = {

"[project]/src/app/world/World.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "canvas": "World-module__6lpB6a__canvas",
  "celebrationCanvas": "World-module__6lpB6a__celebrationCanvas",
  "container": "World-module__6lpB6a__container",
  "counter": "World-module__6lpB6a__counter",
  "counterCircle": "World-module__6lpB6a__counterCircle",
  "fadeIn": "World-module__6lpB6a__fadeIn",
  "header": "World-module__6lpB6a__header",
  "musicBtn": "World-module__6lpB6a__musicBtn",
  "pulse": "World-module__6lpB6a__pulse",
  "text": "World-module__6lpB6a__text",
});
}}),
"[project]/src/app/world/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>World)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/world/World.module.css [app-ssr] (css module)");
"use client";
;
;
;
function World() {
    // const router = useRouter();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const counterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const celebrationCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [counter, setCounter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showCelebration, setShowCelebration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioLoaded, setAudioLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioPlaying, setAudioPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // 控制音乐播放暂停
    const toggleMusic = ()=>{
        const audio = audioRef.current;
        if (!audio) return;
        if (audio.paused) {
            audio.play();
            setAudioPlaying(true);
        } else {
            audio.pause();
            setAudioPlaying(false);
        }
    };
    // 页面加载后自动播放音乐
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const audio = audioRef.current;
        if (audio && audio.duration > 0) {
            audio.play().catch((err)=>{
                console.log("Audio autoplay was prevented:", err);
            });
            setAudioPlaying(true);
        }
    }, [
        audioLoaded
    ]);
    // Text to be gradually displayed
    const fullText = "可爱的向日葵公主，我们的旅程，从这里开始；每一步都将是新的发现，每一刻都是珍贵的回忆，希望我们每天开心、幸福~";
    // 烟花和鲜花动画
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!showCelebration) return;
        const canvas = celebrationCanvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        // 设置canvas尺寸为全屏
        const handleResize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        // 存储所有烟花和花朵
        const fireworks = [];
        const flowers = [];
        // 定义烟花颜色
        const fireworkColors = [
            '#ff1a1a',
            '#ff751a',
            '#ffff1a',
            '#75ff1a',
            '#1aff1a',
            '#1aff75',
            '#1affff',
            '#1a75ff',
            '#1a1aff',
            '#751aff',
            '#ff1aff',
            '#ff1a75'
        ];
        // 定义花朵颜色
        const flowerColors = [
            '#FF9999',
            '#FF66B2',
            '#FF99E6',
            '#E6B3FF',
            '#B3CCFF',
            '#99FFFF',
            '#B3FFB3',
            '#FFFF99',
            '#FFE6B3',
            '#FFCCB3',
            '#F0B3FF',
            '#E6FFCC'
        ];
        // 创建新烟花
        const createFirework = ()=>{
            const startX = Math.random() * canvas.width;
            const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
            fireworks.push({
                x: startX,
                y: canvas.height,
                targetY: Math.random() * canvas.height * 0.5,
                vx: Math.random() * 2 - 1,
                vy: -Math.random() * 5 - 5,
                size: 3 + Math.random() * 2,
                color: color,
                particles: [],
                exploded: false
            });
        };
        // 烟花爆炸
        const explodeFirework = (firework)=>{
            firework.exploded = true;
            const particleCount = 50 + Math.floor(Math.random() * 50);
            for(let i = 0; i < particleCount; i++){
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 5 + 1;
                firework.particles.push({
                    x: firework.x,
                    y: firework.y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    size: 1 + Math.random() * 2,
                    color: firework.color,
                    alpha: 1,
                    gravity: 0.05 + Math.random() * 0.05,
                    rotation: Math.random() * Math.PI * 2,
                    rotationSpeed: (Math.random() - 0.5) * 0.1
                });
            }
        };
        // 创建新花朵
        const createFlower = ()=>{
            const flowerColor = flowerColors[Math.floor(Math.random() * flowerColors.length)];
            const centerColors = [
                '#FFD700',
                '#FFA500',
                '#FFFF00',
                '#FFFFFF'
            ];
            flowers.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: 15 + Math.random() * 25,
                petalCount: 5 + Math.floor(Math.random() * 7),
                color: flowerColor,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.01,
                growthProgress: 0,
                growthSpeed: 0.01 + Math.random() * 0.03,
                centerColor: centerColors[Math.floor(Math.random() * centerColors.length)],
                alpha: 0,
                fadeSpeed: 0.005 + Math.random() * 0.01
            });
        };
        // 绘制花朵
        const drawFlower = (flower)=>{
            const { x, y, size, petalCount, color, rotation, growthProgress, centerColor, alpha } = flower;
            if (growthProgress <= 0 || alpha <= 0) return;
            const actualSize = size * growthProgress;
            const petalLength = actualSize * 0.8;
            const centerSize = actualSize * 0.3;
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.globalAlpha = alpha;
            // 绘制花瓣
            ctx.fillStyle = color;
            for(let i = 0; i < petalCount; i++){
                const angle = i / petalCount * Math.PI * 2;
                ctx.beginPath();
                ctx.ellipse(Math.cos(angle) * actualSize * 0.3, Math.sin(angle) * actualSize * 0.3, petalLength / 2, actualSize / 3, angle, 0, Math.PI * 2);
                ctx.fill();
            }
            // 绘制花蕊中心
            ctx.fillStyle = centerColor;
            ctx.beginPath();
            ctx.arc(0, 0, centerSize, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        };
        // 动画循环
        let animationId;
        const animate = ()=>{
            // 清空画布，使用半透明黑色以产生拖尾效果
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // 随机添加新烟花
            if (Math.random() > 0.95) {
                createFirework();
            }
            // 随机添加新花朵
            if (Math.random() > 0.97) {
                createFlower();
            }
            // 更新和绘制所有烟花
            for(let i = fireworks.length - 1; i >= 0; i--){
                const firework = fireworks[i];
                if (!firework.exploded) {
                    // 更新未爆炸的烟花位置
                    firework.x += firework.vx;
                    firework.y += firework.vy;
                    // 检查是否到达目标高度
                    if (firework.y <= firework.targetY) {
                        explodeFirework(firework);
                    }
                    // 绘制上升轨迹
                    ctx.fillStyle = firework.color;
                    ctx.beginPath();
                    ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
                    ctx.fill();
                    // 绘制烟花轨迹
                    ctx.strokeStyle = firework.color;
                    ctx.lineWidth = firework.size / 2;
                    ctx.beginPath();
                    ctx.moveTo(firework.x, firework.y);
                    ctx.lineTo(firework.x - firework.vx * 5, firework.y - firework.vy * 5);
                    ctx.stroke();
                } else {
                    // 更新爆炸后的粒子
                    let allParticlesDone = true;
                    for(let j = firework.particles.length - 1; j >= 0; j--){
                        const particle = firework.particles[j];
                        // 更新粒子位置
                        particle.x += particle.vx;
                        particle.y += particle.vy;
                        particle.vy += particle.gravity;
                        particle.alpha -= 0.01;
                        particle.rotation += particle.rotationSpeed;
                        // 如果粒子还可见则绘制
                        if (particle.alpha > 0) {
                            allParticlesDone = false;
                            // 绘制粒子
                            ctx.save();
                            ctx.translate(particle.x, particle.y);
                            ctx.rotate(particle.rotation);
                            ctx.globalAlpha = particle.alpha;
                            // 特殊粒子形状
                            if (Math.random() > 0.7) {
                                // 星形
                                ctx.fillStyle = particle.color;
                                ctx.beginPath();
                                ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
                                ctx.fill();
                                // 发光效果
                                const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 3);
                                glow.addColorStop(0, particle.color);
                                glow.addColorStop(1, 'transparent');
                                ctx.fillStyle = glow;
                                ctx.beginPath();
                                ctx.arc(0, 0, particle.size * 3, 0, Math.PI * 2);
                                ctx.fill();
                            } else {
                                // 普通圆形
                                ctx.fillStyle = particle.color;
                                ctx.beginPath();
                                ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
                                ctx.fill();
                            }
                            ctx.restore();
                        }
                    }
                    // 如果所有粒子都消失，移除该烟花
                    if (allParticlesDone) {
                        fireworks.splice(i, 1);
                    }
                }
            }
            // 更新和绘制所有花朵
            for(let i = flowers.length - 1; i >= 0; i--){
                const flower = flowers[i];
                // 更新花朵生长进度
                if (flower.growthProgress < 1) {
                    flower.growthProgress += flower.growthSpeed;
                    flower.alpha = Math.min(1, flower.alpha + 0.05);
                } else {
                    // 花朵完全绽放后慢慢消失
                    flower.alpha -= flower.fadeSpeed;
                }
                // 更新旋转
                flower.rotation += flower.rotationSpeed;
                // 如果花朵仍然可见则绘制
                if (flower.alpha > 0) {
                    drawFlower(flower);
                } else {
                    flowers.splice(i, 1);
                }
            }
            animationId = requestAnimationFrame(animate);
        };
        // 启动动画
        animate();
        // 初始创建一批花朵和烟花以立即显示效果
        for(let i = 0; i < 10; i++){
            createFirework();
        }
        for(let i = 0; i < 15; i++){
            createFlower();
        }
        return ()=>{
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, [
        showCelebration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 设置总动画持续时间（毫秒）
        const totalAnimationDuration = 20000;
        // 计算文字动画速度
        const textAnimationInterval = totalAnimationDuration / fullText.length;
        // 计算数字动画速度
        const counterAnimationInterval = totalAnimationDuration / 31;
        // 记录开始时间
        const startTime = Date.now();
        // Gradually display text
        let currentTextIndex = 0;
        const textInterval = setInterval(()=>{
            if (currentTextIndex < fullText.length) {
                setDisplayedText(fullText.substring(0, currentTextIndex + 1));
                currentTextIndex++;
            } else {
                clearInterval(textInterval);
            }
        }, textAnimationInterval);
        // Increment counter
        let currentCounter = 0;
        const counterInterval = setInterval(()=>{
            if (currentCounter < 31) {
                currentCounter++;
                setCounter(currentCounter);
            } else {
                clearInterval(counterInterval);
            }
        }, counterAnimationInterval);
        // Set up train animation canvas
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        // Set canvas size
        const handleResize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 0.6;
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        // 计算列车需要行驶的总距离
        const totalDistance = canvas.width + 600; // 屏幕宽度 + 列车长度 + 一些额外距离
        // 根据总时间计算列车速度
        const trainSpeed = totalDistance / (totalAnimationDuration / 1000 * 60); // 每帧移动距离
        // Train properties
        const train = {
            x: -300,
            y: canvas.height * 0.7,
            width: 300,
            height: 80,
            speed: trainSpeed,
            cars: 6,
            wheels: [],
            windows: [],
            smoke: [],
            distanceToTravel: totalDistance,
            startTime: startTime,
            totalDuration: totalAnimationDuration
        };
        // Initialize train details
        for(let i = 0; i < train.cars; i++){
            // Create wheels for each car
            for(let j = 0; j < 2; j++){
                train.wheels.push({
                    x: i * 50 + j * 30,
                    y: 20,
                    radius: 12
                });
            }
            // Create windows for each car
            for(let k = 0; k < 3; k++){
                train.windows.push({
                    x: i * 50 + k * 15 + 5,
                    y: 10,
                    width: 12,
                    height: 18,
                    lit: Math.random() > 0.3
                });
            }
        }
        // Draw background with stars and moon
        const drawBackground = ()=>{
            // Draw gradient night sky
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#000714');
            gradient.addColorStop(1, '#001437');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Draw stars
            const starCount = 200;
            for(let i = 0; i < starCount; i++){
                const x = Math.random() * canvas.width;
                const y = Math.random() * (canvas.height * 0.7);
                const size = Math.random() * 2;
                const alpha = Math.random() * 0.8 + 0.2;
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }
            // Draw moon
            ctx.fillStyle = 'rgba(255, 255, 230, 0.8)';
            ctx.beginPath();
            ctx.arc(canvas.width * 0.8, canvas.height * 0.2, 40, 0, Math.PI * 2);
            ctx.fill();
            // Add glow around moon
            const moonGlow = ctx.createRadialGradient(canvas.width * 0.8, canvas.height * 0.2, 40, canvas.width * 0.8, canvas.height * 0.2, 100);
            moonGlow.addColorStop(0, 'rgba(255, 255, 230, 0.3)');
            moonGlow.addColorStop(1, 'transparent');
            ctx.fillStyle = moonGlow;
            ctx.beginPath();
            ctx.arc(canvas.width * 0.8, canvas.height * 0.2, 100, 0, Math.PI * 2);
            ctx.fill();
        };
        // Draw distant mountains
        const drawMountains = ()=>{
            ctx.fillStyle = '#001025';
            // First range (far)
            ctx.beginPath();
            ctx.moveTo(0, canvas.height * 0.6);
            const peakCount = 5;
            const segmentWidth = canvas.width / peakCount;
            for(let i = 0; i <= peakCount; i++){
                const x = i * segmentWidth;
                const y = canvas.height * 0.6 - (Math.random() * canvas.height * 0.15 + canvas.height * 0.05);
                if (i === 0) {
                    ctx.lineTo(x, y);
                } else {
                    // Create varied mountain shapes
                    const cpX1 = x - segmentWidth * 0.6;
                    const cpY1 = y + (Math.random() * canvas.height * 0.05 - canvas.height * 0.025);
                    const cpX2 = x - segmentWidth * 0.4;
                    const cpY2 = y - (Math.random() * canvas.height * 0.05 - canvas.height * 0.025);
                    ctx.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, x, y);
                }
            }
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.closePath();
            ctx.fill();
        };
        // 计算动画进度，确保列车按照总时间到达终点
        const calculateTrainPosition = ()=>{
            const currentTime = Date.now();
            const elapsedTime = currentTime - train.startTime;
            // 计算当前应该走完的比例
            const progress = Math.min(elapsedTime / train.totalDuration, 1);
            // 根据进度计算当前位置
            return -300 + progress * train.distanceToTravel;
        };
        // Animation function
        let animationId;
        const animate = ()=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Draw environmental elements
            drawBackground();
            drawMountains();
            // Draw track
            ctx.strokeStyle = '#444';
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(0, train.y + train.height / 2);
            ctx.lineTo(canvas.width, train.y + train.height / 2);
            ctx.stroke();
            // Draw sleepers (railroad ties)
            ctx.strokeStyle = '#555';
            ctx.lineWidth = 3;
            for(let i = 0; i < canvas.width; i += 20){
                ctx.beginPath();
                ctx.moveTo(i, train.y + train.height / 2 - 5);
                ctx.lineTo(i + 15, train.y + train.height / 2 - 5);
                ctx.stroke();
            }
            // 更新列车位置 - 使用计算的位置而不是固定的速度
            train.x = calculateTrainPosition();
            // 检查是否达到目标位置
            const reachedEnd = train.x >= canvas.width;
            // Draw train cars
            for(let i = 0; i < train.cars; i++){
                const carX = train.x + i * 50;
                // Only draw if car is in view
                if (carX > -50 && carX < canvas.width) {
                    // Car body
                    ctx.fillStyle = i === 0 ? '#2a4b8d' : '#3a6abd';
                    ctx.fillRect(carX, train.y - train.height, 45, train.height);
                    // Add details to locomotive
                    if (i === 0) {
                        // Locomotive front
                        ctx.fillStyle = '#1a3b6d';
                        ctx.fillRect(carX + 40, train.y - train.height, 5, train.height * 0.7);
                        // Smokestack
                        ctx.fillStyle = '#222';
                        ctx.fillRect(carX + 10, train.y - train.height - 10, 6, 10);
                    }
                    // Windows
                    train.windows.forEach((window1, index)=>{
                        if (Math.floor(index / 3) === i) {
                            ctx.fillStyle = window1.lit ? 'rgba(255, 255, 150, 0.7)' : 'rgba(20, 30, 50, 0.8)';
                            ctx.fillRect(carX + window1.x, train.y - train.height + window1.y, window1.width, window1.height);
                            // Add window frame
                            ctx.strokeStyle = '#444';
                            ctx.lineWidth = 1;
                            ctx.strokeRect(carX + window1.x, train.y - train.height + window1.y, window1.width, window1.height);
                        }
                    });
                    // Wheels
                    ctx.fillStyle = '#111';
                    train.wheels.forEach((wheel, index)=>{
                        if (Math.floor(index / 2) === i) {
                            ctx.beginPath();
                            ctx.arc(carX + wheel.x, train.y + wheel.y, wheel.radius, 0, Math.PI * 2);
                            ctx.fill();
                            // Add wheel details
                            ctx.strokeStyle = '#444';
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.arc(carX + wheel.x, train.y + wheel.y, wheel.radius * 0.6, 0, Math.PI * 2);
                            ctx.stroke();
                        }
                    });
                    // Add connector between cars if not first car
                    if (i > 0) {
                        ctx.fillStyle = '#333';
                        ctx.fillRect(carX - 5, train.y - train.height / 2, 5, 5);
                    }
                }
            }
            // Add smoke to the first car (locomotive)
            if (Math.random() > 0.7 && !reachedEnd) {
                train.smoke.push({
                    x: train.x + 12,
                    y: train.y - train.height - 10,
                    radius: 3 + Math.random() * 4,
                    alpha: 0.9,
                    speed: 0.3 + Math.random() * 0.6
                });
            }
            // Update and draw smoke
            for(let i = train.smoke.length - 1; i >= 0; i--){
                const smoke = train.smoke[i];
                smoke.y -= smoke.speed;
                smoke.x -= smoke.speed * 0.2;
                smoke.radius += 0.2;
                smoke.alpha -= 0.008;
                if (smoke.alpha <= 0) {
                    train.smoke.splice(i, 1);
                } else {
                    ctx.fillStyle = `rgba(200, 200, 200, ${smoke.alpha})`;
                    ctx.beginPath();
                    ctx.arc(smoke.x, smoke.y, smoke.radius, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            // 检查是否所有动画完成
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < totalAnimationDuration) {
                animationId = requestAnimationFrame(animate);
            } else {
                // 所有动画完成，确保文本和计数器达到最终状态
                setDisplayedText(fullText);
                setCounter(31);
                // 显示庆祝动画
                setShowCelebration(true);
            }
        };
        animate();
        return ()=>{
            clearInterval(textInterval);
            clearInterval(counterInterval);
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: "/music/M500000vyP282Pn71W.mp3",
                loop: true,
                onCanPlayThrough: ()=>setAudioLoaded(true)
            }, void 0, false, {
                fileName: "[project]/src/app/world/page.tsx",
                lineNumber: 771,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: textRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text,
                        children: displayedText
                    }, void 0, false, {
                        fileName: "[project]/src/app/world/page.tsx",
                        lineNumber: 779,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: counterRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].counter,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].counterCircle,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: counter
                            }, void 0, false, {
                                fileName: "[project]/src/app/world/page.tsx",
                                lineNumber: 785,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/world/page.tsx",
                            lineNumber: 784,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/world/page.tsx",
                        lineNumber: 783,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/world/page.tsx",
                lineNumber: 778,
                columnNumber: 7
            }, this),
            audioLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].musicBtn,
                onClick: toggleMusic,
                children: audioPlaying ? '暂停音乐' : '播放音乐'
            }, void 0, false, {
                fileName: "[project]/src/app/world/page.tsx",
                lineNumber: 791,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].canvas
            }, void 0, false, {
                fileName: "[project]/src/app/world/page.tsx",
                lineNumber: 799,
                columnNumber: 7
            }, this),
            showCelebration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: celebrationCanvasRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].celebrationCanvas
            }, void 0, false, {
                fileName: "[project]/src/app/world/page.tsx",
                lineNumber: 802,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/world/page.tsx",
        lineNumber: 770,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_f383c05c._.js.map