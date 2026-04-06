/***  particles.js — ambient cursor-interactive dot field  ***/
(function () {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, dpr;
    let particles = [];
    let mouse = { x: -9999, y: -9999, active: false };
    let rafId = null;
    let frameCount = 0;

    /* ---- Configuration ---- */
    const CFG = {
        count:         80,
        speed:         0.25,
        drift:         0.0003,        // gentle sine-drift amplitude
        connectionDist: 130,
        mouseDist:     180,
        mouseRepel:    0.012,
        dotMin:        1,
        dotMax:        2.4,
        lineAlphaMax:  0.10,
        dotAlphaMin:   0.15,
        dotAlphaMax:   0.50,
        pulseSpeed:    0.006,
        damping:       0.995,
        glowR:         6,
        glowAlpha:     0.06,
    };

    /* ---- Theme detection ---- */
    function isLight() {
        return document.documentElement.getAttribute('data-theme') === 'light';
    }
    function colors() {
        if (isLight()) {
            return {
                dot:  [99, 102, 241],    // indigo
                line: [99, 102, 241],
                glow: [139, 92, 246],
            };
        }
        return {
            dot:  [167, 139, 250],       // soft violet
            line: [139, 92, 246],
            glow: [167, 139, 250],
        };
    }

    /* ---- Helpers ---- */
    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width  = W * dpr;
        canvas.height = H * dpr;
        canvas.style.width  = W + 'px';
        canvas.style.height = H + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticle() {
        const r = CFG.dotMin + Math.random() * (CFG.dotMax - CFG.dotMin);
        const angle = Math.random() * Math.PI * 2;
        const speed = (0.3 + Math.random() * 0.7) * CFG.speed;
        return {
            x:  Math.random() * W,
            y:  Math.random() * H,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            r,
            baseR:   r,
            alpha:   CFG.dotAlphaMin + Math.random() * (CFG.dotAlphaMax - CFG.dotAlphaMin),
            phase:   Math.random() * Math.PI * 2,
            driftX:  (Math.random() - 0.5) * 2,
            driftY:  (Math.random() - 0.5) * 2,
        };
    }

    function init() {
        resize();
        particles = [];
        const n = Math.min(CFG.count, Math.round((W * H) / 14000));  // scale to viewport
        for (let i = 0; i < n; i++) particles.push(createParticle());
    }

    /* ---- Physics ---- */
    function update() {
        frameCount++;
        const t = frameCount * 0.01;

        for (const p of particles) {
            // gentle pulse
            p.phase += CFG.pulseSpeed;
            p.r = p.baseR + Math.sin(p.phase) * 0.35;

            // sine drift (organic wandering)
            p.vx += Math.sin(t + p.driftX * 3) * CFG.drift;
            p.vy += Math.cos(t + p.driftY * 3) * CFG.drift;

            // mouse repulsion
            if (mouse.active) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CFG.mouseDist && dist > 0) {
                    const force = (1 - dist / CFG.mouseDist) * CFG.mouseRepel;
                    p.vx += (dx / dist) * force;
                    p.vy += (dy / dist) * force;
                }
            }

            // damping
            p.vx *= CFG.damping;
            p.vy *= CFG.damping;

            // move
            p.x += p.vx;
            p.y += p.vy;

            // wrap edges
            if (p.x < -30) p.x = W + 30;
            if (p.x > W + 30) p.x = -30;
            if (p.y < -30) p.y = H + 30;
            if (p.y > H + 30) p.y = -30;
        }
    }

    /* ---- Render ---- */
    function draw() {
        ctx.clearRect(0, 0, W, H);
        const c = colors();
        const len = particles.length;

        // ─── Connection lines ───
        for (let i = 0; i < len; i++) {
            const a = particles[i];
            for (let j = i + 1; j < len; j++) {
                const b = particles[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CFG.connectionDist) {
                    const alpha = (1 - dist / CFG.connectionDist) * CFG.lineAlphaMax;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${c.line[0]},${c.line[1]},${c.line[2]},${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }

        // ─── Dots ───
        for (const p of particles) {
            let r = p.r;
            let alpha = p.alpha;

            // cursor proximity brightening
            if (mouse.active) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CFG.mouseDist) {
                    const proximity = 1 - dist / CFG.mouseDist;
                    alpha = Math.min(alpha + proximity * 0.4, 0.9);
                    r *= 1 + proximity * 0.5;

                    // soft glow halo
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, r + CFG.glowR, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${c.glow[0]},${c.glow[1]},${c.glow[2]},${proximity * CFG.glowAlpha})`;
                    ctx.fill();
                }
            }

            // the dot
            ctx.beginPath();
            ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${c.dot[0]},${c.dot[1]},${c.dot[2]},${alpha})`;
            ctx.fill();
        }

        // ─── Cursor-to-dot lines (very subtle) ───
        if (mouse.active) {
            const reach = CFG.mouseDist * 0.65;
            for (const p of particles) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < reach) {
                    const alpha = (1 - dist / reach) * 0.06;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${c.glow[0]},${c.glow[1]},${c.glow[2]},${alpha})`;
                    ctx.lineWidth = 0.4;
                    ctx.moveTo(mouse.x, mouse.y);
                    ctx.lineTo(p.x, p.y);
                    ctx.stroke();
                }
            }
        }
    }

    /* ---- Loop ---- */
    function loop() {
        update();
        draw();
        rafId = requestAnimationFrame(loop);
    }

    function start() {
        if (!rafId) {
            rafId = requestAnimationFrame(loop);
        }
    }

    function stop() {
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    }

    /* ---- Events ---- */
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            resize();
            // cull or add particles to match new viewport
            const target = Math.min(CFG.count, Math.round((W * H) / 14000));
            while (particles.length < target) particles.push(createParticle());
            while (particles.length > target) particles.pop();
        }, 150);
    });

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
    });

    window.addEventListener('mouseleave', () => {
        mouse.active = false;
    });

    // Pause when tab not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stop();
        else start();
    });

    /* ---- Go ---- */
    init();
    start();
})();
