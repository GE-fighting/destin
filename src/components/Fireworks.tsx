import { useEffect } from 'react';
import styles from '../app/Home.module.css';

interface FireworksProps {
  show: boolean;
}

// 注释掉或删除未使用的Star接口
// interface Star {
//   x: number;
//   y: number;
//   size: number;
//   alpha: number;
//   blinkSpeed: number;
// }

export default function Fireworks({ show }: FireworksProps) {
  useEffect(() => {
    if (!show) return;
    
    // 创建烟花画布
    const fireworksCanvas = document.createElement('canvas');
    fireworksCanvas.className = styles.fireworksCanvas;
    
    // 确保z-index正确，让烟花显示在ThreeJS场景之上，但在UI之下
    fireworksCanvas.style.zIndex = '15';
    
    document.body.appendChild(fireworksCanvas);
    
    fireworksCanvas.width = window.innerWidth;
    fireworksCanvas.height = window.innerHeight;
    
    const ctx = fireworksCanvas.getContext('2d');
    if (!ctx) return;
    
    // 创建夜空背景，使其透明以便能看到Three.js场景
    const createBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, fireworksCanvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 16, 0)'); // 完全透明的背景
      gradient.addColorStop(1, 'rgba(0, 0, 37, 0)'); // 完全透明的背景
      return gradient;
    };
    
    // 城市轮廓不再需要，因为Three.js场景已经提供了背景
    
    // 注释掉或删除未使用的函数
    // const createStars = () => {
    //   const stars = [];
    //   for (let i = 0; i < 200; i++) {
    //     stars.push({
    //       x: Math.random() * fireworksCanvas.width,
    //       y: Math.random() * fireworksCanvas.height * 0.7,
    //       size: Math.random() * 2,
    //       alpha: Math.random() * 0.8 + 0.2,
    //       blinkSpeed: Math.random() * 0.05
    //     });
    //   }
    //   return stars;
    // };
    
    // 纯粹的烟花颗粒
    class FireworkParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      alpha: number;
      gravity: number;
      decay: number;
      
      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        
        // 随机方向速度
        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 6; // 增加速度以获得更大的扩散效果
        
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.color = color;
        
        // 随机大小
        this.size = 1 + Math.random() * 2.5; // 增加粒子大小
        this.alpha = 1;
        
        // 重力和消失速度
        this.gravity = 0.05;
        this.decay = 0.01 + Math.random() * 0.02;
      }
      
      update() {
        // 应用重力
        this.vy += this.gravity;
        
        // 移动粒子
        this.x += this.vx;
        this.y += this.vy;
        
        // 透明度减少
        this.alpha -= this.decay;
        
        // 速度减缓
        this.vx *= 0.99;
        this.vy *= 0.99;
        
        // 如果透明度大于0，继续显示
        return this.alpha > 0;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        // 设置透明度
        ctx.globalAlpha = this.alpha;
        
        // 绘制粒子
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // 还原透明度
        ctx.globalAlpha = 1;
      }
    }
    
    // 烟花类
    class Firework {
      rocket: {
        x: number;
        y: number;
        vx: number;
        vy: number;
        color: string;
        size: number;
      };
      particles: FireworkParticle[];
      exploded: boolean;
      color: string;
      
      constructor() {
        // 烟花发射点
        const startX = Math.random() * fireworksCanvas.width;
        
        // 基本的火箭设置
        this.rocket = {
          x: startX,
          y: fireworksCanvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: -15 - Math.random() * 5,
          color: '#ffffff',
          size: 2
        };
        
        // 爆炸颗粒
        this.particles = [];
        this.exploded = false;
        
        // 随机颜色 - 更鲜艳的色彩
        const hue = Math.floor(Math.random() * 360);
        this.color = `hsl(${hue}, 100%, 60%)`;
      }
      
      update() {
        // 如果还没爆炸，更新火箭位置
        if (!this.exploded) {
          // 应用重力
          this.rocket.vy += 0.1;
          
          // 移动火箭
          this.rocket.x += this.rocket.vx;
          this.rocket.y += this.rocket.vy;
          
          // 当火箭速度变为向下时，爆炸
          if (this.rocket.vy >= 0) {
            this.explode();
          }
        }
        
        // 更新所有粒子
        this.particles = this.particles.filter(particle => particle.update());
        
        // 如果已爆炸且没有粒子，返回false表示烟花结束
        return !this.exploded || this.particles.length > 0;
      }
      
      explode() {
        this.exploded = true;
        
        // 创建爆炸粒子
        const particleCount = 200 + Math.floor(Math.random() * 150); // 增加到200-350个粒子
        
        for (let i = 0; i < particleCount; i++) {
          const particle = new FireworkParticle(
            this.rocket.x,
            this.rocket.y,
            this.color
          );
          
          this.particles.push(particle);
        }
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        // 绘制火箭
        if (!this.exploded) {
          ctx.fillStyle = this.rocket.color;
          ctx.beginPath();
          ctx.arc(this.rocket.x, this.rocket.y, this.rocket.size, 0, Math.PI * 2);
          ctx.fill();
          
          // 绘制火箭尾迹
          ctx.fillStyle = 'rgba(255, 255, 200, 0.5)';
          ctx.beginPath();
          ctx.arc(
            this.rocket.x, 
            this.rocket.y + 5, 
            this.rocket.size * 0.7, 
            0, 
            Math.PI * 2
          );
          ctx.fill();
        }
        
        // 绘制爆炸粒子
        for (const particle of this.particles) {
          particle.draw(ctx);
        }
      }
    }
    
    // 管理多个烟花
    const fireworks: Firework[] = [];
    let lastFireworkTime = 0;
    const fireworkInterval = 200; // 增加间隔到200ms
    let animationId: number;
    
    // 自动发射一颗烟花，确保初始效果
    fireworks.push(new Firework());
    
    // 动画循环
    const animate = () => {
      // 每隔一段时间发射新烟花
      const now = Date.now();
      if (now - lastFireworkTime > fireworkInterval) {
        // 一次发射2-4个烟花
        const burstCount = Math.floor(Math.random() * 3) + 2;
        for (let i = 0; i < burstCount; i++) {
          fireworks.push(new Firework());
        }
        
        lastFireworkTime = now;
      }
      
      // 清空画布，使用半透明黑色实现尾迹效果
      ctx.fillStyle = 'rgba(0, 0, 10, 0.1)'; // 更透明的黑色，以便显示更长的尾迹
      ctx.fillRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
      
      // 绘制背景
      ctx.fillStyle = createBackground();
      ctx.fillRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
      
      // 更新和绘制所有烟花
      for (let i = fireworks.length - 1; i >= 0; i--) {
        if (!fireworks[i].update()) {
          fireworks.splice(i, 1);
        } else {
          fireworks[i].draw(ctx);
        }
      }
      
      // 继续动画循环
      animationId = requestAnimationFrame(animate);
    };
    
    // 开始动画
    animate();
    
    // 处理窗口大小变化
    const handleFireworksResize = () => {
      fireworksCanvas.width = window.innerWidth;
      fireworksCanvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleFireworksResize);
    
    // 组件卸载时清理
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleFireworksResize);
      if (fireworksCanvas && fireworksCanvas.parentNode) {
        fireworksCanvas.parentNode.removeChild(fireworksCanvas);
      }
    };
  }, [show]);

  return null; // 组件不渲染可见内容
} 