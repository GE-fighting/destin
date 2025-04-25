"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './World.module.css';
import { useRouter } from 'next/navigation';

interface Wheel {
  x: number;
  y: number;
  radius: number;
}

interface Window {
  x: number;
  y: number;
  width: number;
  height: number;
  lit: boolean;
}

interface Smoke {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  speed: number;
}

interface Train {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  cars: number;
  wheels: Wheel[];
  windows: Window[];
  smoke: Smoke[];
}

export default function World() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLDivElement | null>(null);
  
  const [counter, setCounter] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  
  // Text to be gradually displayed
  const fullText = "我们的旅程，从这里开始。每一步都将是新的发现，每一刻都是珍贵的回忆。在这个世界里，我们一起创造属于我们的故事。";
  
  useEffect(() => {
    // Gradually display text
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 100);
    
    // Increment counter
    let currentCounter = 0;
    const counterInterval = setInterval(() => {
      if (currentCounter < 30) {
        currentCounter++;
        setCounter(currentCounter);
      } else {
        clearInterval(counterInterval);
      }
    }, 200);
    
    // Set up train animation canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.6;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Train properties
    const train: Train = {
      x: -300, // Start off-screen
      y: canvas.height * 0.7,
      width: 300,
      height: 80,
      speed: 1.5,
      cars: 6,
      wheels: [],
      windows: [],
      smoke: []
    };
    
    // Initialize train details
    for (let i = 0; i < train.cars; i++) {
      // Create wheels for each car
      for (let j = 0; j < 2; j++) {
        train.wheels.push({
          x: i * 50 + j * 30,
          y: 20,
          radius: 12
        });
      }
      
      // Create windows for each car
      for (let k = 0; k < 3; k++) {
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
    const drawBackground = () => {
      // Draw gradient night sky
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#000714');
      gradient.addColorStop(1, '#001437');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      const starCount = 200;
      for (let i = 0; i < starCount; i++) {
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
      const moonGlow = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.2, 40,
        canvas.width * 0.8, canvas.height * 0.2, 100
      );
      moonGlow.addColorStop(0, 'rgba(255, 255, 230, 0.3)');
      moonGlow.addColorStop(1, 'transparent');
      
      ctx.fillStyle = moonGlow;
      ctx.beginPath();
      ctx.arc(canvas.width * 0.8, canvas.height * 0.2, 100, 0, Math.PI * 2);
      ctx.fill();
    };
    
    // Draw distant mountains
    const drawMountains = () => {
      ctx.fillStyle = '#001025';
      
      // First range (far)
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * 0.6);
      
      const peakCount = 5;
      const segmentWidth = canvas.width / peakCount;
      
      for (let i = 0; i <= peakCount; i++) {
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
    
    // Animation function
    let animationId: number;
    const animate = () => {
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
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, train.y + train.height / 2 - 5);
        ctx.lineTo(i + 15, train.y + train.height / 2 - 5);
        ctx.stroke();
      }
      
      // Update train position
      train.x += train.speed;
      
      // Draw train cars
      for (let i = 0; i < train.cars; i++) {
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
          train.windows.forEach((window, index) => {
            if (Math.floor(index / 3) === i) {
              ctx.fillStyle = window.lit ? 'rgba(255, 255, 150, 0.7)' : 'rgba(20, 30, 50, 0.8)';
              ctx.fillRect(
                carX + window.x, 
                train.y - train.height + window.y, 
                window.width, 
                window.height
              );
              
              // Add window frame
              ctx.strokeStyle = '#444';
              ctx.lineWidth = 1;
              ctx.strokeRect(
                carX + window.x, 
                train.y - train.height + window.y, 
                window.width, 
                window.height
              );
            }
          });
          
          // Wheels
          ctx.fillStyle = '#111';
          train.wheels.forEach((wheel, index) => {
            if (Math.floor(index / 2) === i) {
              ctx.beginPath();
              ctx.arc(
                carX + wheel.x, 
                train.y + wheel.y, 
                wheel.radius, 
                0, 
                Math.PI * 2
              );
              ctx.fill();
              
              // Add wheel details
              ctx.strokeStyle = '#444';
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.arc(
                carX + wheel.x, 
                train.y + wheel.y, 
                wheel.radius * 0.6, 
                0, 
                Math.PI * 2
              );
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
      if (Math.random() > 0.7) {
        train.smoke.push({
          x: train.x + 12,
          y: train.y - train.height - 10,
          radius: 3 + Math.random() * 4,
          alpha: 0.9,
          speed: 0.3 + Math.random() * 0.6
        });
      }
      
      // Update and draw smoke
      for (let i = train.smoke.length - 1; i >= 0; i--) {
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
      
      // Reset train position if it's off screen
      if (train.x > canvas.width) {
        train.x = -train.width * train.cars;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      clearInterval(textInterval);
      clearInterval(counterInterval);
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div ref={textRef} className={styles.text}>
          {displayedText}
        </div>
        
        <div ref={counterRef} className={styles.counter}>
          <div className={styles.counterCircle}>
            <span>{counter}</span>
          </div>
        </div>
      </div>
      
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
} 