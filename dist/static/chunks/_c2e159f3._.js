(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/world/World.module.css [app-client] (css module)": ((__turbopack_context__) => {

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
"[project]/src/app/world/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>World)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/world/World.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function World() {
    _s();
    // const router = useRouter();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const counterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const celebrationCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [counter, setCounter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showCelebration, setShowCelebration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioLoaded, setAudioLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioPlaying, setAudioPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "World.useEffect": ()=>{
            const audio = audioRef.current;
            if (audio && audio.duration > 0) {
                audio.play().catch({
                    "World.useEffect": (err)=>{
                        console.log("Audio autoplay was prevented:", err);
                    }
                }["World.useEffect"]);
                setAudioPlaying(true);
            }
        }
    }["World.useEffect"], [
        audioLoaded
    ]);
    // Text to be gradually displayed
    const fullText = "可爱的蒲公英女孩，我们的旅程，从这里开始；每一步都将是新的发现，每一刻都是珍贵的回忆，希望我们每天开心、幸福~";
    // 烟花和鲜花动画
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "World.useEffect": ()=>{
            if (!showCelebration) return;
            const canvas = celebrationCanvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // 设置canvas尺寸为全屏
            const handleResize = {
                "World.useEffect.handleResize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["World.useEffect.handleResize"];
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
            const createFirework = {
                "World.useEffect.createFirework": ()=>{
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
                }
            }["World.useEffect.createFirework"];
            // 烟花爆炸
            const explodeFirework = {
                "World.useEffect.explodeFirework": (firework)=>{
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
                }
            }["World.useEffect.explodeFirework"];
            // 创建新花朵
            const createFlower = {
                "World.useEffect.createFlower": ()=>{
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
                }
            }["World.useEffect.createFlower"];
            // 绘制花朵
            const drawFlower = {
                "World.useEffect.drawFlower": (flower)=>{
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
                }
            }["World.useEffect.drawFlower"];
            // 动画循环
            let animationId;
            const animate = {
                "World.useEffect.animate": ()=>{
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
                }
            }["World.useEffect.animate"];
            // 启动动画
            animate();
            // 初始创建一批花朵和烟花以立即显示效果
            for(let i = 0; i < 10; i++){
                createFirework();
            }
            for(let i = 0; i < 15; i++){
                createFlower();
            }
            return ({
                "World.useEffect": ()=>{
                    cancelAnimationFrame(animationId);
                    window.removeEventListener('resize', handleResize);
                }
            })["World.useEffect"];
        }
    }["World.useEffect"], [
        showCelebration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "World.useEffect": ()=>{
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
            const textInterval = setInterval({
                "World.useEffect.textInterval": ()=>{
                    if (currentTextIndex < fullText.length) {
                        setDisplayedText(fullText.substring(0, currentTextIndex + 1));
                        currentTextIndex++;
                    } else {
                        clearInterval(textInterval);
                    }
                }
            }["World.useEffect.textInterval"], textAnimationInterval);
            // Increment counter
            let currentCounter = 0;
            const counterInterval = setInterval({
                "World.useEffect.counterInterval": ()=>{
                    if (currentCounter < 31) {
                        currentCounter++;
                        setCounter(currentCounter);
                    } else {
                        clearInterval(counterInterval);
                    }
                }
            }["World.useEffect.counterInterval"], counterAnimationInterval);
            // Set up train animation canvas
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Set canvas size
            const handleResize = {
                "World.useEffect.handleResize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight * 0.6;
                }
            }["World.useEffect.handleResize"];
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
            const drawBackground = {
                "World.useEffect.drawBackground": ()=>{
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
                }
            }["World.useEffect.drawBackground"];
            // Draw distant mountains
            const drawMountains = {
                "World.useEffect.drawMountains": ()=>{
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
                }
            }["World.useEffect.drawMountains"];
            // 计算动画进度，确保列车按照总时间到达终点
            const calculateTrainPosition = {
                "World.useEffect.calculateTrainPosition": ()=>{
                    const currentTime = Date.now();
                    const elapsedTime = currentTime - train.startTime;
                    // 计算当前应该走完的比例
                    const progress = Math.min(elapsedTime / train.totalDuration, 1);
                    // 根据进度计算当前位置
                    return -300 + progress * train.distanceToTravel;
                }
            }["World.useEffect.calculateTrainPosition"];
            // Animation function
            let animationId;
            const animate = {
                "World.useEffect.animate": ()=>{
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
                            train.windows.forEach({
                                "World.useEffect.animate": (window1, index)=>{
                                    if (Math.floor(index / 3) === i) {
                                        ctx.fillStyle = window1.lit ? 'rgba(255, 255, 150, 0.7)' : 'rgba(20, 30, 50, 0.8)';
                                        ctx.fillRect(carX + window1.x, train.y - train.height + window1.y, window1.width, window1.height);
                                        // Add window frame
                                        ctx.strokeStyle = '#444';
                                        ctx.lineWidth = 1;
                                        ctx.strokeRect(carX + window1.x, train.y - train.height + window1.y, window1.width, window1.height);
                                    }
                                }
                            }["World.useEffect.animate"]);
                            // Wheels
                            ctx.fillStyle = '#111';
                            train.wheels.forEach({
                                "World.useEffect.animate": (wheel, index)=>{
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
                                }
                            }["World.useEffect.animate"]);
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
                }
            }["World.useEffect.animate"];
            animate();
            return ({
                "World.useEffect": ()=>{
                    clearInterval(textInterval);
                    clearInterval(counterInterval);
                    cancelAnimationFrame(animationId);
                    window.removeEventListener('resize', handleResize);
                }
            })["World.useEffect"];
        }
    }["World.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: "/music/M500000vyP282Pn71W.mp3",
                loop: true,
                onCanPlayThrough: ()=>setAudioLoaded(true)
            }, void 0, false, {
                fileName: "[project]/src/app/world/page.tsx",
                lineNumber: 771,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: textRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                        children: displayedText
                    }, void 0, false, {
                        fileName: "[project]/src/app/world/page.tsx",
                        lineNumber: 779,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: counterRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].counter,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].counterCircle,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            audioLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].musicBtn,
                onClick: toggleMusic,
                children: audioPlaying ? '暂停音乐' : '播放音乐'
            }, void 0, false, {
                fileName: "[project]/src/app/world/page.tsx",
                lineNumber: 791,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].canvas
            }, void 0, false, {
                fileName: "[project]/src/app/world/page.tsx",
                lineNumber: 799,
                columnNumber: 7
            }, this),
            showCelebration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: celebrationCanvasRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$world$2f$World$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].celebrationCanvas
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
_s(World, "l3g1nWB4iRbFRLiVapkCdaUy5CI=");
_c = World;
var _c;
__turbopack_context__.k.register(_c, "World");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_c2e159f3._.js.map