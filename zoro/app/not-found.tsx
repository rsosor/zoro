"use client"

import React, { useEffect, useRef, useState } from 'react';

const App: React.FC = () => {
  const [message, setMessage] = useState('製作中');
  const [rotation, setRotation] = useState(0); 
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const grainsRef = useRef<{ x: number; y: number; vx: number; vy: number; color: string; settled: boolean }[]>([]);
  const stackHeightsRef = useRef<number[]>([]);
  const isFlippingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const maxGrains = 1200; // 沙子總量
    const gravity = 0.15;
    const friction = 0.98;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stackHeightsRef.current = new Array(Math.ceil(canvas.width)).fill(0);
    };

    const colors = ['#e2c18d', '#d4a373', '#faedcd', '#ccd5ae'];

    // 初始化沙子狀態
    const resetSimulation = () => {
      grainsRef.current = []; // 徹底清空現有的沙子數組
      if (stackHeightsRef.current.length > 0) {
        stackHeightsRef.current.fill(0); // 重置堆疊高度
      }
    };

    const createGrain = () => {
      // 只有在非翻轉狀態且沙子還沒滿時才產生
      if (!isFlippingRef.current && grainsRef.current.length < maxGrains) {
        grainsRef.current.push({
          x: canvas.width / 2 + (Math.random() - 0.5) * 25,
          y: -30,
          vx: (Math.random() - 0.5) * 1.8,
          vy: Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          settled: false
        });
      }
    };

    const draw = () => {
      // 繪製背景
      ctx.fillStyle = 'rgba(10, 15, 30, 0.4)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (!isFlippingRef.current) {
        createGrain();
      }

      const groundBase = canvas.height * 0.92;
      let settledCount = 0;

      grainsRef.current.forEach((g) => {
        if (!g.settled) {
          g.vy += gravity;
          g.vx *= friction;
          g.x += g.vx;
          g.y += g.vy;

          const xIdx = Math.floor(g.x);
          if (xIdx >= 0 && xIdx < stackHeightsRef.current.length) {
            const distFromCenter = Math.abs(g.x - canvas.width / 2);
            const hillShape = Math.max(0, 100 - distFromCenter * 0.45); 
            const currentMaxHeight = groundBase - stackHeightsRef.current[xIdx] - (hillShape * 0.25);

            if (g.y >= currentMaxHeight) {
              g.y = currentMaxHeight;
              g.vy = 0;
              g.vx = 0;
              g.settled = true;
              
              // 堆疊物理模擬
              for (let i = -3; i <= 3; i++) {
                if (xIdx + i >= 0 && xIdx + i < stackHeightsRef.current.length) {
                  stackHeightsRef.current[xIdx + i] += 0.55 / (Math.abs(i) + 1);
                }
              }
            }
          }

          if (g.x <= 0 || g.x >= canvas.width) {
            g.vx *= -0.5;
            g.x = g.x <= 0 ? 1 : canvas.width - 1;
          }
        } else {
          settledCount++;
        }

        ctx.fillStyle = g.color;
        ctx.fillRect(g.x, g.y, 3, 3);
      });

      // 當所有沙子都流完並沉澱時，觸發翻轉與重置
      if (grainsRef.current.length >= maxGrains && settledCount >= maxGrains && !isFlippingRef.current) {
        isFlippingRef.current = true;
        
        setTimeout(() => {
          // 執行旋轉動畫
          setRotation(prev => prev + 180);
          
          // 在旋轉動畫中段執行物理重置，讓它看起來像是重新開始
          setTimeout(() => {
            resetSimulation(); // 這裡執行歸零，清空沙子
            isFlippingRef.current = false;
          }, 750); // 動畫進行一半（旋轉到一半）時重置
        }, 1500); 
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    resetSimulation();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0f1e] text-white flex items-center justify-center overflow-hidden font-sans">
      {/* 旋轉畫布層 */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-[1500ms] cubic-bezier(0.45, 0, 0.55, 1)"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <canvas 
          ref={canvasRef} 
          className="w-full h-full opacity-100"
        />
      </div>

      {/* 靜止的裝飾背景 */}
      <div className="absolute inset-0 z-5 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[700px] border-x border-white/5 relative opacity-30">
          <div className="absolute top-[8%] left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200/20 to-transparent"></div>
          <div className="absolute bottom-[8%] left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200/20 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full flex justify-center">
             <div className="w-20 h-[2px] bg-amber-100/10 blur-[1px]"></div>
          </div>
        </div>
      </div>

      {/* UI 內容 */}
      <div className="relative z-20 text-center max-w-lg px-6 animate-fade-in">
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 2s ease-out forwards;
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.015);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 4rem;
            padding: 3.5rem;
            box-shadow: 0 40px 80px rgba(0, 0, 0, 0.7);
          }
        `}</style>

        <div className="text-[12rem] font-thin tracking-widest text-white opacity-5 select-none leading-none mb-6">
          404
        </div>
        
        <div className="glass-card">
          <h2 className="text-xl font-light tracking-[0.6em] text-amber-200/50 mb-8 uppercase">
            敬請期待
          </h2>
          
          <div className="space-y-6">
            <div className="text-white text-xl font-light italic opacity-90 min-h-[1.5em] tracking-wide">
              {message}
            </div>
            <p className="text-[10px] text-gray-500 tracking-[0.7em] uppercase opacity-60">
              Watching the grains of eternity
            </p>
          </div>

          <button 
            onClick={() => window.location.href = '/'}
            className="mt-12 px-14 py-3 bg-transparent border border-amber-200/20 text-amber-100/40 hover:text-amber-100 hover:border-amber-200/60 rounded-full transition-all duration-1000 text-[10px] tracking-[0.5em] uppercase hover:tracking-[0.6em]"
          >
            返回起始點
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 w-full text-center text-[9px] text-gray-700 tracking-[1.8em] uppercase pointer-events-none opacity-40">
        Continuous • Infinite • Cycle
      </div>
    </div>
  );
};

export default App;